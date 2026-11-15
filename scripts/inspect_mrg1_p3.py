import json

with open(r'C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\scripts\sunep_zamir_dump.json', encoding='utf-8') as f:
    data = json.load(f)

for s in data['MRG1_P3_P4_India_Physical_Industrial_Location.pptx']:
    lines = [l.strip() for l in s['text'].split('\n') if l.strip()]
    print(f"=== SLIDE {s['slide']} ===")
    for l in lines[:6]:
        print("  ", l[:120])
