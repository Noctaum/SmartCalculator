class SmartCalculator {
  constructor(initialValue) {
    this.res = initialValue;
    this.mass = [];
    this.mass.push(initialValue);
  }

  add(number) {
    this.mass.push("+");
    this.mass.push(number);
    return this;
  }

  subtract(number) {
    this.mass.push("-");
    this.mass.push(number);
    return this;
  }

  multiply(number) {
    this.mass.push("*");
    this.mass.push(number);
    return this;
  }

  devide(number) {
    this.mass.push("/");
    this.mass.push(number);
    return this;
  }

  pow(number) {
    this.mass.push("^");
    this.mass.push(number);
    return this;
  }

  valueOf() {
    let massFin = this.mass;
    let length = this.mass.length;
    for(let i = length; i>0; i--){
      if(massFin[i] === "^"){
        let val = Math.pow(massFin[i-1],massFin[i+1])
        massFin.splice(i-1, 3, val);
        length = massFin.length;
        i = length;
     }
    }
    for(let i = 0; i<length; i++){
      if(massFin[i] === "*"){
        let val = massFin[i-1]*massFin[i+1];
        massFin.splice(i-1, 3, val);
         i = 0;
        length = massFin.length;
      } else if (massFin[i] === "/"){
        let val = massFin[i-1]/massFin[i+1];
        massFin.splice(i-1, 3, val);
         i = 0;
        length = massFin.length;
      }
    }
    for(let i = 0; i<length; i++){
      if(massFin[i] === "+"){
        let val = (+massFin[i-1])+(+massFin[i+1]);
        massFin.splice(i-1, 3, val);
         i = 0;
        length = massFin.length;
      } else if (massFin[i] === "-"){
        let val = massFin[i-1]-massFin[i+1];
        massFin.splice(i-1, 3, val);
         i = 0;
        length = massFin.length;
      } 
    }
    return massFin[0];
  }
}

module.exports = SmartCalculator;









// const OPERATION = { pow: 0, multiply: 1, devide: 2, add: 3, subtract: 4 }

// class SmartCalculator {
//   constructor(initialValue) {
//       this.operations = [[OPERATION.add, initialValue]]
//       this.minOperation = OPERATION.add
//       return this
//   }

//   add(number) {
//       this.operations.push([OPERATION.add, number])
//       return this
//   }

//   subtract(number) {
//       this.operations.push([OPERATION.subtract, number])
//       return this
//   }

//   multiply(number) {
//       this.operations.push([OPERATION.multiply, number])
//       this.minOperation =  Math.min(OPERATION.multiply, this.minOperation)
//       return this
//   }

//   devide(number) {
//       this.operations.push([OPERATION.devide, number])
//       this.minOperation = Math.min(OPERATION.devide, this.minOperation)
//       return this
//   }

//   pow(number) {
//       this.operations.push([OPERATION.pow, number])
//       this.minOperation = OPERATION.pow
//       return this
//   }

//   valueOf() {
//       for (let priority = this.minOperation; priority < 3; priority++) {
//           for (let i = this.operations.length - 1; i > 0; i--) {
//               if (this.operations[i][0] === priority) {
//                   switch (priority) {
//                       case OPERATION.pow:
//                           this.operations[i - 1][1] = Math.pow(this.operations[i - 1][1], this.operations[i][1])
//                           break
//                       case OPERATION.multiply:
//                           this.operations[i - 1][1] *= this.operations[i][1]
//                           break
//                       case OPERATION.devide:
//                           this.operations[i - 1][1] /= this.operations[i][1]
//                           break
//                   }
//                   this.operations.splice(i, 1)
//               }
//           }
//       }
//       return this.operations.reduce( function(init, current){
//         return (current[0] === OPERATION.add) ? init += current[1] : init -= current[1] 
//       }, 0)
//   }
// }

// module.exports = SmartCalculator




// // class SmartCalculator {
// //   constructor(initialValue) {
// //     // your implementation
// //     this.num = initialValue;
// //   }

// //   add(number) {
// //     // your implementation
// //     this.num+=number;
// //     console.log(this.num);
// //     return this;
// //   }
  
// //   subtract(number) {
// //     // your implementation
// //     this.num-=number;
// //     return this;
// //   }

// //   multiply(number) {
// //     // your implementation
// //     this.num*=number;
// //     return this;
// //   }

// //   devide(number) {
// //     // your implementation
// //     this.num/=number;
// //     return this;
// //   }

// //   pow(number) {
// //     // your implementation
// //     this.num = Math.pow(this.num, number);
// //     return this;
// //   }
// // }

