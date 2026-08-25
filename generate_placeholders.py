from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(filename, text, color1, color2):
    width, height = 1200, 800
    image = Image.new("RGB", (width, height), color1)
    draw = ImageDraw.Draw(image)
    
    # Draw a simple gradient-like background
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    # Add text
    try:
        font = ImageFont.truetype("DejaVuSans-Bold.ttf", 60)
    except:
        font = ImageFont.load_default()
        
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) / 2
    y = (height - text_height) / 2
    draw.text((x, y), text, fill=(255, 255, 255), font=font)
    
    # Save
    path = f"/home/jefferson/Projetos/ativos/Portifolio-Jefferson/public/{filename}"
    image.save(path)
    print(f"Created {path}")

create_placeholder("screenshot-maestria.png", "MAESTRIA DOCENTE", (20, 20, 25), (40, 45, 60))
create_placeholder("screenshot-casamento.png", "SITE DE CASAMENTO", (60, 40, 45), (25, 20, 20))
create_placeholder("screenshot-x11.png", "LINUX MOUSE GUI", (20, 45, 40), (20, 25, 30))
