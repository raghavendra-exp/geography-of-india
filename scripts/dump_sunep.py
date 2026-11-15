import zipfile, xml.etree.ElementTree as ET, glob, os, json

def extract_pptx_full(filepath):
    z = zipfile.ZipFile(filepath)
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
        texts = []
        for elem in tree.iter():
            if elem.tag.endswith('}t') and elem.text:
                t = elem.text.strip()
                if t:
                    texts.append(t)
        if texts:
            slides_data.append({
                "slide": s_idx + 1,
                "text": "\n".join(texts)
            })
    return slides_data

folder = r"D:\My notes for exams\Geography\GEO_MAINS_REV_SUNEP_ZAMIR"
out = {}
for p in glob.glob(os.path.join(folder, "*.pptx")):
    name = os.path.basename(p)
    out[name] = extract_pptx_full(p)

with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\scripts\sunep_zamir_dump.json", "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)

print("Dumped Sunep Zamir PPTs. Files:", list(out.keys()))
for k, v in out.items():
    print(f"\n--- {k} ({len(v)} slides) ---")
    for s in v[:4]:
        print(f"Slide {s['slide']}:\n", s['text'][:250], "\n...")
