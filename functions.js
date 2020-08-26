const fs = require("fs");

//lev 1_3
function calculate(num1, num2, operator) {
    return eval(`${num1}${operator}${num2}`)
}

////
//lev 3_1

function appendToFile(parameter) {
    if (!fs.existsSync("./ordner")) {
          fs.mkdirSync("ordner");
    }
    fs.appendFile('ordner/file.txt', parameter + "\n", (err) => {
        if (err) throw err; 
        console.log('The file has been saved!'); 
    });
}

// lev 3_2
function checkCreateDelete() {
    if (!fs.existsSync("./MyFunnyFolder")) {
        fs.mkdirSync("MyFunnyFolder")
        console.log("MyFunnyFolder erstellt")
    } 
    else {
        fs.rmdir('./MyFunnyFolder', (err) => {
            if (err) throw err;
            console.log("MyFunnyFolder deleted")
        })  
    }
}

module.exports.calculate = calculate;
module.exports.appendToFile = appendToFile;
module.exports.checkCreateDelete = checkCreateDelete;
