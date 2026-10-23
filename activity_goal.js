const activityGoal = {
  current: 8,
  target: 30,
  daysLeft: 22,
};

function analyzeGoal({ current, target, daysLeft }) {
  const remaining = Math.max(target - current, 0);
  const progress = target > 0
    ? Math.min((current / target) * 100, 100)
    : 0;

  const dailyRequired = daysLeft > 0
    ? Math.ceil(remaining / daysLeft)
    : remaining;

  return {
    current,
    target,
    remaining,
    progress: progress.toFixed(2) + "%",
    dailyRequired,
    completed: current >= target,
  };
}

const result = analyzeGoal(activityGoal);

console.log("=== ACTIVITY GOAL ANALYZER ===");
console.log(`Current activity: ${result.current}`);
console.log(`Target activity: ${result.target}`);
console.log(`Remaining: ${result.remaining}`);
console.log(`Progress: ${result.progress}`);
console.log(`Daily target: ${result.dailyRequired}`);
console.log(`Goal completed: ${result.completed}`);
