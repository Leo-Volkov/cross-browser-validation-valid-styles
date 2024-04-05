let v_rend = document.querySelector(`.v_rend`);
v_rend.innerHTML = navigator.userAgent;


let elemet = document.querySelector(`div`);
let s_rend = document.querySelector(`.s_rend`);   
let h3 = document.querySelector(`h3`);

document
    .querySelector(`.button_start`)
    .addEventListener("click", function (evt) {
        let i = 0;
        let p = ``;
        for (const e in elemet.style) {
            p += `<li>${e}</li>`;
            i++;
        }
        h3.innerHTML = `В браузере доступно ${i} ${generateOutput(i)}`;
        s_rend.innerHTML = p;
    });

document.querySelector(`.cut`)
.addEventListener("click", function (evt) {
    navigator.clipboard.writeText(navigator.userAgent).catch((err) => {
        console.log("Скопировать в буфер не удалось", err);
    });
});





function getSuffix(number) {
  if (number === 1) {
    return `о`
  }
    if (number % 10 === 1 && number % 100 !== 11) {
        return '';
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14, 23].includes(number % 100)) {
        return 'а';
    } else {
        return '';
    }
}

function generateOutput(number) {
    return ' свойств' + getSuffix(number);
}