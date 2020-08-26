//lev 1_3
function calculate(num1, num2, operator) {
    return eval(`${num1}${operator}${num2}`)
}

module.exports.calculate = calculate;
