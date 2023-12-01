
var newName
var newCol 
var newId 

var newCat = {
    "id": newId,
    "name": newName,
    "colour": newCol
}

function kitty() {
    rl.question("Please enter cat name: ", function (newName) {
        for (var i = 0; i < obj.cats.length; i++){
        if (newName == obj.cats[i].name){
            console.log("This name is already taken, please choose a new one")
            return kitty()
        }
    }
        rl.question("Please enter cat colour: ", function (newCol) {
            newCat.id  = obj.cats.length + 1
            newCat.name = newName;
            newCat.colour = newCol;
            obj.cats.push(newCat)
            console.log(obj.cats)
            rl.close();
        })
})     
}
// change id to be automatically incrimented 
kitty()
