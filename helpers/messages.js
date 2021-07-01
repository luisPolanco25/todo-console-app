require('colors');

const showMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log('=========================='.green);
        console.log('    Select an option    '.yellow);
        console.log('==========================\n'.green);
    
        console.log(`${'1.'.green} Create a task`);
        console.log(`${'2.'.green} See your tasks`);
        console.log(`${'4.'.green} Completed tasks`);
        console.log(`${'3.'.green} Pending tasks`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Exit \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Select an option: ', (option) => {
            readline.close();
            resolve(option);
        });

    });

}



const pause = () => {
    
    return new Promise((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nTo continue press ${'ENTER'.green}\n`, () => {
            readline.close();
            resolve();
        })

    });
    
    
}


module.exports = {
    showMenu,
    pause
}