// Geography Readiness Calculator
// Computes multi-factor examination readiness score (0-100), topic breakdowns, and study priorities.

export const TOPIC_WEIGHTS = {
  'Physiography & Relief': 0.15,
  'Drainage & River Systems': 0.15,
  'Climate & Monsoon': 0.15,
  'Soils & Natural Vegetation': 0.10,
  'Mineral & Energy Resources': 0.10,
  'Agriculture & Cropping Patterns': 0.10,
  'Natural Hazards & Disasters': 0.08,
  'Biodiversity & Conservation': 0.07,
  'Transport & Infrastructure': 0.05,
  'Human & Economic Geography': 0.05
};

export const calculateReadiness = (attempts = {}, allQuestions = []) => {
  const totalQuestions = allQuestions.length || 500;
  const attemptKeys = Object.keys(attempts);
  const attemptedCount = attemptKeys.length;

  if (attemptedCount === 0) {
    return {
      overallScore: 0,
      coveragePercent: 0,
      accuracyPercent: 0,
      level: 'Novice Cartographer',
      levelHindi: 'आरंभिक मानचित्रकार',
      color: 'text-amber-600 dark:text-amber-400',
      topicBreakdown: {},
      weakestTopics: [],
      strongestTopics: [],
      recommendation: 'Begin by exploring the Master Causal Flow and solving 10 questions in Physiography & Relief.'
    };
  }

  // Aggregate stats per topic
  const topicStats = {};
  for (const topic of Object.keys(TOPIC_WEIGHTS)) {
    topicStats[topic] = { total: 0, attempted: 0, correct: 0, accuracy: 0 };
  }

  allQuestions.forEach(q => {
    const t = q.topic || 'Physiography & Relief';
    if (!topicStats[t]) {
      topicStats[t] = { total: 0, attempted: 0, correct: 0, accuracy: 0 };
    }
    topicStats[t].total += 1;

    const att = attempts[q.id];
    if (att) {
      topicStats[t].attempted += 1;
      if (att.lastCorrect) {
        topicStats[t].correct += 1;
      }
    }
  });

  let weightedAccuracySum = 0;
  let totalWeightCounted = 0;
  let totalCorrect = 0;

  for (const [topic, stats] of Object.entries(topicStats)) {
    if (stats.attempted > 0) {
      stats.accuracy = Math.round((stats.correct / stats.attempted) * 100);
      totalCorrect += stats.correct;
    } else {
      stats.accuracy = 0;
    }

    const weight = TOPIC_WEIGHTS[topic] || 0.05;
    // Readiness factor for topic balances accuracy (70%) and coverage (30%)
    const coverage = stats.total > 0 ? (stats.attempted / stats.total) : 0;
    const topicReadiness = (stats.accuracy * 0.7) + (coverage * 100 * 0.3);
    weightedAccuracySum += topicReadiness * weight;
    totalWeightCounted += weight;
  }

  const overallAccuracy = attemptedCount > 0 ? Math.round((totalCorrect / attemptedCount) * 100) : 0;
  const coveragePercent = Math.min(100, Math.round((attemptedCount / totalQuestions) * 100));

  // Multi-factor readiness score
  const rawScore = totalWeightCounted > 0 ? (weightedAccuracySum / totalWeightCounted) : 0;
  // Blend with overall coverage penalty if attempted is very low
  const coverageMultiplier = Math.min(1, 0.4 + (coveragePercent / 100) * 0.6);
  const overallScore = Math.min(100, Math.round(rawScore * coverageMultiplier));

  let level = 'Novice Explorer';
  let levelHindi = 'आरंभिक अन्वेषक';
  let color = 'text-amber-500';

  if (overallScore >= 80) {
    level = 'Bharat Atlas Master';
    levelHindi = 'भारत एटलस मास्टर (शीर्ष प्रवीणता)';
    color = 'text-emerald-600 dark:text-emerald-400';
  } else if (overallScore >= 65) {
    level = 'Prelims Qualified';
    levelHindi = 'प्रारंभिक परीक्षा योग्य';
    color = 'text-sky-600 dark:text-sky-400';
  } else if (overallScore >= 45) {
    level = 'Intermediate Aspirant';
    levelHindi = 'मध्यवर्ती अभ्यर्थी';
    color = 'text-amber-600 dark:text-amber-400';
  } else {
    level = 'Scout / Novice';
    levelHindi = 'आरंभिक अध्येता';
    color = 'text-rose-500 dark:text-rose-400';
  }

  // Identify weak & strong topics
  const sortedTopics = Object.entries(topicStats)
    .filter(([_, s]) => s.attempted >= 2)
    .sort((a, b) => a[1].accuracy - b[1].accuracy);

  const weakestTopics = sortedTopics.slice(0, 3).map(([topic, s]) => ({ topic, ...s }));
  const strongestTopics = [...sortedTopics].reverse().slice(0, 3).map(([topic, s]) => ({ topic, ...s }));

  let recommendation = 'Solve a balanced 30-question sectional drill to strengthen your baseline.';
  if (weakestTopics.length > 0 && weakestTopics[0].accuracy < 50) {
    recommendation = `Focus on ${weakestTopics[0].topic} (Current Accuracy: ${weakestTopics[0].accuracy}%). Review conceptual causal chains in the Master Flow.`;
  } else if (coveragePercent < 30) {
    recommendation = `Increase question coverage! You have attempted ${coveragePercent}% of the 500-question question bank.`;
  } else if (overallScore >= 75) {
    recommendation = `High readiness! Take the full 100-Question UPSC Prelims Simulator with strict 2-hour negative marking.`;
  }

  return {
    overallScore,
    coveragePercent,
    accuracyPercent: overallAccuracy,
    totalAttempted: attemptedCount,
    totalCorrect,
    level,
    levelHindi,
    color,
    topicBreakdown: topicStats,
    weakestTopics,
    strongestTopics,
    recommendation
  };
};
