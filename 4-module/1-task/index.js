function makeFriendsList(friends) {
  const $newUl = document.createElement("ul");

  friends.forEach(function (item, i, arr) {
    const $newLi = document.createElement("li");
    $newLi.innerHTML = item.firstName + " " + item.lastName;
    $newUl.appendChild($newLi);
  });
  return $newUl;
}
