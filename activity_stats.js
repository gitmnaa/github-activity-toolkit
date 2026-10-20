
const activities = [
  { day: 1, task: "Create project repository", completed: true },
  { day: 2, task: "Build activity tracker", completed: true },
  { day: 3, task: "Calculate activity statistics", completed: true },
];

function getTotalActivities(list) {
  return list.length;
}

function getCompletedActivities(list) {
  return list.filter(activity => activity.completed).length;
}

function getCompletionRate(list) {
  if (list.length === 0) return 0;

  return Math.round(
    (getCompletedActivities(list) / getTotalActivities(list)) * 100
  );
}

console.log("=== GitHub Activity Statistics ===");
console.log("Total activities:", getTotalActivities(activities));
console.log("Completed:", getCompletedActivities(activities));
console.log("Completion rate:", getCompletionRate(activities) + "%");
