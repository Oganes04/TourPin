 // Ваша конфигурация Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyAhkqDBWBJWtIiBZD7MuMsOYqmN5P8bpDM",
    authDomain: "tourpin-e4117.firebaseapp.com",
    databaseURL: "https://tourpin-e4117-default-rtdb.firebaseio.com",
    projectId: "tourpin-e4117",
    storageBucket: "tourpin-e4117.appspot.com",
    messagingSenderId: "889906319746",
    appId: "1:889906319746:android:a6bb409caaa22cf4613f9b"
  };

  // Инициализация Firebase
  firebase.initializeApp(firebaseConfig);

  // Получение ссылки на базу данных и аутентификацию
  const database = firebase.database();
  const auth = firebase.auth();


// Проверка сеанса входа
auth.onAuthStateChanged((user) => {
  if (user) {
    // Пользователь вошел в аккаунт
    console.log("Пользователь вошел в аккаунт:", user.email);
  } else {
    // Пользователь вышел из аккаунта или не вошел
    console.log("Пользователь вышел из аккаунта или не вошел");
    // Перенаправляем на страницу входа
    window.location.href = 'index.html';
  }
});



// Обработчик выхода из аккаунта
document.getElementById('exit__account').addEventListener('click', function() {
    // Выходим из аккаунта
    auth.signOut().then(() => {
      // Удаляем информацию о пользователе из локального хранилища
      localStorage.removeItem('user');
      // Перенаправляем на страницу входа
      window.location.href = 'index.html';
    }).catch((error) => {
      console.error("Ошибка при выходе из аккаунта:", error.message);
      alert("Ошибка при выходе из аккаунта: " + error.message);
    });
  });