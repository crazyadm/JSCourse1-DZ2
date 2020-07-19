
/* Код из задания1 в методичке*/
var a = 1, b = 1, c, d;
c = ++a; alert("При а=1,  ++a = " + c);           // 2
d = b++; alert("При b=1, b++ = " + d);           // 1
c = (2+ ++a); alert("При начальной а=1, и а после прошлой операции уже равно 2  2+ ++a = " + c);      // 5
d = (2+ b++); alert("При начальной b=1, и b после прошлой операции уже равно 2  2+ b++ = " + d);      // 4
alert("После 2х операции прединкремента а = " + a);                    // 3
alert("После 2х операции постинкремента b = " + b);                    // 3
//Объяснение результата заключается в последовательности выполнения операций над переменными
//т.е. в выражении d = 2 + b++  JS ввыполняет в след. последовательности d=2+b и потом b++
//Не смотря даже на скобки



//Код задания2 в методичке
var a = 2;
var x = 1 + (a *= 2);
alert("При а=2, Выражение x = 1 + (a *= 2) = " + x) // ответ 5, *= - умножение с присваиванием

//Задание3
x = parseInt(prompt("Введите число 1 ")) //Пременная х объявлена ранее
let y = parseInt(prompt("Введите число 2 "))

if ((x>=0) && (y>=0)) {
    alert ("Исходные числа положительные. Разность введенных чисел = " + (x-y)) 
}

if ((x<0) && (y<0)) {
    alert ("Исходные числа отрицательные. Произведение введенных чисел = " + (x*y))
}

if (((x<0)&&(y>=0)) || ((x>=0)&&(y<0))) {
    alert ("Исходные числа разнознаковые. Сумма введенных чисел = " + (x+y))
}

//Задание 4

a=parseInt(prompt("Введите число"))
let strOutput = "Результат вычислений - "
switch (a) {
  case 0:
    strOutput = strOutput + 0 + " "
  case 1:
    strOutput = strOutput + 1 + " "
  case 2:
    strOutput = strOutput + 2 + " "
  case 3:
    strOutput = strOutput + 3 + " "
  case 4:
    strOutput = strOutput + 4 + " "
  case 5:
    strOutput = strOutput + 5 + " "
  case 6:
    strOutput = strOutput + 6 + " "
  case 7:
    strOutput = strOutput + 7 + " "
  case 8:
    strOutput = strOutput + 8 + " "
  case 9:
    strOutput = strOutput + 9 + " "
  case 10:
    strOutput = strOutput + 10 + " "
  case 11:
    strOutput = strOutput + 11 + " "
  case 12:
    strOutput = strOutput + 12 + " "
  case 13:
    strOutput = strOutput + 13 + " "
  case 14:
    strOutput = strOutput + 14 + " "
  case 15:
    strOutput = strOutput + 15 + " "
}
alert (strOutput)

//Задание 5
// Думаю не нужно дальше писать код для демонстрации 
// переменные  a b определены раньше
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mult(a, b) {
  return a * b;
}

//Задание 6
function mathOperation(arg1, arg2, operation){
  switch(operation){
      case 'сложение':
          return arg1 + arg2;
          break;
      case 'вычитание':
          return arg1 - arg2;
          break;
      case 'деление':
          return arg1 / arg2;
          break;
      case 'умножение':
          return arg1 * arg2;
          break;
  }
}

//Задание 7
//Сравнение 0 и null
alert ("Выражение null==0 - " + (null==0) )
alert ("Нашел мистику в интернете )) null>=0 - " + (null>=0) )

//Задание 8
function power(val, pow)  {
  if (pow != 1) {
      return val * power(val, pow - 1);
  } else if (pow <= 0) {
      alert("Введите число большее или равное 1");
  } else {
      return val;
  }
}