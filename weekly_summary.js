
const weeklySummary = {
  week: 1,
  commits: 12,
  activeDays: 6,
  goal: 7,
};

function summarize(data) {
  const consistency = (data.activeDays / data.goal) * 100;

  return {
    week: data.week,
    commits: data.commits,
    activeDays: `${data.activeDays}/${data.goal}`,
    consistency: `${consistency.toFixed(1)}%`,
    status: data.activeDays >= data.goal
      ? "Weekly goal completed"
      : "Keep building consistency",
  };
}

console.log("=== WEEKLY SUMMARY ===");
console.table(summarize(weeklySummary));
