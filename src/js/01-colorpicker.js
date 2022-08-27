import "../css/colorpicker.scss";
import "../css/common.scss";
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];
// --- Делаем динамическую разметку по массиву
// 1
// делаю объект «Объект ссылок» + в нем делаю ключ palette = див в котором будут лежать карточки

// 2 (динамически создаем разметку)
// делаю метод объекта createColorCardEl которорый принимает массив, перебирает его методом map,
//на каждой итерации делает разметку с значениями которые берет из массива + в конце на результат map ставим .join('') (чтобы не получить обьект, а получать строку для insertAdjacentHTML)

// 3 (зарендериваем в див разметку)
// refs.palette.insertAdjacentHTML('beforeend', cardsMarkUp); === в <div class="palette js-palette"></div> инсертим разметку (вконец, что добавляем)
// cardsMarkUp = результат динамической разметки

//--- Делаем функционал который по клику возвращает цвет
// 4 (Делаем делегирование)
// вешаем слушателя событий на refs.palette

// 5 (создаем функцию colorPicker)
// делаю метод объекта showMeColor которая берет цвет из таргета и передает ее в беграунд
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 1
const refs = {
  palette: document.querySelector(".js-palette"),
  // 2 (динамически создаем разметку)
  createColorCardEl(colors) {
    return colors
      .map(({ hex, rgb }) => {
        return `<div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: "${hex}"</p>
        <p>RGB: "${rgb}"</p>
      </div>
    </div>
    `;
      })
      .join("");
  },
  // перебираем методом map массив объектов и на каждой итерации делаем разметку с параметрами из массива
  // в конце получаем результат массив, делаем join('') ==>  получаем струку
  showMeColor(event) {
    if (!event.target.classList.contains("color-swatch")) {
      console.log("!");
      return;
    }
    // если название класса не содержит color-swatch мы не слушаем событие

    console.log(`hex`, event.target.dataset.hex);
    //выводим значение дата атрибута data-hex
    console.log(`rgb`, event.target.dataset.rgb);
    //выводим значение дата атрибута data-rgb
    console.log(
      `ссылка на родительский элемент (если будет меняться разметка то не надежно)`,
      event.target.parentNode
    );
    //выводим ссылку родителя
    console.log(
      `ближайший селектор вврух (вложенность не важна) по параметру`,
      event.target.closest(".color-card")
    );
    //выводим ссылку родителя / деда/ прадеда и дальше с классом .color-card
    console.log(`---------------------------`);

    refs.toggleCardClass();
    //запускаем функцию проверки ативного класса (переключатель классов)

    refs.setBgColor(event.target.dataset.hex);
    // запускаем функцию сменны цвета и передаем туда аргумент
  },

  toggleCardClass() {
    const currenActive = document.querySelector(".color-card.is-active");
    // переменная активной кнопки (когда мы добавили класс что кнопка активная)

    // if (currenActive) {
    //   currenActive.classList.remove('is-active');
    // }
    // если у нас есть активная кнопка (запрос currenActive возвращает TRUE а не Null) то мы удаляем класс на этой кнопке и она становиться не активной
    currenActive?.classList.remove("is-active");
    // ЗАМЕНА IF, если у нас есть currenActive то оно выполнит действие после ?. / если нету то код не сломаеться
    event.target.closest(".color-card").classList.toggle("is-active");
    // при клике на таргет переключаем класс на ближайшем родителе / деде и т д с классом  .color-card
  },

  setBgColor(color) {
    document.querySelector("body").style.backgroundColor = color;
    // ставим инлайн стиль боди из дата атрибута выбраного таргета
  },
};
const cardsMarkUp = refs.createColorCardEl(colors);
// переменная с динамически созданной разметкой

refs.createColorCardEl(colors);
// 2 (динамически создаем разметку)

refs.palette.insertAdjacentHTML("beforeend", cardsMarkUp);
// 3 (зарендериваем в див разметку)

refs.palette.addEventListener("click", refs.showMeColor);
// 4 Делаем делегирование

///
///
/// принцип работы шаблонизатора
///
///
// const template = superTemplateEngine.compile(
//   `<div><p>{{ name }}<p/> <p>{{ email }}<p/> <div/>`
// );
// template({ name: "Serget", email: "solod@gmail.com" }); // <div><p>Serget<p/> <p>solod@gmail.com<p/> <div/>
//шаблонизатор
// function template(data) {
//   return `<div><p>data.name<p/> <p>data.email<p/> <div/>`;
// }
// шаблонизатор под капотом
