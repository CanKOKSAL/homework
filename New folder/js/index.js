alert("Welcome to your bank acount")
const name = prompt("Please write your name")
const surName = prompt("Please write your surname")
let money = 154621;

let process;

let atmMenu = Number(
    prompt(
        "Please write your process 1-Extract 2- Pay in 3-Take your all balance 0- For exit"
    ))
do {
    switch (atmMenu) {
        case 1:
            process = trueValue("Please enter the value you want to extract")
            extractMoney();
            break;
        case 2:
            process = trueValue("Please enter the value you want to pay in ")
            payinMoney();
            break;
        case 3:
            process = trueValue("Your operation successful now your balance is 0")
            takeAll();
            break;
        case 0: 
            alert("Thanks for using our bank have a great day");
            break;
        
        default:
            break;
    }

} while (atmMenu === 0);
  


function trueValue(money) {
    let process;
    do {
        process = prompt(money);
    } while (isNaN(process) || process <= 0);
    return Number(process);
}

function extractMoney(money) {
    if (money - process < 0) {
        alert("In your acount you dont have that much money");
        process = trueValue("Please enter value to extract your amount");
        extractMoney();
    } else {
        money = process;
    }
    return money;
}
function payinMoney(money) {
    money = money + process;
    return money;
}
function takeAll(money){
    money==0
    return money;
}