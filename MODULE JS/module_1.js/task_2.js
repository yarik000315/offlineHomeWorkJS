'use strict'

const total = 100;
const ordered = 150;
let type;

if( total >= ordered ) {
    type = "Заказ оформлен, с вами свяжется менеджер";
    }     else {
    type = "На складе недостаточно товаров!";
    }

    console.log (type);
