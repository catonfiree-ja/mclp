from rembg import remove
from PIL import Image
img = Image.open("C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v2.jpeg")
out = remove(img)
out.save("C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\logo_v4_perfect.png")
