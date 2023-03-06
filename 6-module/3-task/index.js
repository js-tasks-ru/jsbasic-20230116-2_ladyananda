import createElement from "../../assets/lib/create-element.js";
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.carousel(this.slides);
    this.elem.addEventListener("click", (event) => this.onClick(event)); //слушаем событие клик по кнопке

    this.value = 0; //стартовое значение смещение transform value 0
    this.curentSlide = 1; //стартовое значение первого слайда 1

    this.slideLenght = this.elem.querySelectorAll(".carousel__slide"); //длина слайдов
    this.left = this.elem.querySelector(".carousel__arrow_left"); //выбираем левую кнопку this.left
    this.right = this.elem.querySelector(".carousel__arrow_right"); //выбираем правую кнопку this.right

    this.left.style.display = "none"; //в стартовой позиции слайдера ставим отсутствие левой кнопки

    this.elem.addEventListener("click", (event) => this.slider(event));
  } //привязываем событие click  к this.elem  после click происходит событие, описанные в slider(event)

  slider(event) {
    //сдвиг слайдов и скрытие кнопок

    let counter = this.elem.querySelector(".carousel__inner").offsetWidth; //Ширина карусели с классом carousel__inner

    if (event.target.closest(".carousel__arrow_left")) {
      //event target - содержит элемент на котором сработало событие closest - ближайший родительский элемент к классу(".__")
      this.elem.querySelector(
        ".carousel__inner"
      ).style.transform = `translateX(${(this.value += counter)}px)`; //перемещение слайда влево от this.value
      this.curentSlide -= 1;

      if (this.curentSlide === 1) {
        this.left.style.display = "none"; //скрываем левую кнопку, если находимся на слайде 1
      } else if (this.curentSlide !== this.slideLenght.length) {
        //если текущий слайд не равен количеству слайдов
        this.right.style.display = ""; //тогда показываем кнопку "вправо"
      } else {
        // иначе
        this.left.style.display = ""; // показываем "влево"
      }
    }

    if (event.target.closest(".carousel__arrow_right")) {
      //Event.target  - элемент на котором сработало событие, closest -ближайший родительский элемент
      this.elem.querySelector(
        ".carousel__inner"
      ).style.transform = `translateX(${(this.value -= counter)}px)`; //задаем перемещение слайдов на ширину слайда вправо
      this.curentSlide += 1; // к правому добавляем ширину слайда

      if (this.curentSlide === this.slideLenght.length) {
        //если номер слайда равен количеству слайдов
        this.right.style.display = "none"; //скрываем правую кнопку
      } else if (this.curentSlide !== 1) {
        //если текущий слайд  !== 1 тогда
        this.left.style.display = ""; // показываем кнопку влево
      } else {
        //иначе
        this.right.style.display = ""; //показываем кнопку вправо
      }
    }
  }

  /*  Кнопка добавления тавара */
  onClick(event) {
    if (event.target.closest(".carousel__button")) {
      let customEvent = new CustomEvent("product-add", {
        bubbles: true,
        detail: this.slides[this.curentSlide - 1].id,
      });
      this.elem.dispatchEvent(customEvent);
    }
  }
  /*Добавляем HTML код */
  carousel(slides) {
    let carousel = document.createElement("div"); //создаем div
    carousel.classList.add("carousel"); // создаем класс carousel для созданного div
    carousel.insertAdjacentHTML(
      // вставляем HTML код вначало относительно опорного элемента
      "afterbegin",
      `
    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

  `
    );

    let divCarouselInner = document.createElement("div"); //создаем div
    divCarouselInner.classList.add("carousel__inner"); //добавляем к div класс carousel__inner

    for (const value of slides) {
      //при помощи цикла for of создаем html блоки для всех слайдов

      let divCarouselSlide = document.createElement("div"); //создаем div
      divCarouselSlide.classList.add("carousel__slide"); // добавляем к div класс carousel__slide
      divCarouselSlide.setAttribute("data-id", `${value.id}`); // изменяем значение атрибута div

      divCarouselSlide.insertAdjacentHTML(
        "afterbegin",
        `
      <img src="/assets/images/carousel/${
        value.image
      }" class="carousel__img" alt="slide"> 
      <div class="carousel__caption">
        <span class="carousel__price">€${value.price.toFixed(2)}</span>
        <div class="carousel__title">${value.name}</div>
        <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
      `
      );

      divCarouselInner.append(divCarouselSlide);
    }

    carousel.append(divCarouselInner);
    return carousel;
  }
}
