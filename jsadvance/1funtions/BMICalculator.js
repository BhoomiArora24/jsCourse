//create a BMI CALCULATOR
//FORMULA (WIGHT KG/HEIGHT *HEIGHT CM)

function BmiCalculator(weight,  height){
    return weight / (height*height);
}
console.log(BmiCalculator(45, 1.6).toFixed(2));
