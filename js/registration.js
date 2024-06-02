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

  // Обработчик формы
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получение данных из формы
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Регистрация пользователя
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Пользователь успешно зарегистрирован
        const user = userCredential.user;
        const userId = user.uid;

        // Сохранение данных пользователя в базе данных
        const userRef = database.ref('Agent').child(userId);
        userRef.set({
          surname: surname,
          name: name,
          phone: phone,
          email: email
        }).then(() => {
          console.log("Данные успешно отправлены!");
          // Очистка формы
          document.getElementById('registrationForm').reset();
          window.location.href = 'index.html'; // Перенаправляем на страницу входа
        }).catch((error) => {
          console.error("Ошибка при отправке данных:", error.message);
        });
      })
      .catch((error) => {
        console.error("Ошибка при регистрации:", error.message);
      });
  });

  // Функция для получения и вывода списка пользователей
  function fetchUsers() {
    const usersRef = database.ref('Agent');
    usersRef.on('value', (snapshot) => {
      const usersList = document.getElementById('usersList');
      usersList.innerHTML = ''; // Очищаем список перед новым выводом

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const li = document.createElement('li');
        li.textContent = `${childData.name} (${childSnapshot.key})`;
        usersList.appendChild(li);
      });
    }, (errorObject) => {
      console.error("Ошибка при получении данных:", errorObject.code);
    });
  }

  // Вызываем функцию для получения и вывода пользователей
  fetchUsers();


