"use strict";
const categories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${categories.length} категории.`);
const categoriesOfEachItem = document.querySelectorAll(".item > h2");
const itemsOfCategories = document.querySelectorAll(".item > ul");

categoriesOfEachItem.forEach((types) => {
  console.log(`Категория: ${types.textContent}`);
  console.log(
    `Количество елементов: ${types.nextElementSibling.childElementCount}`
  );
});
