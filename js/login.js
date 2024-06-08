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
const auth = firebase.auth();

// Обработчик формы входа
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получение данных из формы
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Вход пользователя
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Пользователь успешно вошел
      const user = userCredential.user;
      // Сохраняем информацию о пользователе в локальном хранилище браузера
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'main.html'; // Перенаправляем на главную страницу
    })
    .catch((error) => {
      console.error("Ошибка при входе:", error.message);
      // alert("Ошибка при входе: " + error.message);
    });
});
