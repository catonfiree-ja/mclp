from PIL import Image
img = Image.open("C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v2.jpeg").convert("RGBA")
datas = img.getdata()
new_data = []
for r, g, b, a in datas:
    r_f, g_f, b_f = r/255.0, g/255.0, b/255.0
    alpha_f = 1.0 - min(r_f, g_f, b_f)
    if alpha_f < 0.01:
        new_data.append((255, 255, 255, 0))
    else:
        new_r = int(((r_f - (1.0 - alpha_f)) / alpha_f) * 255)
        new_g = int(((g_f - (1.0 - alpha_f)) / alpha_f) * 255)
        new_b = int(((b_f - (1.0 - alpha_f)) / alpha_f) * 255)
        new_data.append((max(0, min(255, new_r)), max(0, min(255, new_g)), max(0, min(255, new_b)), int(alpha_f * 255)))
img.putdata(new_data)
img.save("C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v5_colortoalpha.png", "PNG")
