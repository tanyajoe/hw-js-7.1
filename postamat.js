let currentSum = 100;
let smsCod = "A001DFX0";
let ourCod = "A001DFX0";
let postamat = [null, null, null, "4 - ваша посылка", null];

if (ourCod == smsCod) {
  currentSum -= 100;
  console.log(
    `Вы получили посылку из ячейки ${postamat[3].slice(
      0,
      1
    )} и ваш счет составляет: ${currentSum} р`
  );
} else {
  console.log(`Вы ввели неверный код`);
}
