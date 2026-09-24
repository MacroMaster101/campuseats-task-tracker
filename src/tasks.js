// CampusEats task list

const tasks = [
  {
    title: "Design the menu screen",
    status: "open",
  },
  {
    title: "Build the orders API",
    status: "open",
  },
  {
    title: "Add user login",
    status: "open",
  },
];

function addTask(title) {
  if (!title || title.trim() === "") {
    throw new Error("Task title cannot be empty");
  }

  tasks.push({
    title,
    status: "open",
  });
}

function showTaskCount() {
  console.log(`CampusEats has ${tasks.length} open tasks`);
}

showTaskCount();