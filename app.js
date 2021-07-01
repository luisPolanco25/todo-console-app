require('colors');

const { inquirerMenu, pause, readInput, deleteTaskList, confirm, showChecklist } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    
    const tasksDB = readDB();
    
    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);        
    }
    
    do {
        
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Description:');
                tasks.createTask(description);
            break;
            
            case '2':
                tasks.fullList();
            break;

            case '3':
                tasks.viewCompletedOrPendingTaks(true);
            break;

            case '4':
                tasks.viewCompletedOrPendingTaks(false);
            break;

            case '5':
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
            break;

            case '6':
                const id = await deleteTaskList(tasks.listArr);
                
                if (id !== '0') {

                    const ok = await confirm('Are you sure you want to delete this task');
    
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('\nTask deleted'.green);
                    }

                }
            break;
        }

        saveDB(tasks.listArr);
        
        
        await pause();

    } while (opt !== '0');

}

main();