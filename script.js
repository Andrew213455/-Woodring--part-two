/*
step 1: prompt user for their name. store in var called name.
step 2: prompt user if they would like to play 3 or 6 holes of mini golf.
step 3: prompt user 3 or 6 times depending on what they selected for step 2 asking for number of puts for each specific hole.
step 4: calculate the total number of puts and subtract that from par.
step 5: log to the console one of 3 messages depending on over par on par or below par.
*/

let name = prompt("Welcome to GC mini golf! What is your name?");

let numOfGames = Number(prompt(`Hi, ${name}! Would you like to play 3 holes or 6 holes?`));

let total = 0;

for (let i = 1; i <= numOfGames; i++) {
    let putts = Number(prompt (`How many putts for hole ${i}`));
    total += putts;
}

let par = 0

if (numOfGames === 3) {
    par = 9;
} else if (numOfGames === 6) {
    par = 18
}

let totalPar = total - par;

if (totalPar < 0) {
    console.log(`Great job, ${name}! Your total par was: ${totalPar}.`)
} else if (totalPar === 0) {
    console.log(`Good game, ${name}. Your total par was: 0.`)
} else {
    console.log(`Nice try, ${name}... Your total par was: +${totalPar}.`)
}



