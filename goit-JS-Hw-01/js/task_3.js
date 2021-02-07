// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

'use strict';



// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const massagePasword = prompt("Введите ваш пароль")
// switch (massagePasword) {
//     case 'jqueryismyjam':
//       message = 'Добро пожаловать!';
//       break;
//     case null:
//       message = 'Отменено пользователем!';
//       break;
//     default:
//       message = 'Доступ запрещен, неверный пароль!';
//       break;
//   }
//   alert (message);


// ЗАВДАННЯ З ТЕЛЕГРАМУ

// Использование if else
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

// const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.


// ВІДПОВІДЬ:

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// if (userPassword === 'jqueryismyjam') {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }
// Write code under this line


// console.log(message);

//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'