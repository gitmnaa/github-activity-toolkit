const weeklyData = {
  commits: 15,
  pullRequests: 3,
  issues: 4,
  activeDays: 6,
};

function generateInsights(data) {
  const totalActions =
    data.commits + data.pullRequests + data.issues;

  const consistency = Math.min(
    (data.activeDays / 7) * 100,
    100
  );

  let recommendation;

  if (consistency >= 80) {
    recommendation = "Great consistency. Keep it up!";
  } else if (consistency >= 50) {
    recommendation = "Good progress. Stay consistent!";
  } else {
    recommendation = "Set a small daily activity goal.";
  }

  return {
    totalActions,
    consistency: `${consistency.toFixed(1)}%`,
    recommendation,
  };
}

const insights = generateInsights(weeklyData);

console.log("=== WEEKLY ACTIVITY INSIGHTS ===");
console.log("Total actions:", insights.totalActions);
console.log("Consistency:", insights.consistency);
console.log("Recommendation:", insights.recommendation);
