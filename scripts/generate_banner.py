#!/usr/bin/env python3
"""Generate a portfolio banner for a project.

Output: public/projects/{slug}-banner.jpg at 1600x1200 (4:3), matches existing banners.
Used by the portfolio-maintainer subagent as a fallback when a project has no
hand-crafted banner. Deterministic: same slug always produces the same palette.

Usage:
    python scripts/generate_banner.py <slug> <title> <tagline> <tech1,tech2,...>

Example:
    python scripts/generate_banner.py cloudaudit "CloudAudit" \\
        "Multi-cloud cost and security audit tool" "Python,Terraform,AWS,Azure"
"""
import hashlib
import os
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1600, 1200

FONT_BOLD = "/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf"
FONT_REG = "/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf"
FONT_MONO_B = "/usr/share/fonts/truetype/ubuntu/UbuntuMono-B.ttf"

WHITE = (255, 255, 255)

PALETTES = [
    ((10, 20, 55), (5, 10, 30), (56, 189, 248)),
    ((40, 15, 65), (20, 10, 40), (168, 85, 247)),
    ((10, 40, 50), (5, 20, 30), (45, 212, 191)),
    ((50, 20, 30), (25, 10, 20), (244, 114, 182)),
    ((15, 45, 30), (5, 25, 15), (74, 222, 128)),
    ((45, 30, 15), (25, 15, 5), (251, 191, 36)),
]


def palette_for(slug: str):
    idx = int(hashlib.sha1(slug.encode()).hexdigest(), 16) % len(PALETTES)
    return PALETTES[idx]


def gradient(w, h, c1, c2):
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / h
        r = int(c1[0] * (1 - t) + c2[0] * t)
        g = int(c1[1] * (1 - t) + c2[1] * t)
        b = int(c1[2] * (1 - t) + c2[2] * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    return img.convert("RGBA")


def draw_pill(img, x, y, text, font, bg_color):
    draw = ImageDraw.Draw(img)
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0] + 36
    th = bbox[3] - bbox[1] + 20
    pill = Image.new("RGBA", (tw, th), (0, 0, 0, 0))
    pd = ImageDraw.Draw(pill)
    pd.rounded_rectangle([0, 0, tw, th], radius=th // 2, fill=bg_color + (220,))
    pd.text((18, 7), text, fill=WHITE, font=font)
    img.paste(pill, (x, y), pill)
    return tw


def wrap_to_width(text, font, max_w):
    words = text.split()
    if not words:
        return [""]
    lines = []
    cur = words[0]
    for word in words[1:]:
        trial = f"{cur} {word}"
        if font.getlength(trial) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    lines.append(cur)
    return lines


def draw_centered_text(draw, text, font, y, color, max_w=None):
    if max_w is None:
        max_w = W - 160
    lines = wrap_to_width(text, font, max_w)
    line_h = font.getbbox("Ay")[3] - font.getbbox("Ay")[1] + 12
    for i, line in enumerate(lines):
        lw = font.getlength(line)
        draw.text(((W - lw) // 2, y + i * line_h), line, fill=color, font=font)
    return y + len(lines) * line_h


def add_accent_glow(base, accent):
    glow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = W // 2, H // 2 + 100
    for r in range(520, 0, -8):
        alpha = int(40 * (r / 520) ** 2)
        gd.ellipse([cx - r, cy - r, cx + r, cy + r],
                   fill=(accent[0], accent[1], accent[2], alpha))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=60))
    return Image.alpha_composite(base, glow)


def generate(slug: str, title: str, tagline: str, tech_tags: list[str], out_path: Path):
    c1, c2, accent = palette_for(slug)
    bg = gradient(W, H, c1, c2)
    bg = add_accent_glow(bg, accent)

    draw = ImageDraw.Draw(bg)

    f_title = ImageFont.truetype(FONT_BOLD, 140)
    f_tag = ImageFont.truetype(FONT_REG, 48)
    f_pill = ImageFont.truetype(FONT_MONO_B, 30)

    title_y = 320
    y_after_title = draw_centered_text(draw, title, f_title, title_y, WHITE)

    bar_y = y_after_title + 30
    bar_w = 180
    draw.rectangle(
        [(W - bar_w) // 2, bar_y, (W + bar_w) // 2, bar_y + 8],
        fill=accent,
    )

    tagline_y = bar_y + 50
    draw_centered_text(draw, tagline, f_tag, tagline_y, (220, 220, 240), max_w=W - 300)

    tags = tech_tags[:5]
    if tags:
        tag_widths = []
        for tag in tags:
            b = f_pill.getbbox(tag)
            tag_widths.append(b[2] - b[0] + 36)
        total_tag_w = sum(tag_widths) + (len(tags) - 1) * 16
        tag_x = (W - total_tag_w) // 2
        tag_y = H - 140
        for tag in tags:
            tw = draw_pill(bg, tag_x, tag_y, tag, f_pill, (40, 40, 60))
            tag_x += tw + 16

    out_path.parent.mkdir(parents=True, exist_ok=True)
    bg.convert("RGB").save(out_path, "JPEG", quality=92)
    return out_path


def main():
    if len(sys.argv) < 4:
        print(__doc__)
        sys.exit(1)
    slug = sys.argv[1]
    title = sys.argv[2]
    tagline = sys.argv[3]
    tech = sys.argv[4].split(",") if len(sys.argv) > 4 else []

    repo_root = Path(__file__).resolve().parent.parent
    out = repo_root / "public" / "projects" / f"{slug}-banner.jpg"
    path = generate(slug, title, tagline, [t.strip() for t in tech], out)
    print(f"Generated {path}")


if __name__ == "__main__":
    main()
