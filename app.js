const tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Added: ${task}`);
}

function listTasks() {
  console.log("\nTasks:");
  tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    console.log(`Deleted: ${removed}`);
  }
}

// Test
addTask("Learn Git");
addTask("Build Todo List");
listTasks();
