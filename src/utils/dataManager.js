// Data Manager for GEOGRAPHY OF INDIA MASTER (Bharat Atlas Master)
// Handles offline-first LocalStorage persistence, attempts, streaks, bookmarks, error notebook, and backups.

const STORAGE_PREFIX = 'bharat_geo_';

const KEYS = {
  ATTEMPTS: `${STORAGE_PREFIX}attempts`,
  BOOKMARKS: `${STORAGE_PREFIX}bookmarks`,
  NOTES: `${STORAGE_PREFIX}notes`,
  MISTAKES: `${STORAGE_PREFIX}mistakes`,
  FLASHCARDS: `${STORAGE_PREFIX}flashcards`,
  STREAK: `${STORAGE_PREFIX}streak`,
  LAST_ACTIVE: `${STORAGE_PREFIX}last_active`,
  THEME: `${STORAGE_PREFIX}theme`,
  EXAM_HISTORY: `${STORAGE_PREFIX}exam_history`,
  CUSTOM_SETTINGS: `${STORAGE_PREFIX}settings`
};

export const getStored = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn(`Failed to read from localStorage key: ${key}`, e);
    return fallback;
  }
};

export const setStored = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to write to localStorage key: ${key}`, e);
  }
};

// --- Daily Streak Tracking ---
export const updateDailyStreak = () => {
  const today = new Date().toISOString().split('T')[0];
  const lastActive = getStored(KEYS.LAST_ACTIVE, null);
  let streak = getStored(KEYS.STREAK, 0);

  if (!lastActive) {
    streak = 1;
  } else if (lastActive !== today) {
    const lastDate = new Date(lastActive);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1; // reset streak if a day was skipped
    }
  }

  setStored(KEYS.LAST_ACTIVE, today);
  setStored(KEYS.STREAK, streak);
  return streak;
};

export const getDailyStreak = () => {
  return getStored(KEYS.STREAK, 0);
};

// --- Question Attempts & History ---
export const recordAttempt = (questionId, isCorrect, selectedOption, confidence = 'sure', topic = 'General', mistakeType = null) => {
  const attempts = getStored(KEYS.ATTEMPTS, {});
  const now = new Date().toISOString();

  const prev = attempts[questionId] || { count: 0, correctCount: 0, history: [] };
  
  attempts[questionId] = {
    count: prev.count + 1,
    correctCount: prev.correctCount + (isCorrect ? 1 : 0),
    lastAttemptDate: now,
    lastCorrect: isCorrect,
    lastConfidence: confidence,
    topic: topic,
    history: [
      ...prev.history.slice(-9), // keep last 10 attempts
      { date: now, isCorrect, selectedOption, confidence }
    ]
  };

  setStored(KEYS.ATTEMPTS, attempts);
  updateDailyStreak();

  // If wrong, register in mistake book
  if (!isCorrect) {
    recordMistake(questionId, topic, mistakeType || 'Conceptual Misunderstanding');
  } else {
    // If answered correctly with high confidence, auto-resolve mistake if present
    if (confidence === 'very_sure' || confidence === 'sure') {
      resolveMistake(questionId);
    }
  }

  return attempts[questionId];
};

export const getAttempts = () => getStored(KEYS.ATTEMPTS, {});

// --- Mistakes Notebook ---
export const recordMistake = (questionId, topic, mistakeType = 'Factual Lapse') => {
  const mistakes = getStored(KEYS.MISTAKES, {});
  mistakes[questionId] = {
    questionId,
    topic,
    mistakeType,
    dateAdded: new Date().toISOString(),
    resolved: false
  };
  setStored(KEYS.MISTAKES, mistakes);
};

export const getMistakes = () => getStored(KEYS.MISTAKES, {});

export const resolveMistake = (questionId) => {
  const mistakes = getStored(KEYS.MISTAKES, {});
  if (mistakes[questionId]) {
    mistakes[questionId].resolved = true;
    mistakes[questionId].resolvedDate = new Date().toISOString();
    setStored(KEYS.MISTAKES, mistakes);
  }
};

export const updateMistakeType = (questionId, mistakeType) => {
  const mistakes = getStored(KEYS.MISTAKES, {});
  if (mistakes[questionId]) {
    mistakes[questionId].mistakeType = mistakeType;
    setStored(KEYS.MISTAKES, mistakes);
  }
};

// --- Bookmarks ---
export const toggleBookmark = (questionId, metadata = {}) => {
  const bookmarks = getStored(KEYS.BOOKMARKS, {});
  if (bookmarks[questionId]) {
    delete bookmarks[questionId];
  } else {
    bookmarks[questionId] = {
      id: questionId,
      dateAdded: new Date().toISOString(),
      ...metadata
    };
  }
  setStored(KEYS.BOOKMARKS, bookmarks);
  return !!bookmarks[questionId];
};

export const isBookmarked = (questionId) => {
  const bookmarks = getStored(KEYS.BOOKMARKS, {});
  return !!bookmarks[questionId];
};

export const getBookmarks = () => getStored(KEYS.BOOKMARKS, {});

// --- User Notes ---
export const saveUserNote = (itemId, noteText) => {
  const notes = getStored(KEYS.NOTES, {});
  if (!noteText || noteText.trim() === '') {
    delete notes[itemId];
  } else {
    notes[itemId] = {
      text: noteText.trim(),
      updatedAt: new Date().toISOString()
    };
  }
  setStored(KEYS.NOTES, notes);
};

export const getUserNote = (itemId) => {
  const notes = getStored(KEYS.NOTES, {});
  return notes[itemId]?.text || '';
};

export const getAllUserNotes = () => getStored(KEYS.NOTES, {});

// --- Flashcards (Leitner 5-Box System) ---
export const getFlashcardProgress = () => getStored(KEYS.FLASHCARDS, {});

export const updateFlashcardBox = (cardId, isMastered) => {
  const cards = getStored(KEYS.FLASHCARDS, {});
  const currentBox = cards[cardId]?.box || 1;
  let newBox = currentBox;

  if (isMastered) {
    newBox = Math.min(5, currentBox + 1);
  } else {
    newBox = 1; // Back to box 1 on mistake
  }

  cards[cardId] = {
    cardId,
    box: newBox,
    lastReviewed: new Date().toISOString()
  };
  setStored(KEYS.FLASHCARDS, cards);
  return newBox;
};

// --- Mock Exam History ---
export const saveExamResult = (result) => {
  const history = getStored(KEYS.EXAM_HISTORY, []);
  const entry = {
    id: `exam_${Date.now()}`,
    date: new Date().toISOString(),
    ...result
  };
  history.unshift(entry);
  // keep last 50 exams
  setStored(KEYS.EXAM_HISTORY, history.slice(0, 50));
  return entry;
};

export const getExamHistory = () => getStored(KEYS.EXAM_HISTORY, []);

// --- Full Backup, Restore & Reset ---
export const exportAllData = () => {
  const dump = {};
  for (const [keyName, storageKey] of Object.entries(KEYS)) {
    dump[keyName] = getStored(storageKey, null);
  }
  dump.exportedAt = new Date().toISOString();
  dump.app = 'Bharat Atlas Master / Geography of India';
  dump.version = '2.0.0';
  return JSON.stringify(dump, null, 2);
};

export const importAllData = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') {
      throw new Error('Invalid JSON format');
    }
    for (const [keyName, storageKey] of Object.entries(KEYS)) {
      if (parsed[keyName] !== undefined && parsed[keyName] !== null) {
        setStored(storageKey, parsed[keyName]);
      }
    }
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const resetAllData = () => {
  for (const storageKey of Object.values(KEYS)) {
    localStorage.removeItem(storageKey);
  }
};
