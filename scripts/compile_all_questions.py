# compile_all_questions.py
import json

raw_questions = []

def q(id_num, topic, subtopic, exam, diff, q_en, q_hi, opts_en, opts_hi, correct, h1, h2, h3, trap, exp_en, exp_hi):
    raw_questions.append({
        "id": f"geo_q_{str(id_num).zfill(3)}",
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

# We will populate structured questions across modules
print("Defining compilation script...")
