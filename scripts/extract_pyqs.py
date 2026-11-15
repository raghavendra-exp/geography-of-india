import zlib, re, os

def extract_pdf_text_fast(pdf_path):
    print("Reading:", pdf_path)
    with open(pdf_path, 'rb') as f:
        data = f.read()
    
    pos = 0
    chunks = []
    while True:
        s_idx = data.find(b'stream', pos)
        if s_idx == -1:
            break
        # skip stream\r\n or stream\n
        start = s_idx + 6
        if data[start:start+2] == b'\r\n':
            start += 2
        elif data[start:start+1] in (b'\r', b'\n'):
            start += 1
        
        e_idx = data.find(b'endstream', start)
        if e_idx == -1:
            break
        
        stream_bytes = data[start:e_idx]
        pos = e_idx + 9
        
        try:
            decompressed = zlib.decompress(stream_bytes)
        except Exception:
            decompressed = stream_bytes
        
        # extract text in parentheses before Tj or TJ
        # or inside ET / BT blocks
        matches = re.findall(rb'\((.*?)\)\s*T[jJ]', decompressed)
        for m in matches:
            try:
                t = m.decode('latin1', errors='ignore')
                if len(t) > 1:
                    chunks.append(t)
            except:
                pass
        
        # Also check array form: [(...) 10 (...)] TJ
        array_matches = re.findall(rb'\[(.*?)\]\s*TJ', decompressed)
        for arr in array_matches:
            inner_matches = re.findall(rb'\((.*?)\)', arr)
            arr_text = "".join([im.decode('latin1', errors='ignore') for im in inner_matches])
            if len(arr_text) > 1:
                chunks.append(arr_text)

    print(f"Total chunks extracted: {len(chunks)}")
    return " ".join(chunks)

txt = extract_pdf_text_fast(r"D:\My notes for exams\test\PYQ_GSM\PYQ_GSM1_History_Geo_Society_2013_23_Mrunal.pdf")
print("Length of extracted text:", len(txt))
# find questions with 'Q' or 'Question' or years
lines = [l.strip() for l in txt.split('.') if len(l.strip()) > 20]
geo_lines = [l for l in lines if any(w in l.lower() for w in ['cyclone', 'earthquake', 'monsoon', 'river', 'himalaya', 'continental', 'ocean', 'tropic', 'soil', 'resource', 'industry', 'iron'])]
print(f"Sample matching geography questions ({len(geo_lines)}):")
for g in geo_lines[:25]:
    print(" ->", g[:120])
