import zipfile, xml.etree.ElementTree as ET, re, os, json

# 1. Inspect chapter_Chart.xlsm
xlsm_path = r"D:\My notes for exams\chapter_Chart.xlsm"
if os.path.exists(xlsm_path):
    print("=== CHAPTER CHART XLSM ===")
    z = zipfile.ZipFile(xlsm_path)
    # read shared strings
    shared_strings = []
    if "xl/sharedStrings.xml" in z.namelist():
        tree = ET.fromstring(z.read("xl/sharedStrings.xml"))
        for t in tree.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t'):
            if t.text:
                shared_strings.append(t.text)
    print(f"Total shared strings: {len(shared_strings)}")
    print("Sample shared strings:", [s for s in shared_strings if any(w in s.lower() for w in ['geo', 'river', 'climate', 'soil', 'mains', 'prelims'])][:20])

# 2. Inspect mind-map
mm_path = r"D:\My notes for exams\mind-map_mains_no_optional.html"
if os.path.exists(mm_path):
    print("\n=== MIND MAP MAINS ===")
    with open(mm_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    # Find all "content" or "v" or text in markmap
    lines = [line.strip() for line in html.split('\n') if 'markmap' in line.lower() or 'svg' in line.lower()]
    # extract strings in quotes
    strings = re.findall(r'"([A-Za-z0-9\s,\-\–\(\)\.\/]{4,80})"', html)
    geo_strings = [s for s in set(strings) if any(w in s.lower() for w in ['geograph', 'earth', 'climate', 'monsoon', 'cyclone', 'volcan', 'soil', 'river', 'drainage', 'mineral', 'industry', 'disaster'])]
    print(f"Found {len(geo_strings)} geography syllabus nodes:")
    for s in sorted(geo_strings)[:30]:
        print("  -", s)