// //module.exports = SmartCalculator;
// class SmartCalculator {
//   constructor(initialValue) {
//     this.res = initialValue;
//     this.mass = []
//   }

//   add(number) {
//     this.res = String(this.res)+"+"+String(number);
//     return this;
//   }

//   subtract(number) {
//      this.res = String(this.res)+"-"+String(number);
//     return this;
//   }

//   multiply(number) {
//      this.res = String(this.res)+"*"+String(number);
//     return this;
//   }

//   devide(number) {
//      this.res = String(this.res)+"/"+String(number);
//     return this;
//   }

//   pow(number) {
//      this.res = String(this.res)+"**"+String(number);
//     return this;
//   }

//   valueOf() {
//     return eval(this.res)
//   }
// }

// module.exports = SmartCalculator;


// class SmartCalculator {
//   constructor(initialValue) {
//     // your implementation
//     this.num = initialValue;
//     this.mass = [];
//     this.massNum = [];
//   }

//   add(number) {
//     // your implementation
//     this.mass.push(4);
//     this.massNum.push(number);
//     return this;
//   }
  
//   subtract(number) {
//     // your implementation
//     this.mass.push(5);
//     this.massNum.push(number);
//     return this;
//   }

//   multiply(number) {
//     // your implementation
//     this.mass.push(2);
//     this.massNum.push(number);
//     return this;
//   }

//   devide(number) {
//     // your implementation
//     this.mass.push(3);
//     this.massNum.push(number);
//     return this;
//   }

//   pow(number) {
//     // your implementation
//     this.mass.push(1);
//     this.massNum.push(number);
//     return this;
//   }

//   counter() {
//     for(let i = 0; i<this.mass.length; i++){
//       for (let j = 0; j < this.mass.length-1-i; j++){
//         if (this.mass[j+1] < this.mass[j])
//            { 
//             let a = this.mass[j+1]; 
//             this.mass[j+1] = this.mass[j]; 
//             this.mass[j] = a; 

//             a = this.massNum[j+1]; 
//             this.massNum[j+1] = this.massNum[j]; 
//             this.massNum[j] = a; 
//         }
//       }
//     }
//      for(let i = 0; i<this.mass.length; i++){
//       switch(this.mass[i]){
//         case 1:
//           this.num = Math.pow(this.num, this.massNum[i]);
//           break;
//         case 2:
//           this.num*=this.massNum[i];
//           break;
//         case 3:
//           this.num/=this.massNum[i];
//           break;
//         case 4:
//           this.num+=this.massNum[i];
//          break;
//         case 5:
//           this.num-=this.massNum[i];
//       }
//     }
//     return this.num;
//   }

//   counter() {
//     return eval("2+2");
//   }

//  }
// class SmartCalculator {
//   constructor(initialValue) {
//     // your implementation
//     this.num = initialValue;
//     this.mass = [];
//     this.massNum = [];
//   }

//   add(number) {
//     // your implementation
//     this.mass.push(4);
//     this.massNum.push(number);
//     return this;
//   }
  
//   subtract(number) {
//     // your implementation
//     this.mass.push(5);
//     this.massNum.push(number);
//     return this;
//   }

//   multiply(number) {
//     // your implementation
//     this.mass.push(2);
//     this.massNum.push(number);
//     return this;
//   }

//   devide(number) {
//     // your implementation
//     this.mass.push(3);
//     this.massNum.push(number);
//     return this;
//   }

//   pow(number) {
//     // your implementation
//     this.mass.push(1);
//     this.massNum.push(number);
//     return this;
//   }

//   counter() {
//     for(let i = 0; i<this.mass.length; i++){
//       for (let j = 0; j < this.mass.length-1-i; j++){
//         if (this.mass[j+1] < this.mass[j])
//            { 
//             let a = this.mass[j+1]; 
//             this.mass[j+1] = this.mass[j]; 
//             this.mass[j] = a; 

//             a = this.massNum[j+1]; 
//             this.massNum[j+1] = this.massNum[j]; 
//             this.massNum[j] = a; 
//         }
//       }
//     }
//      for(let i = 0; i<this.mass.length; i++){
//       switch(this.mass[i]){
//         case 1:
//           this.num = Math.pow(this.num, this.massNum[i]);
//           break;
//         case 2:
//           this.num*=this.massNum[i];
//           break;
//         case 3:
//           this.num/=this.massNum[i];
//           break;
//         case 4:
//           this.num+=this.massNum[i];
//          break;
//         case 5:
//           this.num-=this.massNum[i];
//       }
//     }
//     return this.num;
//   }

//   valueOf() {
//     let val = this.counter();
//     return val;
//   }

//  }


//  module.exports = SmartCalculator;