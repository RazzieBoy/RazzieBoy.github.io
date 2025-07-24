function goTo() {
  var inputValue = document.getElementById('input').value
  if (inputValue === "Hell" ||inputValue === "hell" ) {
    window.location = 'https://HellHole.rasmusnordberg2.repl.co';
  }
  if (inputValue === "Projects" ||inputValue === "projects") {
    window.location = '/dungeon.html';
  }
  if (inputValue === "Phone" ||inputValue === "phone") {
    window.location = '/phone/phone.html';
  }
  if (inputValue === "Story" ||inputValue === "story") {
    window.location = 'https://docs.google.com/document/d/1Tg6YNkX3W-QoCLRfZDASUulvu-HtHWTxqMG0KDDiL8I/edit?usp=sharingl';
  }
}

document.querySelector("#input").onkeydown = e => {
  if (e.key == "Enter") {
    goTo();
  }
}