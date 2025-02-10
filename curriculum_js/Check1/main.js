//問1//

let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    if (num % 2 === 0){
    console.log(num + 'は偶数です');
    }
}

numbers.forEach(isEven);

//問2//

class Car{
    constructor(Gas,Num){
        this.Gas = Gas;
        this.Num = Num;
    }

    showCar(){
        console.log(`ガソリンは${this.Gas}です。ナンバーは${this.Num}です。`)
    }
}

let getNumGas = new Car ('レギュラー','11-11');
getNumGas.showCar();
