const activities = [
  { day: 1, task: "Create project repository", completed: true },
  { day: 2, task: "Build activity tracker", completed: true },
  { day: 3, task: "Calculate activity statistics", completed: true },
  { day: 4, task: "Generate activity report", completed: true },
];

function generateReport(list) {
  const total = list.length;
  const completed = list.filter(item => item.completed).length;
  const pending = total - completed;
  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100);

  return {
    totalActivities: total,
    completedActivities: completed,
    pendingActivities: pending,
    completionRate: `${percentage}%`,
  };
}

console.log("=== ACTIVITY REPORT ===");
console.log(generateReport(activities));
