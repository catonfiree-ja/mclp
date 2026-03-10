import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def make_transparent(input_p, output_p):
    img = Image.open(input_p).convert("RGBA")
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        lum = 0.299*r + 0.587*g + 0.114*b
        if lum > 220:
            alpha = int(255 * (255 - lum) / 35.0)
            new_data.append((r, g, b, max(0, min(255, alpha))))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(output_p, "PNG")

make_transparent("C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v2.jpeg", "C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v3_transparent.png")
