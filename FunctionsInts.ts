function multiply(a: number, b: number, c?: number): number{
    if(typeof c !== 'undefined'){
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(5,6,5));

function calculateCost(price: number, discount = 0.05): number{

    return price *(1-discount);
}

console.log(calculateCost(56));

let sum = (value : number,value1:number):number => {
    return value + value1;
}

console.log(sum(56,78));

let div = function(value : number,value1:number):number{
    return value/value1;
}
console.log(div(156,78));

//rest parameters

function getTotalMarks(value : number,value1:number,...marks:number[]):number{

    let totalMarks = 0;
    marks.forEach((mark) => totalMarks += mark );
    return totalMarks;
}
//const marks:number[] = [55,66,78,55,88];
console.log(getTotalMarks(5,6,50,60,70,50,80));