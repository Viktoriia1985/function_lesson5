// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения,
//         которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью
//     комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrA1 = new CreateAtr('shape', 'Задает форму активной области ссылки для изображений.');
// const atrA2 = new CreateAtr('target', 'Имя окна или фрейма, куда браузер будет загружать документ');
// const atrA3 = new CreateAtr('name', 'Устанавливает имя якоря внутри документа');
// const specA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.' +
//     ' В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.' +
//     ' Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' +
//     'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри ' +
//     'веб-страницы.'
//
//
// const tagA = new CreateTag('<a>', specA,[atrA1,atrA2,atrA3])
// tagA.description();


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// function CreateTag(name, specification, atr)  {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
//
// const atrDiv1 = new CreateAtr('align', 'Задает выравнивание содержимого тега <div>');
// const atrDiv2 = new CreateAtr('title', 'Добавляет всплывающую подсказку к содержимому');
// const specDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента ' +
//     'документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью' +
//     ' стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю ' +
//     'таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'
//
//
// const tagDiv = new CreateTag('<div>', specDiv, [atrDiv1,atrDiv2]);
// tagDiv.description();


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrInput1 = new CreateAtr('border', 'Толщина рамки вокруг изображения.');
// const atrInput2 = new CreateAtr('alt', 'Альтернативный текст для кнопки с изображением.');
// const atrInput3 = new CreateAtr('list', 'Указывает на список вариантов, которые можно выбирать' +
//     ' при вводе текста.');
// const atrInput4 = new CreateAtr('pattern', 'Устанавливает шаблон ввода.');
// const specInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать ' +
//     'разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> ' +
//     'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент ' +
//     '<input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные ' +
//     'пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, ' +
//     'то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских ' +
//     'приложений, например, скриптов на языке JavaScript.'
//
//
// const tagInput = new CreateTag('<input>', specInput, [atrInput1,atrInput2,atrInput3,atrInput4]);
// tagInput.description();


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrH1 = new CreateAtr('<align>', 'Определяет выравнивание заголовка.');
// const specAtrH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную ' +
//     'важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный ' +
//     'заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является ' +
//     'наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом ' +
//     'жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к ' +
//     'блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на' +
//     ' следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'
//
// const tagH1 = new CreateTag('<H1>', specAtrH1, atrH1);
// tagH1.description();


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this)
//     }
// }
//
// const atrSpan1 = new CreateAtr('accesskey', 'Позволяет получить доступ к элементу с помощью' +
//     ' заданного сочетания клавиш.');
// const atrSpan2 = new CreateAtr('class', 'Определяет имя класса, которое позволяет связать тег' +
//     ' со стилевым оформлением.');
// const specSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от ' +
//     'блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации' +
//     ' внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет ' +
//     'и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста.' +
//     'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега ' +
//     'добавить атрибут class или id с именем селектора.';
//
//
// const tagSpan = new CreateTag('<span>', specSpan, [atrSpan1,atrSpan2]);
// tagSpan.description();


// function CreateAtr(name, specification) {
//     this.name = name;
//     this.specification = specification;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// function CreateTag(name, specification, atr) {
//     this.name = name;
//     this.specification = specification;
//     this.atr = atr;
//
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// const atrForm1 = new CreateAtr('accept-charset', 'Устанавливает кодировку, в которой сервер может' +
//     ' принимать и обрабатывать данные.');
// const atrForm2 = new CreateAtr('action', 'Адрес программы или документа, который обрабатывает ' +
//     'данные формы.');
// const atrForm3 = new CreateAtr('autocomplete', 'Включает автозаполнение полей формы.');
//
// const specForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между' +
//     ' пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью' +
//     ' клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему' +
//     ' усмотрению.';
//
//
// const tagForm = new CreateTag('<form>', specForm, [atrForm1,atrForm2,atrForm3]);
// tagForm.description();


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//

// class CreateAtr {
//     constructor(name, specification) {
//         this.name = name;
//         this.specification = specification;
//     }
//     description() {
//         console.log(this);
//     }
// }
//
// class CreateTag {
//     constructor(name, specification, atr){
//         this.name = name;
//         this.specification = specification;
//         this.atr = atr;
//     }
//     description(){
//         console.log(this);
//     }
// }
//
// const atrForm1 = new CreateAtr('accept-charset', 'Устанавливает кодировку, в которой сервер может' +
//     ' принимать и обрабатывать данные.');
// const atrForm2 = new CreateAtr('action', 'Адрес программы или документа, который обрабатывает ' +
//     'данные формы.');
// const atrForm3 = new CreateAtr('autocomplete', 'Включает автозаполнение полей формы.');
//
// const specForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между' +
//     ' пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью' +
//     ' клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему' +
//     ' усмотрению.';
//
//
// const tagForm = new CreateTag('<form>', specForm, [atrForm1,atrForm2,atrForm3]);
// tagForm.description();

// class CreateAtr {
//     constructor(name, specification) {
//         this.name = name;
//         this.specification = specification;
//     }
//
//     description() {
//         console.log(this)
//     }
// }
//
// class CreateTag {
//     constructor(name, specification, atr) {
//         this.name = name;
//         this.specification = specification;
//         this.atr = atr;
//     }
//
//     description() {
//         console.log(this)
//     }
// }
//
// const atrOption1 = new CreateAtr('disabled', 'Заблокировать для доступа ' +
//     'элемент списка.');
// const atrOption2 = new CreateAtr('selected', 'Заранее устанавливает определенный ' +
//     'пункт списка выделенным.');
// const atrOption3 = new CreateAtr('label', 'Указание метки пункта списка.');
//
// const specOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью' +
//     ' контейнера <select>. Ширина списка определяется самым широким текстом, указанным в ' +
//     'теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять ' +
//     'данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также ' +
//     'необходимо, когда к данным списка идет обращение через скрипты.';
//
// const tagOption = new CreateTag('<option>', specOption, [atrOption1,atrOption2,atrOption3]);
// tagOption.description();

