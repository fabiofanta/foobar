let numbersToPrint = [];
let startNumber = 1;
let maxNumber = 100;

const isDivisibleBy = (dividend,divisor) => {
    return ((dividend % divisor) === 0) ? 1 : 0;
}

const checkFooBar = (number) => {
    let threeRatio = isDivisibleBy(number,3);
    let fiveRatio = isDivisibleBy(number,5);

    if (threeRatio && fiveRatio) return "FooBar"
    if (fiveRatio) return "Bar";
    if (threeRatio) return "Foo";
    return number;
}


for (let i = startNumber; i <= maxNumber; i++) {

    let valueToPrint = checkFooBar(i);

    document.getElementById("text").innerHTML += ` ${valueToPrint}`;
}