import zlib, re, os

def get_pdf_text(filepath):
    with open(filepath, 'rb') as f:
        data = f.read()
    
    out_lines = []
    # Find all obj ... endobj or stream ... endstream
    # A safe pattern: stream\r?\n(.*?)\r?\nendstream
    # Use re with byte-limit or split
    streams = data.split(b'stream')
    print(f"File {os.path.basename(filepath)} has {len(streams)} stream markers")
    
    for s in streams[1:]:
        end_idx = s.find(b'endstream')
        if end_idx == -1:
            continue
        raw_stream = s[:end_idx].strip()
        try:
            decompressed = zlib.decompress(raw_stream)
        except Exception:
            decompressed = raw_stream
        
        # Look for literal strings in parens (..)
        # in PDF text operators Tj or TJ
        text_matches = re.findall(rb'\(([^\(\)\\]{3,200})\)', decompressed)
        for tm in text_matches:
            try:
                line = tm.decode('utf-8', errors='ignore').strip()
                if len(line) > 3:
                    out_lines.append(line)
            except:
                pass
                
    return out_lines

lines = get_pdf_text(r"D:\My notes for exams\test\PYQ_GSM\PYQ_GSM1_History_Geo_Society_2013_23_Mrunal.pdf")
print(f"Total lines: {len(lines)}")
with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\scripts\pyq_mrunal_gsm1_lines.txt", "w", encoding="utf-8") as f:
    for l in lines:
        f.write(l + "\n")

print("Saved to scripts/pyq_mrunal_gsm1_lines.txt")
# print lines mentioning year or question
q_lines = [l for l in lines if any(w in l.lower() for w in ['gs1/', 'gs1-', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']) and any(w in l.lower() for w in ['q', 'discuss', 'explain', 'examine', 'what', 'why', 'how', 'bring out'])]
print(f"Found {len(q_lines)} candidate question lines:")
for ql in q_lines[:30]:
    print(" *", ql)
