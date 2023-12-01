//make animal selection (choice 2) case insensitive
//add an exit in animal selection (choice 2)?

var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/projects/Animal_processor2/animaldata.json'))
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("\nWelcome to the Animal Data Processor!")
function menu() {
    rl.question("\n Menu:\n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n\nPlease select an option from above: ", function (choice) {
        if (choice == 1) {
            listAll()
            return;
        }
        if (choice == 2) {
            searchA()
            return;
        }
        if (choice == 3) {
            calcA()
            return;
        }
        if (choice == 4) {
            exit()
        }
        else {
            console.log("\n The option you have entered does not exist, please enter a single digit corresponding to the desired action from the following menu:")
            return menu();
        }
    })
}
// choice 1
function listAll() {
    console.log("\nAvailable animals:")
    for (let i = 0; i < animals.length; i++) {
        console.log(i + 1 + ". " + animals[i].name);
    }
    menu()
}
// choice 2
function searchA() {
    rl.question("\nPlease enter an animal name, or enter exit to leave question:\n", function (nameA) {
        if (nameA == "exit") {
            return menu();
        }
        for (var i = 0; i < animals.length; i++) {
            if (nameA.toLowerCase() == animals[i].name.toLowerCase()) {
                console.log("\nName: " + animals[i].name)
                console.log("Species: " + animals[i].species) 
                console.log("Habitat: " + animals[i].habitat)
                console.log("Average Lifespan: " + animals[i].average_lifespan)
                console.log("Average Speed: " + animals[i].average_speed)
                return menu();
            }
        }
        console.log("\nPlease choose an animal from the available list: Lion, Elephant, or Penguin")
        searchA()
    })
}
// choice 3
function calcA() {
    var speedSum = 0;
    for (var i = 0; i < animals.length; i++) {
        speedSum += animals[i].average_speed
    }
    var avgSpeed = (speedSum / animals.length).toFixed(2)
    console.log("\nAverage speed of all animals: " + avgSpeed + " km/h")

    var lifeSum = 0;
    for (var i = 0; i < animals.length; i++) {
        lifeSum += animals[i].average_lifespan
    }
    var avgLife = (lifeSum / animals.length).toFixed(1)
    console.log("Average lifespan of all animals: " + avgLife + " years")
    menu()
}
// choice 4
function exit() {
    console.log("\nThank you for using the Animal Data Processor :) \n\nGoodbye!\n");
    process.exit(0);
    ;
}
menu()





