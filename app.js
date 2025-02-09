const tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Added: ${task}`);
}

function listTasks() {
  console.log("\nTasks:");
  tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

// Test
addTask("Learn Git");
addTask("Build Todo List");
listTasks();
