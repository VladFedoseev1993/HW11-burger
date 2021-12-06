'use strict';

const Hamburger = function (money, calories) {
  this.money = money;
  this.calories = calories;
}
Hamburger.prototype.cheeze = function () {
  this.money += 10;
  this.calories += 20;
  console.log(`${this.money} тугриков ${this.calories} калорий`);
}
Hamburger.prototype.salat = function () {
  this.money += 20;
  this.calories += 5;
  console.log(`${this.money} тугриков ${this.calories} калорий`);
}
Hamburger.prototype.potate = function () {
  this.money += 15;
  this.calories += 10;
  console.log(`${this.money} тугриков ${this.calories} калорий`);
}
Hamburger.prototype.seasoning = function () {
  this.money += 15;
  this.calories += 0;
  console.log(`${this.money} тугриков ${this.calories} калорий`);
}
Hamburger.prototype.mayon = function () {
  this.money += 20;
  this.calories += 5;
  console.log(`${this.money} тугриков ${this.calories} калорий`);
}

const smallgamb = new Hamburger(50, 20);
const averagamb = new Hamburger(75, 30);
const largegamb = new Hamburger(100, 40);

largegamb.seasoning();
smallgamb.salat();
averagamb.cheeze();