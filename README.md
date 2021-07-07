# Todo console app

My second app with Node.js. It's a todo list that works in your command prompt and generates a .json file in the db folder that works as a database. This app uses <a href="https://www.npmjs.com/package/colors">Colors.js</a>, <a href="https://www.npmjs.com/package/inquirer">Inquirer</a> and <a href="https://www.npmjs.com/package/uuid">uuid</a>.

## Usage

After downloading or cloning this repository, make sure to run `npm install` to reconstruct the <strong>node_modules folder</strong>. Then, to start using the app run the next command in your terminal:

```
npm start
```

It will appear the following menu:

![Preview for the first menu that appears in the app](./usage-images/first-menu.png)

Use arrow keys or the options's number to move though then, then select what you'd like to do by pressing ENTER.

## Options

1. Create task: After you select this option, make sure to type the description of the task you want to create.

![Preview for the creation of a task](./usage-images/creating-task.png)

2. View tasks list: Here you'll able to see all the tasks you've created and their status (if they're completed or not)

![Preview for the tasks's list view](./usage-images/tasks-list.png)

3. View completed tasks: Here you'll be able to see a list of just completed tasks plus the dat they were marked as completed.

![Preview for the completed tasks's list view](./usage-images/completed-tasks.png)

4. View pending tasks: Here you'll be able to see a list of the pending tasks

![Preview for the pending tasks's list view](./usage-images/pending-tasks.png)

5. Complete task(s): Here is where you can select the task or tasks you want to complete. In the following image you have the instructions on how to select those tasks

![Preview for the completing tasks option](./usage-images/completing-tasks.png)

![Preview for the completing tasks option after you select a task](./usage-images/completing-tasks-selected.png)

6. Delete task: As its name states, with this option you can delete any task you want and it'll also be deleted in the database.

![Preview for the deleting tasks option](./usage-images/deleting-task.png)

![Preview for the confirm menu at the deleting tasks option](./usage-images/confirm-deleting-task.png)

Press `Y` if you want to delete your taks or `n` if not.

![Preview for the deleting tasks option after confirming](./usage-images/task-deleted.png)


Now if you go to the main menu and select the second option (View tasks's list), it won't appear the task you deleted.

![Preview for the tasks's list view after deleting a task](./usage-images/tasks-list-after-deleting.png)


0. Exit: Closes the app.