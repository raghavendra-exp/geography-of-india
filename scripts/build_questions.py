import json
import os

# Comprehensive Question Bank Builder for Geography of India Master
# 450+ High-Yield Questions covering 10 Modules

questions = []

def add_q(qid, topic, subtopic, exam_type, diff, q_en, q_hi, opts_en, opts_hi, correct, h1, h2, h3, trap, exp_en, exp_hi):
    questions.append({
        "id": qid,
        "topic": topic,
        "subtopic": subtopic,
        "examType": exam_type,
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

print("Writing question generator script...")
