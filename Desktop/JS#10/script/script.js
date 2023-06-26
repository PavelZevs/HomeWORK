// ----------------------Homework 10-------
let Lightbulb = function(name) {
    this.name = name;
    this.power = 0;
    this.costEnergy = 0;
    this.worktime = 0;
    this.result = 0;
  };
  
  Lightbulb.prototype.get = function() {
    this.power = +prompt('Введите мощность лампочки, Вт');
    this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
    if (confirm('Включить лампочку?')) {
      this.worktime = +prompt('Сколько времени работает лампочка?, ч');
    } else {
      this.worktime = 0;
    }
    this.operation();
  };
  
  Lightbulb.prototype.operation = function() {
    this.result = (this.power / 1000) * this.costEnergy * this.worktime;
    this.show();
  };
  
  Lightbulb.prototype.show = function() {
    if (this.worktime == 0 || this.worktime == undefined) {
      console.log('Лампочка ' + this.name + ' не включена');
    } else {
      console.log('Лампочка ' + this.name + ' проработала - ' + this.worktime + 'ч, и стоимость потраченной электроэнергии составляет = ' + this.result + 'р.');
    }
  };
  
  let LEDLightbulb = function(name) {
    Lightbulb.call(this, name);
  };
  
  LEDLightbulb.prototype = Object.create(Lightbulb.prototype);
  LEDLightbulb.prototype.constructor = LEDLightbulb;
  
  LEDLightbulb.prototype.operation = function() {
    this.result = (this.power / 1000) * this.costEnergy * this.worktime * 0.8; // Модифицированный метод для светодиодных лампочек, учитывающий энергоэффективность
    this.show();
  };
  
  let ledLightBulb = new LEDLightbulb('в гостиной');
  ledLightBulb.get();
  
  let lightBulb = new Lightbulb('лампочка1');
  let lightBulb2 = new Lightbulb('лампочка2');
  let lightBulb3 = new Lightbulb('лампочка3');
  let lightBulb4 = new Lightbulb('лампочка4');
  let lightBulb5 = new Lightbulb('лампочка5');
  
  let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result + lightBulb4.result + lightBulb5.result + ledLightBulb.result;
  console.log('Общая стоимость потраченной электроэнергии - ' + totalCost + 'р');
