let v_rend = document.querySelector(`.v_rend`);
v_rend.innerHTML = navigator.userAgent;
// ......................

let elemet = document.querySelector(`div`);
let s_rend = document.querySelector(`.s_rend`);
let h3 = document.querySelector(`h3`);

document
    .querySelector(`.button_start`)
    .addEventListener("click", function (evt) {
        let i = 0;
        let p = ``;
        for (const index in elemet.style) {
            p += `<li>${index}</li>`;
            i++;
        }
        h3.innerHTML = `В браузере доступно ${i} ${getEnding(i)}`;
        s_rend.innerHTML = p;

        // console.log(`Успешнно всё работает, Молодец👍`);
    });

document.querySelector(`.cut`).addEventListener("click", function (evt) {
    let input = document.querySelector(".s_rend");
    navigator.clipboard.writeText(navigator.userAgent).catch((err) => {
        console.log("Скопировать в буфер не удалось", err);
    });
});


function getEnding(i) {
    let ending;
    const lastDigit = i % 10;
  
    switch (lastDigit) {
      case 1:
        ending = "свойство";
        break;
      case 2:
      case 3:
      case 4:
        ending = "свойтва";
        break;
      default:
        ending = "свойствa";
    }
  
    return ending;
  }