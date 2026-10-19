const activities = [
  {
    day: 1,
    task: "Create project repository",
    status: "completed"
  },
  {
    day: 2,
    task: "Build activity tracker",
    status: "completed"
  }
];

function showActivities() {
  console.log("GITHUB ACTIVITY TRACKER");
  console.log("=======================");

  activities.forEach((activity) => {
    console.log(
      `Day ${activity.day}: ${activity.task} - ${activity.status}`
    );
  });
}

function getCompletedCount() {
  return activities.filter(
    (activity) => activity.status === "completed"
  ).length;
}

showActivities();

console.log(
  `Completed activities: ${getCompletedCount()}`
);
