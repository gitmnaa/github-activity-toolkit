const activities = [
  { day: 1, task: "Create project repository", completed: true },
  { day: 2, task: "Build activity tracker", completed: true },
  { day: 3, task: "Calculate activity statistics", completed: true },
  { day: 4, task: "Generate activity report", completed: true },
  { day: 5, task: "Track project progress", completed: true },
];

function getProgress(list) {
  const total = list.length;
  const completed = list.filter(item => item.completed).length;
  const pending = total - completed;
  const percentage = total === 0
    ? 0
    : Math.round((completed / total) * 100);

  return {
    total,
    completed,
    pending,
    percentage: `${percentage}%`,
  };
}

function displayProgress(list) {
  const progress = getProgress(list);

  console.log("=== PROJECT PROGRESS ===");
  console.log(`Total tasks: ${progress.total}`);
  console.log(`Completed: ${progress.completed}`);
  console.log(`Pending: ${progress.pending}`);
  console.log(`Progress: ${progress.percentage}`);
}

displayProgress(activities);
