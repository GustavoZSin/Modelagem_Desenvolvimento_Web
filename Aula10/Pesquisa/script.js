$(document).ready(function () {
  // Local Storage
  const nameForm = $("#nameForm");
  const welcomeContainer = $("#welcome");
  const btnEnviarLocalStorage = $("#btnEnviarLocalStorage");
  const btnLogout = $("#btnLogout");

  // Cookies
  const cookiesContainer = $("#cookiesContainer");
  const btnSetCookie = $("#btnSetCookie");
  const btnDeleteCookie = $("#btnDeleteCookie");
  const btnCheckCookie = $("#btnCheckCookie");

  // Session Storage
  const sessionForm = $("#sessionForm");
  const sessionWelcome = $("#sessionWelcome");
  const btnEnviarSessionStorage = $("#btnEnviarSessionStorage");
  const btnSessionLogout = $("#btnSessionLogout");

  // IndexedDB
  const btnIndexedDB = $("#btnIndexedDB");
  const btnRetrieveIndexedDB = $("#btnRetrieveIndexedDB");
  const btnDeleteItem = $("#btnDeleteItem");
  const btnClearDB = $("#btnClearDB");
  let db;

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

  //#region localStorage
  nameForm.on('submit', (e) => {
    e.preventDefault();
    setLocalStorage();
    checkUser();
  });
  btnLogout.on('click', logout);

  btnSetCookie.on('click', (e) => {
    e.preventDefault();
    setCookie();
  });
  btnDeleteCookie.on('click', (e) => {
    e.preventDefault();
    deleteCookie();
  });
  btnCheckCookie.on('click', (e) => {
    e.preventDefault();
    checkCookie();
  });

  function checkUser() {
    const name = localStorage.getItem("name");
    if (name) {
      // Mostrar áreas que dependem de localStorage
      nameForm.hide();
      welcomeContainer.show();
      $("#userName").text(name);
      // Mostrar containers de cookies, session e IndexedDB
      cookiesContainer.show();
      sessionForm.show();
      sessionWelcome.show();
      $("#indexedDBSection").show();
  } else {
      nameForm.show();
      welcomeContainer.hide();
      cookiesContainer.hide();
      sessionForm.hide();
      sessionWelcome.hide();
      $("#indexedDBSection").hide();
  }
    cookiesContainer.show();
  }

  function setLocalStorage() {
    const nameInput = $("#name").val();
    localStorage.setItem("name", nameInput);
  }

  function logout() {
    localStorage.removeItem("name");
    checkUser();
  }
  //#endregion

  //#region sessionStorage
  sessionForm.on('submit', (e) => {
    e.preventDefault();
    setSessionStorage();
    checkSessionUser();
  });

  btnSessionLogout.on('click', sessionLogout);

  function checkSessionUser() {
    const name = sessionStorage.getItem("sessionName");
    if (name) {
      sessionForm.hide();
      sessionWelcome.show();
      $("#sessionUserName").text(name);
    } else {
      sessionForm.show();
      sessionWelcome.hide();
    }
  }

  function setSessionStorage() {
    const nameInput = $("#sessionName").val();
    sessionStorage.setItem("sessionName", nameInput);
  }

  function sessionLogout() {
    sessionStorage.removeItem("sessionName");
    checkSessionUser();
  }
  //#endregion


  function initIndexedDB() {
    let request = indexedDB.open('myDatabase', 1);

    request.onupgradeneeded = function (e) {
      let db = e.target.result;
      db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = function (e) {
      db = e.target.result;
    };

    request.onerror = function () {
      console.error('Erro ao abrir o IndexedDB');
    };
  }

  btnIndexedDB.on('click', (e) => {
    e.preventDefault();
    addIndexedDB();
  });

  function addIndexedDB() {
    const name = $("#indexedName").val();
    let transaction = db.transaction(['users'], 'readwrite');
    let store = transaction.objectStore('users');
    let request = store.add({ name });

    request.onsuccess = function () {
      alert('Nome salvo no IndexedDB');
    };

    request.onerror = function () {
      alert('Erro ao salvar no IndexedDB');
    };
  }


  btnRetrieveIndexedDB.on('click', (e) => {
    e.preventDefault();
    retrieveIndexedDB();
  });

  function retrieveIndexedDB() {
    let transaction = db.transaction(['users'], 'readonly');
    let store = transaction.objectStore('users');
    let request = store.getAll();

    request.onsuccess = function () {
      const output = request.result.map(user => `<p>ID: ${user.id} - Nome: ${user.name}</p>`).join('');
      $("#indexedDBOutput").html(output);
    };

    request.onerror = function () {
      alert('Erro ao recuperar dados do IndexedDB');
    };
  }


  // Função para deletar algum dado especidico da lista
  btnDeleteItem.on('click', (e) => {
    e.preventDefault();
    const deleteId = parseInt($("#deleteId").val());
    if (isNaN(deleteId)) {
      alert('Por favor, insira um ID válido para deletar');
    } else {
      deleteIndexedDBItem(deleteId);
    }
  });

  function deleteIndexedDBItem(id) {
    let transaction = db.transaction(['users'], 'readwrite');
    let store = transaction.objectStore('users');
    let request = store.delete(id);

    request.onsuccess = function () {
      alert(`Item com ID ${id} deletado com sucesso`);
      retrieveIndexedDB(); // Atualiza a lista de dados
    };

    request.onerror = function () {
      alert('Erro ao deletar o item');
    };
  }

  // Pra limpar toda a lista..
  btnClearDB.on('click', (e) => {
    e.preventDefault();
    clearIndexedDB();
  });

  function clearIndexedDB() {
    let transaction = db.transaction(['users'], 'readwrite');
    let store = transaction.objectStore('users');
    let request = store.clear();

    request.onsuccess = function () {
      alert('Todos os dados foram removidos do IndexedDB');
      $("#indexedDBOutput").html('');
    };

    request.onerror = function () {
      alert('Erro ao limpar o IndexedDB');
    };
  }

  initIndexedDB();
  //#endregion

  checkUser();
  checkSessionUser();
});
