// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

"use strict";

const china = 'китай';
const chinaPrice = 100;
const chile = 'чили';
const chilePrice = 250;
const australia = 'австралия';
const australiaPrice = 170;
const india = 'индия';
const indiaPrice = 80;
const jamaica = 'ямайка';
const jamaicaPrice = 120;
let userSelectedCountry = prompt('Введите страну доставки.');

if (userSelectedCountry === null) {
  console.log('ничего не введено');
} else {
  switch (userSelectedCountry.toLowerCase()) {
    case china:
      alert(`Доставка в ${china} будет стоить ${chinaPrice} кредитов`);
      break;
    case chile:
      alert(`Доставка в ${chile} будет стоить ${chilePrice} кредитов`);
      break;
    case australia:
      alert(`Доставка в ${australia} будет стоить ${australiaPrice} кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`);
      break;

    default:
      alert('В Вашей стране доставка не доступна');
  }
}