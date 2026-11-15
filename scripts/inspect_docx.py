import zipfile, xml.etree.ElementTree as ET, glob, os

def read_docx(path):
    z = zipfile.ZipFile(path)
    tree = ET.fromstring(z.read('word/document.xml'))
    texts = [elem.text.strip() for elem in tree.iter() if elem.text and elem.text.strip()]
    return " ".join(texts)

folder = r"D:\My notes for exams\notes ppt\General Studies-Paper 2 & 3"
for f in glob.glob(os.path.join(folder, "*.docx")):
    fname = os.path.basename(f)
    if any(k in fname.lower() for k in ['climate', 'biodiversity', 'animal', 'fisheries', 'food', 'water', 'wind']):
        text = read_docx(f)
        print(f"\n=== {fname} ({len(text)} chars) ===")
        print(text[:350], "...\n")
