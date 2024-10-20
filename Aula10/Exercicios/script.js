const btnSetCookie = $("#btnSetCookie");
const btnDeleteCookie = $("#btnDeleteCookie");
const btnCheckCookie = $("#btnCheckCookie");

btnSetCookie.on('click', setCookie);
btnDeleteCookie.on('click', deleteCookie);
btnCheckCookie.on('click', checkCookie);

function setCookie() {
    let cookieName = $("#txbCookieName").val();
    let cookieValue = $("#txbCookieValue").val();
    let cookieExpirationDays = $("#numCookieExpirationDays").val();

    console.log("[CookieName:" + cookieName + "|CookieValue:" + cookieValue + "|CookieExpirationDays:" + cookieExpirationDays +"]");

    const d = new Date();
    d.setTime(d.getTime() + (cookieExpirationDays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    console.log(document.cookie);
  }
  
function getCookie() {
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

    let cookie = getCookie( );
    if (cookie != "") {
      alert("Cookie encontrado. [Nome:" + cookieName + "|Valor:" + cookie + "]");
    } else {
        alert("Cookie '" + cookieName + "' não foi encontrado");
    }
}

function deleteCookie() {
    let cookieName = $("#txbCookieName").val();

    let cookie = getCookie( );
    if (cookie != "") {
        document.cookie = cookieName + "=0;Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      alert("Cookie deletado");
    } else {
        alert("Cookie '" + cookieName + "' não foi encontrado");
    }
}