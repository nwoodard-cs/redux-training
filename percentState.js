
const getPercent = (num, den) => {
 return addPercentSign(decimalToPercent(convertToDecimal(num,den)))
}

const convertToDecimal = (num, den) => (num/den)
const decimalToPercent = (dec) => dec*100
const addPercentSign = (perc) => perc+ '%'

console.log(getPercent(4,3));
