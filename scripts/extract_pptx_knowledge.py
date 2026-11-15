import zipfile, xml.etree.ElementTree as ET, glob, os, json, sys

def extract_pptx_text(filepath):
    try:
        z = zipfile.ZipFile(filepath)
    except Exception as e:
        return []
    
    # slide names in order
    slide_names = [n for n in z.namelist() if n.startswith('ppt/slides/slide') and n.endswith('.xml')]
    def get_num(s):
        num_str = ''.join([c for c in s if c.isdigit()])
        return int(num_str) if num_str else 0
    slide_names.sort(key=get_num)
    
    slides_data = []
    for s_idx, s_name in enumerate(slide_names):
        try:
            tree = ET.fromstring(z.read(s_name))
        except Exception:
            continue
        # collect all text elements <a:t>
        texts = []
        for elem in tree.iter():
            if elem.tag.endswith('}t') and elem.text:
                t = elem.text.strip()
                if t:
                    texts.append(t)
        if texts:
            slides_data.append({
                "slide_num": s_idx + 1,
                "text": " ".join(texts),
                "lines": texts
            })
    return slides_data

# Test on Sunep Zamir
folder1 = r"D:\My notes for exams\Geography\GEO_MAINS_REV_SUNEP_ZAMIR"
print("=== EXTRACTING SUNEP ZAMIR ===", flush=True)
all_sunep = {}
for p in glob.glob(os.path.join(folder1, "*.pptx")):
    name = os.path.basename(p)
    slides = extract_pptx_text(p)
    all_sunep[name] = slides
    print(f"{name}: {len(slides)} slides extracted", flush=True)

# Test on Rajtanil
folder2 = r"D:\My notes for exams\Geography\Geography_Rajtanil"
print("\n=== EXTRACTING RAJTANIL SAMPLE ===", flush=True)
for p in sorted(glob.glob(os.path.join(folder2, "*.pptx")))[:5]:
    name = os.path.basename(p)
    slides = extract_pptx_text(p)
    print(f"{name}: {len(slides)} slides extracted", flush=True)
