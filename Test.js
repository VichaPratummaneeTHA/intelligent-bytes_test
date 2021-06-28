// Money in pocket //
var _500 = 10;
var _100 = 50;
var _50 = 50;
var _20 = 50;
var _10 = 20;
var _5 = 20;
var _1 = 100;

var inputMoney = 3000
var receiveMoney = 2440

//*Recevice Maney *//

if(inputMoney >= 500) {
  var get500 = Math.floor(inputMoney / 500)
  var sumValue500 = get500 * 500

  inputMoney = inputMoney - sumValue500
  console.log('We get bank note 500 =' + ' ' + get500 +'' +' note' )
} else {
  get500 = 0; 
  console.log('We get bank note 500 =' + ' ' + get500 +'' +' note' )

} if (inputMoney >= 100) {
  var get100 = Math.floor(inputMoney / 100)
  var sumValue100 = get100 * 100
  inputMoney = inputMoney - sumValue100
  console.log('We get bank note 100 =' + ' ' + get100 +'' +' note' ) 
} else {
  get100 = 0;
  sumValue100 = 0; 
  console.log('We get bank note 100 =' + ' ' + get100 +'' +' note' ) 

} if (inputMoney >= 50) {
  var get50 = Math.floor(inputMoney / 50)
  var sumValue50 = get50 * 50

  inputMoney = inputMoney - sumValue50
  console.log('We get bank note 50 =' + ' ' + get50 +'' +' note' )
} else {
  get50 = 0;
  sumValue50 = 0; 
  console.log('We get bank note 50 =' + ' ' + get50 +'' +' note' ) 

}if (inputMoney >= 20) {
  var get20 = Math.floor(inputMoney / 20)
  var sumValue20 = get20 * 20

  inputMoney = inputMoney - get20
  console.log('We get bank note 20 =' + ' ' + get20 +'' +' note' )
} else {
  get20 = 0;
  sumValue20 = 0; 
  console.log('We get bank note 20 =' + ' ' + get20 +'' +' note' ) 

}if (inputMoney >= 10) {
  var get10 = Math.floor(inputMoney / 10)
  var sumValue10 = get10 * 10

  inputMoney = inputMoney - sumValue10
  console.log('We get coin 10 =' + ' ' + get10 +'' +' note' )
} else {
  get10 = 0;
  sumValue10 = 0; 
  console.log('We get coin 10 =' + ' ' + get10 +'' +' note' ) 

}if (inputMoney >= 5) {
  var get05 = Math.floor(inputMoney / 5)
  var sumValue5 = get05 * 5

  inputMoney = inputMoney - sumValue5
  console.log('We get coin 5 =' + ' ' + get05 +'' +' note' )
} else {
  get05 = 0;
  sumValue5 = 0; 
  console.log('We get coin 5 =' + ' ' + get05 +'' +' note' )

}if (inputMoney >= 1) {
  var get01 = Math.floor(inputMoney / 1)
  var sumValue1 = get01 * 1

  inputMoney = inputMoney - sumValue1
  console.log('We get coin 1 =' + ' ' + get01 +'' +' note' )
}else {
  get01 = 0;
  sumValue1 = 0; 
  console.log('We get coin 1 =' + ' ' + get01 +'' +' note' )
}

console.log(inputMoney)

//*Chagne Maney *//

var inputMoney = 3000
var changeMoney = inputMoney - receiveMoney
console.log(changeMoney)

if(changeMoney >= 500) {
  var change500 = Math.floor(changeMoney / 500)
  var sumValue500 = change500 * 500

  changeMoney = changeMoney - sumValue500
  console.log('We change bank note 500 =' + ' ' + change500 +'' +' note' )
} else {
  change500 = 0; 
  console.log('We change bank note 500 =' + ' ' + change500 +'' +' note' )

} if (changeMoney >= 100) {
  var change100 = Math.floor(changeMoney / 100)
  var sumValue100 = change100 * 100
  changeMoney = changeMoney - sumValue100
  console.log('We change bank note 100 =' + ' ' + change100 +'' +' note' ) 
} else {
  change100 = 0;
  sumValue100 = 0; 
  console.log('We change bank note 100 =' + ' ' + change100 +'' +' note' ) 

} if (changeMoney >= 50) {
  var change50 = Math.floor(changeMoney / 50)
  var sumValue50 = change50 * 50

  changeMoney = changeMoney - sumValue50
  console.log('We change bank note 50 =' + ' ' + change50 +'' +' note' )
} else {
  sum3 = 0;
  change50 = 0; 
  console.log('We change bank note 50 =' + ' ' + change50 +'' +' note' ) 

}if (changeMoney >= 20) {
  var change20 = Math.floor(changeMoney / 20)
  var sumValue20 = change20 * 20

  changeMoney = changeMoney - sumValue20
  console.log('We change bank note 20 =' + ' ' + change20 +'' +' note' )
} else {
  change20 = 0;
  sumValue20 = 0; 
  console.log('We change bank note 20 =' + ' ' + change20 +'' +' note' ) 

}if (changeMoney >= 10) {
  var change10 = Math.floor(changeMoney / 10)
  var sumValue10 = change10 * 10

  changeMoney = changeMoney - sumValue10
  console.log('We change coin 10 =' + ' ' + change10 +'' +' note' )
} else {
  change10 = 0;
  sumValue10 = 0; 
  console.log('We change coin 10 =' + ' ' + change10 +'' +' note' ) 

}if (changeMoney >= 5) {
  var change05 = Math.floor(changeMoney / 5)
  var sumValue5 = change05 * 5

  changeMoney = changeMoney - sumValue5
  console.log('We change coin 5 =' + ' ' + change05 +'' +' note' )
} else {
  change05 = 0;
  sumValue5 = 0; 
  console.log('We change coin 5 =' + ' ' + change05 +'' +' note' )

}if (changeMoney >= 1) {
  var change01 = Math.floor(changeMoney / 1)
  var sumValue1 = change01 * 1

  changeMoney = changeMoney - sumValue1
  console.log('We change coin 1 =' + ' ' + change01 +'' +' note' )
}else {
  change01 = 0;
  sumValue1 = 0; 
  console.log('We change coin 1 =' + ' ' + change01 +'' +' note' )
}

console.log(changeMoney)

_500 = _500 + get500
_500 = _500 - change500 
sum_500 = _500 * 500

console.log(`We have bank note 500 amount = ${_500} note`)

_100 = _100 + get100
_100 = _100 - change100
sum_100 = _100 * 100


console.log(`We have bank note 500 amount = ${_100} note`)

_50 = _50 + get50
_50 = _50 - change50
sum_50 = _50 * 50

console.log(`We have bank note 500 amount = ${_50} note`)

_20 = _20 + get20
_20 = _20 - change20
sum_20 = _20 * 20

console.log(`We have bank note 500 amount = ${_20} note`)

_10 = _10 + get10
_10 = _10 - change10
sum_10 = _10 * 10


console.log(`We have bank note 500 amount = ${_10} note`)

_5 = _5 + get05
_5 = _5 - change05
sum_5 = _5 * 5


console.log(`We have bank note 500 amount = ${_5} note`)

_1 = _1 + get01
_1 = _1 - change01
sum_1 = _1 * 1


console.log(`We have bank note 500 amount = ${_1} note`)

var total_amout = sum_500 + sum_100 + sum_50 + sum_20 + sum_10 + sum_5 + sum_1

console.log(`Total amount in pocket ${total_amout}`)


