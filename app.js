
const foods = [
{
   
    Name:"Breakfast",
    Menu:["eggs", "bacon", "pancakes", "waffles"],
    yummy : false,
},
{  
    Name:"Lunch",
    Menu: ["pizza", "sushi", "pasta", "sandwiches"],
    yummy : true,
}
]
function printNames (){
    foods.forEach((food)=> console.log(food.Name));}

printNames()

function printMenu (){
    foods.forEach((food) => {
        console.log(food.Name)
        food.Menu.forEach((thing) => console.log (thing));
    });
    
}

printMenu()

function printYummyMeals (){
    const YummyMeals = foods.filter ((food) => {
        return food.yummy === true
    
    })
    console.log(YummyMeals)
}


