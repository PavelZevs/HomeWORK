// ----------------------Homework 7-------



let Lightbulb = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
        if (confirm('Включить лампочку?')) {
            this.worktime = +prompt('Сколько времени работает лампочка?, ч');
        } else {
            this.worktime = 0;
        };
        this.operation();
    };

    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.worktime;

        this.show();
    };

    this.show = function () {

        if (this.worktime == 0 || this.worktime == undefined) {
            console.log('Лампочка ' + this.name + ' не включена');
        } else {
            console.log('Лампочка ' + this.name + ' проработала - ' + this.worktime + 'ч, и стоимость потраченной электроэнергии составляет = ' + this.result + 'р.');
        }
    };
};

let lightBulb = new Lightbulb(' в кухне');
lightBulb.get();

let lightBulb2 = new Lightbulb('в коридоре');
lightBulb2.get();

let lightBulb3 = new Lightbulb('в ванной');
lightBulb3.get();

let lightBulb4 = new Lightbulb('в гостиной');
lightBulb4.get();

let lightBulb5 = new Lightbulb('в спальне');
lightBulb5.get(); 

let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result + lightBulb4.result + lightBulb5.result;
console.log('Общая стоимость потраченной электроэнергии  - ' + totalCost + 'р');

