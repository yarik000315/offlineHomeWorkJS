"use strict";
// Задача 3-2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

// ВІДПОВІДЬ

const countProps = function (obj) {
  "use strict";
  // Write code under this line
  const keysOfCountProps = Object.keys(obj);
  for (const key of keysOfCountProps) {
    if (keysOfCountProps.length === 0) {
      return 0;
    }
  }
  return keysOfCountProps.length;
};

//console.log(countProps({})); // 0

//console.log(countProps({a:1, b:1})); // 2

//console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5
