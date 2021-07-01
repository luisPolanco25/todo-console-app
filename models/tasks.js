const Task = require('./task');


class Tasks {

    _list = {};

    get listArr() {
        const list = [];
        
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }
    
    loadTasksFromArray(tasks = []) {

        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    fullList() {

        this.listArr.forEach((task, id) => {

            let desc = task.desc;
            let completed = task.completedIn;
            let position = `${id + 1}`.green;

            console.log(`\n${position}. ${desc} :: ${(!completed) ? 'Pending'.red : 'Completed'.green}`);

        });

    }

    viewCompletedOrPendingTaks(completed = true) {

        let counter = 0;
        
        this.listArr.forEach((task) => {

            let desc = task.desc;

            if (completed && task.completedIn) {
                counter += 1
                console.log(`\n${(counter + '.').green} ${desc} :: ${task.completedIn.toString().green}`);
                
            } else if (!completed && !task.completedIn) {
                counter += 1;
                console.log(`\n${(counter + '.').green} ${desc} :: ${'Pending'.red}`);
            }

        });

    }
    
    toggleCompleted(ids = []) {

        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {

            if (!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            }

        });

    }

}


module.exports = Tasks;