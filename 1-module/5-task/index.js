const strConst = "Вот, что мне хотелось бы сказать на эту тему:";
const maxlengthConst = 20;

function truncate(str, maxlength) {
  return str.length > maxlength ? str.substring(0, maxlength - 1) + "…" : str;
}

truncate(strConst, maxlengthConst);
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
