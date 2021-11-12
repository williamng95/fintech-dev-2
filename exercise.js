function addition(num1,num2){
    return num1+num2;
}
function subtraction(num1,num2){
    return num1-num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function isLeapYear(year){
    return Boolean((year%4)==0 && (year%100 || year%400==0));
}
function cmLength(inches){
    return inches/2.5;
}
function isNullBlank(inputVal){
    return Boolean((inputVal===null || inputVal==""))
}