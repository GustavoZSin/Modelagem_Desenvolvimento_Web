const nameForm = $("#nameForm");
const welcomeContainer = $("#welcome");
const btnEnviarLocalStorage = $("#btnEnviarLocalStorage");
const btnLogout = $("#btnLogout");

const cookiesContainer = $("#cookiesContainer");
const btnSetCookie = $("#btnSetCookie");
const btnDeleteCookie = $("#btnDeleteCookie");
const btnCheckCookie = $("#btnCheckCookie");

nameForm.on('submit', (e) => {
  e.preventDefault();
  setLocalStorage();
  checkUser();
});
btnLogout.on('click', logout);

btnSetCookie.on('click', setCookie);
btnDeleteCookie.on('click', deleteCookie);
btnCheckCookie.on('click', checkCookie);

//#region localStorage
function checkUser() {
  const name = localStorage.getItem("name");
  if (name) {
    nameForm.hide();
    welcomeContainer.show();
    cookiesContainer.show();
    $("#userName").text(name);
  }
  else{
    nameForm.show();
    welcomeContainer.hide();
    cookiesContainer.hide();
  }
}

function setLocalStorage(){
  const nameInput = $("#name");
  localStorage.setItem("name", nameInput.val());
}

function logout(){
  localStorage.removeItem("name");
  checkUser();
}
//#endregion

//#region cookies
function setCookie() {
  let cookieName = $("#txbCookieName").val();
  let cookieValue = $("#txbCookieValue").val();
  let cookieExpirationDays = $("#numCookieExpirationDays").val();

  if(isValid(cookieName) || isValid(cookieValue) || isValid(cookieExpirationDays)){
    alert("Cookie não pode ser criado. Revise as informações para criação do cookie.");
    return;
  }

  const d = new Date();
  d.setTime(d.getTime() + (cookieExpirationDays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

  alert("Cookie criado");
}

function isValid(valor){
  return valor.trim().length === 0;
}

function getCookieValue() {
  let cookieName = $("#txbCookieName").val();

  let name = cookieName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let cookieName = $("#txbCookieName").val();

  let cookie = getCookieValue();
  if (cookie != "") {
    alert("Cookie encontrado. [Nome:" + cookieName + "|Valor:" + cookie + "]");
  } else {
    alert("Cookie '" + cookieName + "' não foi encontrado");
  }
}

function deleteCookie() {
  let cookieName = $("#txbCookieName").val();

  let cookieValue = getCookieValue();
  if (cookieValue != "") {
      document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      alert("Cookie deletado");
  } else {
      alert("Cookie '" + cookieName + "' não foi encontrado");
  }
}
//#endregion

checkUser();