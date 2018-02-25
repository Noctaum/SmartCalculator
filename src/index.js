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

