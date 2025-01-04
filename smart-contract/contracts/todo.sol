// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.27;

contract TodoApp {
    // structure to define a Task
    // this holds a single task object
    struct Task {
        uint256 id;
        string taskDescription;
        bool isCompleted;
    }

    // Mapping of task id to the Task structure
    // This is used to create a 'list' of tasks that can be indexed 
    // e.g `tasks[taskId]` // where each taskId represents a Task
    mapping(uint256 => Task) public tasks;

    // Counter to auto generate task ids
    // this is like a sql database primary key that is used to hold a single row of record
    uint256 public taskCount;

    // EVENTS 
    // event to emit when a task is created
    event TaskCreated(uint256 id, string taskDescription, bool isCompleted);
    // event to emit when a task is marked as completed
    event TaskCompleted(uint256 id, bool isCompleted);
    // event to emit when a task is deleted
    event TaskDeleted(uint256 id);

    // Contructor to initialize the first task id
    constructor() {
        taskCount = 0;
    }

    // function to create a net task
    function createTask(string memory _taskDescription) public {
        // on every new task increase the task count
        taskCount++;
        // add the new task to the list of tasks
        tasks[taskCount] = Task(taskCount, _taskDescription, false);
        // emit the event for new task creation
        emit TaskCreated(taskCount, _taskDescription, false);
    }

    // function to mark a task as completed
    function completeTask(uint256 _taskId) public {
        require(_taskId > 0 && _taskId <= taskCount, "Invalid task Id"); // check if the task is available or has been created

        // create an instance of the task by selecting the task from the tasks list/array
        Task memory _task = tasks[_taskId];

        // change the task's isCompleted state to true
        _task.isCompleted = true;

        // replace the task in the task list with the updated task
        tasks[_taskId] = _task;

        // emit the task completed event
        emit TaskCompleted(_taskId, true);
    }

    // function to delete a task
    function deleteTask(uint256 _taskId) public {
        require(_taskId > 0 && _taskId <= taskCount, "Invalid task ID"); // check that the given taskId is within the number of tasks available

        delete tasks[_taskId]; // call the delete method (built-in) on the tasks list/array

        // emit event to broadcast that a task was deleted
        emit TaskDeleted(_taskId);
    }

    // function to get individual task details
    function getTask(uint256 _taskId) public view returns (uint256, string memory, bool) {
        require(_taskId > 0 && _taskId <= taskCount, "Invalid task ID"); // check to configm if the _taskId exists

        Task memory _task = tasks[_taskId]; // create a new instance of the task

        return (_task.id, _task.taskDescription, _task.isCompleted);
    }

    // function to get all tasks available
    function getAllTasks() public view returns (Task[] memory) {
        require(taskCount > 0, "No tasks yet"); // make sure we have tasks created already

        // create a new list/array of tasks called `allTasks` from the Task structure we created in the beginning
        // the length of the Tasks array/list is set to the total count in the contract: `Task[](taskCount)`
        Task[] memory allTasks = new Task[](taskCount); 

        for (uint256 i = 1; i <= taskCount; i++) {
            allTasks[i - 1] = tasks[i]; // reasigning the all tasks index so it begin at 0
        }

        return allTasks;
    }

}