// class CreateAtr {
//     constructor(name, specification) {
//         this.name = name;
//         this.specification = specification;
//     }
//
//     description() {
//         console.log(this)
//     }
// }
//
//
// class CreateTag {
//     constructor(name, specification, atr) {
//         this.name = name;
//         this.specification = specification;
//         this.atr = atr;
//     }
//
//     description() {
//         console.log(this)
//     }
// }
//
// const atrSelect1 = new CreateAtr('multiple', 'Позволяет одновременно выбирать сразу ' +
//     'несколько элементов списка.');
// const atrSelect2 = new CreateAtr('name', 'Имя элемента для отправки на сервер или' +
//     ' обращения через скрипты.');
// const atrSelect3 = new CreateAtr('size', 'Количество отображаемых строк списка.');
// const specSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося ' +
//     'списка, а также список с одним или множественным выбором, как показано далее. Конечный вид ' +
//     'зависит от использования атрибута size тега <select>, который устанавливает высоту списка. ' +
//     'Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может' +
//     ' изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен ' +
//     'быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то ' +
//     'требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка' +
//     ' идет обращение через скрипты.';
//
// const tagSelect = new CreateTag('<select>', specSelect, [atrSelect1,atrSelect2,atrSelect3]);
// tagSelect.description();


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car

//
// let car = {
//     manufacturer: 'BMW',
//     model: 'X3',
//     year: 2016,
//     maxSpeed: 280,
//     capacity: 2.6,
//     driver: 'someone',
//
//
//     drive() {
//         console.log(`Авто їде зі швидкістю ${this.maxSpeed} км на годину`)
//     },
//
//     info() {
//         console.log(`
//         manufacturer: ${this.manufacturer},
//         model: ${this.model},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         driver: ${this.driver},`)
//     },
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     },
//
//     changeYear(newValue) {
//         this.year = newValue;
//     },
//
//     addDriver(newDriver) {
//         this.driver = newDriver;
//     }
//
// }
//
// car.drive();
// car.increaseMaxSpeed(360);
// car.changeYear(2020);
// car.addDriver({name: 'Anna', age:25, status: 'no blond'});
// car.info();
// console.log(car.driver);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                  Р О Б О Т А   В    А У Д И Т О Р І Ї                  ///////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його
// в поточний об'єкт car

// function Car(manufacturer, model, year, maxSpeed, capacity, driver) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = 'no name';
//
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`
//         manufacturer : ${this.manufacturer},
//         model : ${this.model},
//         year : ${this.year},
//         maxSpeed : ${this.maxSpeed},
//         capacity : ${this.capacity}
//         driver: ${this.driver}`)
//     }
//
//    this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//    }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// let car = new Car('Mazda', 3,2016,180,1.5)
// car.drive();
// car.increaseMaxSpeed(250);
// car.changeYear(2020);
// car.addDriver({name:'Olga', age:22});
// car.info();
// console.log(car.driver);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(manufacturer, model, year, maxSpeed, capacity, driver) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = 'no name';
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`
//         manufacturer : ${this.manufacturer},
//         model : ${this.model},
//         year : ${this.year},
//         maxSpeed : ${this.maxSpeed},
//         capacity : ${this.capacity},
//         driver: ${this.driver}`)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(newDriver) {
//         this.driver = newDriver;
//     }
//
// }
//
// let car = new Car('Mazda', 3,2016,180,1.5)
// car.drive();
// car.increaseMaxSpeed(250);
// car.changeYear(2020);
// car.addDriver({name:'Olga', age:22});
// car.info();
// console.log(car.driver);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, sizeShoes) {
//         super(name, age);
//         this.sizeShoes = sizeShoes;
//     }
// }
//
// const prince1 = new Prince('Vova', 22, 39);
// const cinderellas = [
//     new Cinderella('Anna', 19, 35),
//     new Cinderella('Alinna', 23, 37),
//     new Cinderella('Angela', 25, 39),
//     new Cinderella('Vika', 18, 35),
//     new Cinderella('Sveta', 27, 38),
//     new Cinderella('Tosya', 24, 36),
//     new Cinderella('Gala', 10, 38),
//     new Cinderella('Nastya', 21, 35),
//     new Cinderella('Raya', 22, 36),
//     new Cinderella('Vera', 19, 39),
// ]
//
// for (const cinderella of cinderellas) {
//     if(cinderella.footSize === prince1.sizeShoes) {
//         console.log(cinderella)
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та
// функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince (name, age, sizeShoes){
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes;
//
//     this.findCinderella = function(array){
//         for (const cinderella of array) {
//             if(cinderella.footSize === prince1.sizeShoes) {
//                 console.log(cinderella);
//             }
//         }
//     }
// }
//
// const prince1 = new Prince('Vova', 22, 35);
// const cinderellas = [
//     new Cinderella('Anna', 19, 35),
//     new Cinderella('Alinna', 23, 37),
//     new Cinderella('Angela', 25, 39),
//     new Cinderella('Vika', 18, 35),
//     new Cinderella('Sveta', 27, 38),
//     new Cinderella('Tosya', 24, 36),
//     new Cinderella('Gala', 10, 38),
//     new Cinderella('Nastya', 21, 35),
//     new Cinderella('Raya', 22, 36),
//     new Cinderella('Vera', 19, 39),
// ]
//
// prince1.findCinderella(cinderellas);




























