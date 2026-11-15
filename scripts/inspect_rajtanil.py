import zipfile, xml.etree.ElementTree as ET, glob, os, json

def get_pptx_title_and_slides(filepath):
    z = zipfile.ZipFile(filepath)
    slide_names = [n for n in z.namelist() if n.startswith('ppt/slides/slide') and n.endswith('.xml')]
    def get_num(s):
        num_str = ''.join([c for c in s if c.isdigit()])
        return int(num_str) if num_str else 0
    slide_names.sort(key=get_num)
    
    summary = []
    for s_idx, s_name in enumerate(slide_names[:15]):
        tree = ET.fromstring(z.read(s_name))
        texts = [elem.text.strip() for elem in tree.iter() if elem.tag.endswith('}t') and elem.text and elem.text.strip()]
        if texts:
            summary.append(f"S{s_idx+1}: " + " // ".join(texts[:2])[:100])
    return summary

base = r"D:\My notes for exams\Geography\Geography_Rajtanil"
print("=== ECONOMIC GEO INDIA ===")
for p in glob.glob(os.path.join(base, "Economic_Geo_India", "*.pptx")):
    print(os.path.basename(p))
    for s in get_pptx_title_and_slides(p)[:5]:
        print(" ", s)

print("\n=== WORLD GEOGRAPHY ===")
for p in glob.glob(os.path.join(base, "World_Geography", "*.pptx")):
    print(os.path.basename(p))
    for s in get_pptx_title_and_slides(p)[:3]:
        print(" ", s)
