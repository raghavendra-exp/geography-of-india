import json

output_file = "public/data/questions.json"
all_q = []

def make_q(qid, topic, subtopic, exam, diff, q_en, q_hi, opts_en, opts_hi, correct, h1, h2, h3, trap, exp_en, exp_hi):
    all_q.append({
        "id": qid,
        "topic": topic,
        "subtopic": subtopic,
        "examType": exam,
        "difficulty": diff,
        "question": q_en,
        "questionHindi": q_hi,
        "options": opts_en,
        "optionsHindi": opts_hi,
        "correct": correct,
        "hints": [h1, h2, h3],
        "trapAlert": trap,
        "explanation": exp_en,
        "explanationHindi": exp_hi
    })

print("Initialized question bank builder")
