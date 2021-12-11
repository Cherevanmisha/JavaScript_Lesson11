// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


//
// let loc = document.forms.loc;
//
// loc.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     localStorage.setItem('userData',JSON.stringify({name,age}))
// }




// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let carArr = document.forms.carArr;
// carArr.onsubmit = function (e) {
//     e.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let car = {model: model, type: type, volume: volume};
//     let car2 = JSON.parse(localStorage.getItem('car2'));
// console.log(car2)
//     if (!car2) {
//         car2 = [];
//         car2.push(car);
//         localStorage.setItem('car2', JSON.stringify('car2'));
//     } else {
//         car2.push(car);
//         localStorage.setItem('car2', JSON.stringify('car2'));
//     }
// };
















