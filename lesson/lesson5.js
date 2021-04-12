////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////      O O P   (ОБ'ЄКТИВНО-ОРІЄНТОВАНИЙ ПІДХІД)      ///////////////////////////
/////////////                   Ф У Н К Ц І Я   К О Н С Т Р У К Т О Р             //////////////
////////////////////////////////////////////////////////////////////////////////////////////////


// let valeriia = {
//     name: 'Valeriia',
//     hair: 'каштанове',
//     greeting: function () {
//         document.write(`Всім привіт. Мене звати ${this.name}. В мене ${this.hair} волосся`)
//         document.write(`<br>`)
//     },
//     hunt: function (position) {
//         document.write(`У нас відкрита позиція ${position}`)
//         document.write(`<br>`)
//     }
// }
// valeriia.greeting();
// valeriia.hunt('Middle React Dev & QA');


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// function User(age, name, gender = 'who knows', skill = 'JS', status = 'true') {
//     this.age = age;
//     this.gender = gender;
//     this.name = name;
//     this.skill = skill;
//     this.status = status;
//
//     this.greeting = function () {
//         document.write(`Всім привіт. Мене звати ${this.name}. Я вчу ${skill}`);
//         document.write(`<br>`);
//     }
// }
//
//
// let dimas = new User(25, 'Dima', 'male', undefined, false);
// let olga = new User(20, 'Olya', 'female');
// let anna = new User(24, 'Anna');
// let andrii = new User(23, 'Andy', 'male', ['Java, QA']);
//
// dimas.greeting()
// olga.greeting();
// anna.greeting();
// andrii.greeting();
//
// console.log(dimas);
// console.log(olga);
// console.log(anna);
// console.log(andrii);


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////       С Т А Н Д А Р Т Н І    К Л А С И     ТА   НАСЛІДУВАННЯ         //////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


class Human {
    constructor(age, name, gender) {
        this.age = age;
        this.name = name;
        this.gender = gender;
        this.money = 0;
    }

    eat() {
        console.log('Om nom nom');
    }

    goWork() {
        this.money += 100;
    }
}

let daniel = new Human(18, 'Daniel', 'Developer');
let noNameUser = new Human(89, null, '404');
console.log(daniel);

daniel.goWork();
daniel.goWork();
daniel.goWork();

daniel.eat();

daniel.goWork();

console.log(daniel);

/////////////////////     Н А С Л І Д У В А Н Н Я   / E X T E N D           ////////////////////////


class Developer extends Human {
    constructor(age, name, gender, skill) {
        super(age, name, gender);
        this.skill = skill;
    }

    goWork() {
        this.money += 999999;
    }

    coding() {
        console.log(`Click click on ${this.skill}`)
    }
}


let daniel20 = new Developer(36, 'ElDaniello', 'Developer', 'JS');

console.log(daniel20);

daniel.eat();
daniel20.goWork();
daniel20.goWork();
daniel20.coding();

console.log(daniel20);


///////////////        Н А С Л І Д У В А Н Н Я   В І Д   Н А С Л І Д У В А Н Н Я         ///////////////

class CTO extends Developer {
    constructor(age, name, gender, skill, managerstvo, slaves = []) {
        super(age, name, gender, skill);
        this.managerstvo = managerstvo;
        this.slaves = slaves;
    }

    eat() {
        console.log('I am going to restaurant today');
    }

    goWork() {
        this.money += 300;
    }

    showSlaves() {
        for (const slave of this.slaves) {
            console.log(`My name is ${slave.name || 'userName'}`)
            console.log('-------------------------------------')
        }
    }
}

let megaDen = new CTO(50,
    'Danilo Igorovich',
    'boss',
    'JS, JAVA',
    100,
    [daniel, daniel20, noNameUser]);

megaDen.eat();
megaDen.coding();
megaDen.goWork();

console.log(megaDen);

megaDen.showSlaves();










