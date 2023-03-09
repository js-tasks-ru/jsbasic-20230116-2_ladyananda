function toggleText() {
  let clickBtn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text"); // Точку надо заменить на решетку

  clickBtn.addEventListener("click", handler);

  function handler() {
    text.hidden = !text.hidden;
  }
}
