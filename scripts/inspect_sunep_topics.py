import json

with open(r'C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\scripts\sunep_zamir_dump.json', encoding='utf-8') as f:
    data = json.load(f)

for fname, slides in data.items():
    print(f"\n==========================================")
    print(f"FILE: {fname}")
    print(f"==========================================")
    for s in slides:
        text = s['text']
        lines = [l.strip() for l in text.split('\n') if len(l.strip()) > 5]
        # find headings or questions
        first_few = " // ".join(lines[:3])
        print(f" Slide {s['slide']}: {first_few[:120]}")
