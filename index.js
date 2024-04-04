
console.log( navigator.userAgent.toLowerCase())
// ......................


// let elemet = document.querySelector(`div`);
// let rend = document.querySelector(`.rend`);

// let h1 = document.querySelector(`h1`);
// const userAgent = navigator.userAgent;
// const browserName = userAgent.match(/([^\s]+)\/.+/)[1];
// h1.innerHTML = `Проверить свойств поддерживает (${browserName}) браузер`

// document
//   .querySelector(`.button_start`)
//   .addEventListener("click", function (evt) {

//     let i = 0
//     let p = `` 
//     for (const index in elemet.style) {
//       p += `
// ${index}`
//       i++
//     };
//     console.log(i)
//     rend.innerHTML = `${i}` + p
    
//     // console.log(`Успешнно всё работает, Молодец👍`);
//   });

//   function cut() {
//     let input = document.querySelector('.rend');
//     navigator.clipboard
//       .writeText(input.innerHTML)
//       .catch((err) => {
//         console.log("Скопировать в буфер не удалось", err);
//       });
//   }