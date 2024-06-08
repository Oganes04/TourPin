
var orderKey = new URLSearchParams(window.location.search).get('id');

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
 
  var db = firebase.database();
  
  db.ref('Order/' + orderKey).once('value').then(function(snapshot) {
      var childData = snapshot.val();
      var childKey = snapshot.key;
  
      // Создаем HTML-строку с данными заказа
      var orderDetailsHtml = `
      <div class="order__details-item">
      <div class="item-row">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#0F0C39" stroke-width="1.5"/>
              <path d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z" stroke="#0F0C39" stroke-width="1.5"/>
          </svg>
          <span>Турист:</span>
      </div>
      <p>Тимофеев Игнат</p>
  </div>


  <div class="order__details-item">
      <div class="item-row">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.91666 10.143C3.91666 5.244 7.82166 1.25 12.6667 1.25C17.5117 1.25 21.4167 5.244 21.4167 10.143C21.4167 12.508 20.7427 15.048 19.5507 17.242C18.3607 19.433 16.6227 21.337 14.4477 22.354C13.8902 22.615 13.2822 22.7503 12.6667 22.7503C12.0511 22.7503 11.4431 22.615 10.8857 22.354C8.71066 21.337 6.97266 19.434 5.78266 17.242C4.59066 15.048 3.91666 12.508 3.91666 10.143ZM12.6667 2.75C8.67466 2.75 5.41666 6.047 5.41666 10.143C5.41666 12.24 6.01966 14.535 7.10066 16.526C8.18266 18.519 9.71266 20.15 11.5207 20.995C11.8792 21.163 12.2702 21.25 12.6662 21.25C13.0621 21.25 13.4531 21.163 13.8117 20.995C15.6207 20.15 17.1507 18.519 18.2327 16.526C19.3137 14.536 19.9167 12.24 19.9167 10.143C19.9167 6.047 16.6587 2.75 12.6667 2.75ZM12.6667 7.75C12.3712 7.75 12.0786 7.8082 11.8056 7.92127C11.5326 8.03434 11.2846 8.20008 11.0757 8.40901C10.8667 8.61794 10.701 8.86598 10.5879 9.13896C10.4749 9.41194 10.4167 9.70453 10.4167 10C10.4167 10.2955 10.4749 10.5881 10.5879 10.861C10.701 11.134 10.8667 11.3821 11.0757 11.591C11.2846 11.7999 11.5326 11.9657 11.8056 12.0787C12.0786 12.1918 12.3712 12.25 12.6667 12.25C13.2634 12.25 13.8357 12.0129 14.2576 11.591C14.6796 11.169 14.9167 10.5967 14.9167 10C14.9167 9.40326 14.6796 8.83097 14.2576 8.40901C13.8357 7.98705 13.2634 7.75 12.6667 7.75ZM8.91666 10C8.91666 9.00544 9.31174 8.05161 10.015 7.34835C10.7183 6.64509 11.6721 6.25 12.6667 6.25C13.6612 6.25 14.615 6.64509 15.3183 7.34835C16.0216 8.05161 16.4167 9.00544 16.4167 10C16.4167 10.9946 16.0216 11.9484 15.3183 12.6517C14.615 13.3549 13.6612 13.75 12.6667 13.75C11.6721 13.75 10.7183 13.3549 10.015 12.6517C9.31174 11.9484 8.91666 10.9946 8.91666 10Z" fill="#0F0C39"/>
          </svg>
              
          <span>Город вылета:</span>
      </div>
      <p>${childData.city}</p>
  </div>



  <div class="order__details-item">
      <div class="item-row">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33337 5.75C7.92337 5.75 7.58337 5.41 7.58337 5V2C7.58337 1.59 7.92337 1.25 8.33337 1.25C8.74337 1.25 9.08337 1.59 9.08337 2V5C9.08337 5.41 8.74337 5.75 8.33337 5.75Z" fill="#0F0C39"/>
              <path d="M16.3334 5.75C15.9234 5.75 15.5834 5.41 15.5834 5V2C15.5834 1.59 15.9234 1.25 16.3334 1.25C16.7434 1.25 17.0834 1.59 17.0834 2V5C17.0834 5.41 16.7434 5.75 16.3334 5.75Z" fill="#0F0C39"/>
              <path d="M20.8334 9.83997H3.83337C3.42337 9.83997 3.08337 9.49997 3.08337 9.08997C3.08337 8.67997 3.42337 8.33997 3.83337 8.33997H20.8334C21.2434 8.33997 21.5834 8.67997 21.5834 9.08997C21.5834 9.49997 21.2434 9.83997 20.8334 9.83997Z" fill="#0F0C39"/>
              <path d="M16.3334 22.75H8.33337C4.68337 22.75 2.58337 20.65 2.58337 17V8.5C2.58337 4.85 4.68337 2.75 8.33337 2.75H16.3334C19.9834 2.75 22.0834 4.85 22.0834 8.5V17C22.0834 20.65 19.9834 22.75 16.3334 22.75ZM8.33337 4.25C5.47337 4.25 4.08337 5.64 4.08337 8.5V17C4.08337 19.86 5.47337 21.25 8.33337 21.25H16.3334C19.1934 21.25 20.5834 19.86 20.5834 17V8.5C20.5834 5.64 19.1934 4.25 16.3334 4.25H8.33337Z" fill="#0F0C39"/>
              <path d="M8.83337 14.5C8.70337 14.5 8.57337 14.47 8.45337 14.42C8.33337 14.37 8.22338 14.3 8.12338 14.21C8.03338 14.11 7.96336 14 7.91336 13.88C7.86336 13.76 7.83337 13.63 7.83337 13.5C7.83337 13.24 7.94338 12.98 8.12338 12.79C8.22338 12.7 8.33337 12.63 8.45337 12.58C8.63337 12.5 8.83338 12.48 9.03338 12.52C9.09338 12.53 9.15337 12.55 9.21337 12.58C9.27337 12.6 9.33337 12.63 9.39337 12.67C9.44337 12.71 9.49336 12.75 9.54336 12.79C9.58336 12.84 9.63336 12.89 9.66336 12.94C9.70336 13 9.73338 13.06 9.75338 13.12C9.78338 13.18 9.80338 13.24 9.81338 13.3C9.82338 13.37 9.83337 13.43 9.83337 13.5C9.83337 13.76 9.72336 14.02 9.54336 14.21C9.35336 14.39 9.09337 14.5 8.83337 14.5Z" fill="#0F0C39"/>
              <path d="M12.3334 14.5C12.0734 14.5 11.8134 14.39 11.6234 14.21C11.5834 14.16 11.5434 14.11 11.5034 14.06C11.4634 14 11.4334 13.94 11.4134 13.88C11.3834 13.82 11.3634 13.76 11.3534 13.7C11.3434 13.63 11.3334 13.57 11.3334 13.5C11.3334 13.37 11.3634 13.24 11.4134 13.12C11.4634 13 11.5334 12.89 11.6234 12.79C11.9034 12.51 12.3534 12.42 12.7134 12.58C12.8434 12.63 12.9434 12.7 13.0434 12.79C13.2234 12.98 13.3334 13.24 13.3334 13.5C13.3334 13.57 13.3234 13.63 13.3134 13.7C13.3034 13.76 13.2834 13.82 13.2534 13.88C13.2334 13.94 13.2034 14 13.1634 14.06C13.1234 14.11 13.0834 14.16 13.0434 14.21C12.9434 14.3 12.8434 14.37 12.7134 14.42C12.5934 14.47 12.4634 14.5 12.3334 14.5Z" fill="#0F0C39"/>
              <path d="M8.83337 18C8.70337 18 8.57337 17.97 8.45337 17.92C8.33337 17.87 8.22338 17.8 8.12338 17.71C8.03338 17.61 7.96336 17.51 7.91336 17.38C7.86336 17.26 7.83337 17.13 7.83337 17C7.83337 16.74 7.94338 16.48 8.12338 16.29C8.22338 16.2 8.33337 16.13 8.45337 16.08C8.82337 15.92 9.26336 16.01 9.54336 16.29C9.58336 16.34 9.63336 16.39 9.66336 16.44C9.70336 16.5 9.73338 16.56 9.75338 16.62C9.78338 16.68 9.80338 16.74 9.81338 16.81C9.82338 16.87 9.83337 16.94 9.83337 17C9.83337 17.26 9.72336 17.52 9.54336 17.71C9.35336 17.89 9.09337 18 8.83337 18Z" fill="#0F0C39"/>
          </svg>
              
          <span>Дата вылета:</span>
      </div>
      <p>${childData.data} <b>/</b> от ${childData.nightFirst} до ${childData.nightSecond} ноч.</p>
     
  </div>



  <div class="order__details-item">
      <div class="item-row">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#0F0C39"/>
              <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#0F0C39"/>
              <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" fill="#0F0C39"/>
              <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#0F0C39"/>
              <path d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z" fill="#0F0C39"/>
              <path d="M12 14.5C11.74 14.5 11.48 14.39 11.29 14.21C11.25 14.16 11.21 14.11 11.17 14.06C11.13 14 11.1 13.94 11.08 13.88C11.05 13.82 11.03 13.76 11.02 13.7C11.01 13.63 11 13.57 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.57 12.51 12.02 12.42 12.38 12.58C12.51 12.63 12.61 12.7 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.57 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.79 14.11 12.75 14.16 12.71 14.21C12.61 14.3 12.51 14.37 12.38 14.42C12.26 14.47 12.13 14.5 12 14.5Z" fill="#0F0C39"/>
              <path d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C8 17.87 7.89001 17.8 7.79001 17.71C7.70001 17.61 7.62999 17.51 7.57999 17.38C7.52999 17.26 7.5 17.13 7.5 17C7.5 16.74 7.61001 16.48 7.79001 16.29C7.89001 16.2 8 16.13 8.12 16.08C8.49 15.92 8.92999 16.01 9.20999 16.29C9.24999 16.34 9.29999 16.39 9.32999 16.44C9.36999 16.5 9.40001 16.56 9.42001 16.62C9.45001 16.68 9.47001 16.74 9.48001 16.81C9.49001 16.87 9.5 16.94 9.5 17C9.5 17.26 9.38999 17.52 9.20999 17.71C9.01999 17.89 8.76 18 8.5 18Z" fill="#0F0C39"/>
          </svg>
              
          <span>Дата составления:</span>
      </div>
      <p>31 мая 2024г.</p>
  </div>



  <div class="order__details-item">
      <div class="item-row">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2267 3.90998C21.8167 4.49998 21.8167 5.44998 21.2267 6.02998L17.7285 9.5281C17.4847 9.77188 17.3837 10.1241 17.4612 10.46L19.3326 18.5722C19.4098 18.9069 19.3098 19.2578 19.0678 19.5016L19.0099 19.5599C18.5331 20.0401 17.7271 19.918 17.4139 19.3182L14.7971 14.3073C14.4846 13.7088 13.681 13.5856 13.2036 14.063L10.6215 16.6452C10.3982 16.8684 10.2935 17.184 10.339 17.4965L10.5666 19.0581C10.6044 19.3171 10.5169 19.5787 10.3309 19.7629V19.7629C9.94241 20.1478 9.29371 20.0549 9.02888 19.5764L7.93557 17.601C7.84479 17.4369 7.70973 17.3017 7.54581 17.2108L5.56034 16.1091C5.08067 15.843 4.98637 15.1931 5.37062 14.8016V14.8016C5.55662 14.6121 5.82204 14.523 6.08471 14.5618L7.66892 14.7963C7.98204 14.8427 8.29861 14.738 8.52243 14.5142L11.0768 11.9599C11.5532 11.4834 11.4317 10.6816 10.8354 10.3678L5.8124 7.72449C5.21477 7.41 5.09428 6.60578 5.57349 6.12995L5.63503 6.06884C5.87878 5.8268 6.2297 5.72682 6.56442 5.80403L14.6766 7.6754C15.0126 7.7529 15.3647 7.65188 15.6085 7.4081L19.1067 3.90998C19.6667 3.32998 20.6667 3.32998 21.2267 3.90998Z" stroke="#0F0C39" stroke-width="1.5"/>
          </svg>
              
          <span>Направление поездки:</span>
      </div>
      <p>${childData.country}</p>
  </div>



  <div class="order__details-item">
      <div class="item-row">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.49297 11.62C9.46297 11.62 9.44298 11.62 9.41297 11.62C9.36297 11.61 9.29297 11.61 9.23297 11.62C6.33297 11.53 4.14297 9.25 4.14297 6.44C4.14297 3.58 6.47298 1.25 9.33297 1.25C12.193 1.25 14.523 3.58 14.523 6.44C14.513 9.25 12.313 11.53 9.52297 11.62C9.51297 11.62 9.50297 11.62 9.49297 11.62ZM9.33297 2.75C7.30297 2.75 5.64297 4.41 5.64297 6.44C5.64297 8.44 7.20297 10.05 9.19297 10.12C9.25297 10.11 9.38298 10.11 9.51298 10.12C11.473 10.03 13.013 8.42 13.023 6.44C13.023 4.41 11.363 2.75 9.33297 2.75Z" fill="#0F0C39"/>
              <path d="M16.873 11.75C16.843 11.75 16.813 11.75 16.783 11.74C16.373 11.78 15.953 11.49 15.913 11.08C15.873 10.67 16.123 10.3 16.533 10.25C16.653 10.24 16.783 10.24 16.893 10.24C18.353 10.16 19.493 8.96 19.493 7.49C19.493 5.97 18.263 4.74 16.743 4.74C16.333 4.75 15.993 4.41 15.993 4C15.993 3.59 16.333 3.25 16.743 3.25C19.083 3.25 20.993 5.16 20.993 7.5C20.993 9.8 19.193 11.66 16.903 11.75C16.893 11.75 16.883 11.75 16.873 11.75Z" fill="#0F0C39"/>
              <path d="M9.50298 22.55C7.54298 22.55 5.57298 22.05 4.08298 21.05C2.69298 20.13 1.93298 18.87 1.93298 17.5C1.93298 16.13 2.69298 14.86 4.08298 13.93C7.08298 11.94 11.943 11.94 14.923 13.93C16.303 14.85 17.073 16.11 17.073 17.48C17.073 18.85 16.313 20.12 14.923 21.05C13.423 22.05 11.463 22.55 9.50298 22.55ZM4.91298 15.19C3.95298 15.83 3.43298 16.65 3.43298 17.51C3.43298 18.36 3.96298 19.18 4.91298 19.81C7.40298 21.48 11.603 21.48 14.093 19.81C15.053 19.17 15.573 18.35 15.573 17.49C15.573 16.64 15.043 15.82 14.093 15.19C11.603 13.53 7.40298 13.53 4.91298 15.19Z" fill="#0F0C39"/>
              <path d="M18.673 20.75C18.323 20.75 18.013 20.51 17.943 20.15C17.863 19.74 18.123 19.35 18.523 19.26C19.153 19.13 19.733 18.88 20.183 18.53C20.753 18.1 21.063 17.56 21.063 16.99C21.063 16.42 20.753 15.88 20.193 15.46C19.753 15.12 19.203 14.88 18.553 14.73C18.153 14.64 17.893 14.24 17.983 13.83C18.073 13.43 18.473 13.17 18.883 13.26C19.743 13.45 20.493 13.79 21.103 14.26C22.033 14.96 22.563 15.95 22.563 16.99C22.563 18.03 22.023 19.02 21.093 19.73C20.473 20.21 19.693 20.56 18.833 20.73C18.773 20.75 18.723 20.75 18.673 20.75Z" fill="#0F0C39"/>
          </svg>
              
          <span>Количество пасажиров:</span>
      </div>
      <p>${childData.tourists_count} чел.</p>
  </div>
      `;
  
      // Находим элемент, куда нужно вставить данные
      var detailsContainer = document.querySelector('.order__details-items');
      if (detailsContainer) {
          // Вставляем созданный HTML в контейнер
          detailsContainer.innerHTML += orderDetailsHtml;
      } else {
          console.error("Элемент с классом.order__details-items не найден");
      }
  });
  

  db.ref('Order/' + orderKey).once('value').then(function(snapshot) {
    var childData = snapshot.val();
    var childKey = snapshot.key;

    // Создаем HTML-строку с данными заказа
    var orderDetailsHtml = `
    <div class="order__offer-inner">
    <div class="order__offer-col order__offer-col--first">
        <p>Фотография отеля:</p>
        <div class="custom__image-container">
            <label id="add-img-label" for="add-single-img">
                <svg width="84" height="76" viewBox="0 0 84 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54 42H30M42 30V54" stroke="#C6C5CA" stroke-width="4" stroke-linecap="round"/>
                    <path d="M33.112 73.9999H50.888C63.372 73.9999 69.616 73.9999 74.1 71.0599C76.0348 69.7918 77.7011 68.1554 79.004 66.2439C82 61.8439 82 55.7119 82 43.4559C82 31.1959 82 25.0679 79.004 20.6679C77.7012 18.7564 76.0348 17.1199 74.1 15.8519C71.22 13.9599 67.612 13.2839 62.088 13.0439C59.452 13.0439 57.184 11.0839 56.668 8.54394C56.2737 6.68342 55.2491 5.01609 53.7674 3.82375C52.2857 2.6314 50.4378 1.98718 48.536 1.99994H35.464C31.512 1.99994 28.108 4.73994 27.332 8.54394C26.816 11.0839 24.548 13.0439 21.912 13.0439C16.392 13.2839 12.784 13.9639 9.9 15.8519C7.96648 17.1202 6.3015 18.7566 5 20.6679C2 25.0679 2 31.1959 2 43.4559C2 55.7119 2 61.8399 4.996 66.2439C6.292 68.1479 7.956 69.7839 9.9 71.0599C14.384 73.9999 20.628 73.9999 33.112 73.9999Z" stroke="#C6C5CA" stroke-width="4"/>
                    <path d="M70 30H66" stroke="#C6C5CA" stroke-width="4" stroke-linecap="round"/>
                </svg>
                    
                <span>Загрузите фотографию отеля</span>
            </label>
            <input type="file" name="hotel_img" id="add-single-img" accept="image/jpeg,image/png" />
        </div>
        <p>Название отеля</p>
        <input type="text" id="hotel_name" name="hotel_name" placeholder="Название отеля" required>
        <p>Описание отеля</p>
        <textarea name="textarea" name="hotel_desc" id="hotel_desc" cols="30" rows="10"></textarea>
    </div>

    <div class="order__offer-col">
        <p>Направление тура:</p>
        <div class="custom__input city__input">
            <div class="custom__input-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25C16.845 1.25 20.75 5.244 20.75 10.143C20.75 12.508 20.076 15.048 18.884 17.242C17.694 19.433 15.956 21.337 13.781 22.354C13.2235 22.615 12.6155 22.7503 12 22.7503C11.3845 22.7503 10.7765 22.615 10.219 22.354C8.044 21.337 6.306 19.434 5.116 17.242C3.924 15.048 3.25 12.508 3.25 10.143ZM12 2.75C8.008 2.75 4.75 6.047 4.75 10.143C4.75 12.24 5.353 14.535 6.434 16.526C7.516 18.519 9.046 20.15 10.854 20.995C11.2125 21.163 11.6036 21.25 11.9995 21.25C12.3954 21.25 12.7865 21.163 13.145 20.995C14.954 20.15 16.484 18.519 17.566 16.526C18.647 14.536 19.25 12.24 19.25 10.143C19.25 6.047 15.992 2.75 12 2.75ZM12 7.75C11.7045 7.75 11.4119 7.8082 11.139 7.92127C10.866 8.03434 10.6179 8.20008 10.409 8.40901C10.2001 8.61794 10.0343 8.86598 9.92127 9.13896C9.8082 9.41194 9.75 9.70453 9.75 10C9.75 10.2955 9.8082 10.5881 9.92127 10.861C10.0343 11.134 10.2001 11.3821 10.409 11.591C10.6179 11.7999 10.866 11.9657 11.139 12.0787C11.4119 12.1918 11.7045 12.25 12 12.25C12.5967 12.25 13.169 12.0129 13.591 11.591C14.0129 11.169 14.25 10.5967 14.25 10C14.25 9.40326 14.0129 8.83097 13.591 8.40901C13.169 7.98705 12.5967 7.75 12 7.75ZM8.25 10C8.25 9.00544 8.64509 8.05161 9.34835 7.34835C10.0516 6.64509 11.0054 6.25 12 6.25C12.9946 6.25 13.9484 6.64509 14.6517 7.34835C15.3549 8.05161 15.75 9.00544 15.75 10C15.75 10.9946 15.3549 11.9484 14.6517 12.6517C13.9484 13.3549 12.9946 13.75 12 13.75C11.0054 13.75 10.0516 13.3549 9.34835 12.6517C8.64509 11.9484 8.25 10.9946 8.25 10Z" fill="white"/>
                </svg>
                <span>${childData.country}</span>   
            </div>
            <input type="text" id="city_tour" name="city_tour" placeholder="Введите город тура" required> 
        </div>

        <p>Даты тура:</p>
        <div class="order__offer-row">
            
            <div class="custom__input">
                <input type="text" id="data_start" name="data_start" placeholder="Выбрать дату вылета" required> 
                <div class="custom__input-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="white"/>
                        <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="white"/>
                        <path d="M20.5 9.84009H3.5C3.09 9.84009 2.75 9.50009 2.75 9.09009C2.75 8.68009 3.09 8.34009 3.5 8.34009H20.5C20.91 8.34009 21.25 8.68009 21.25 9.09009C21.25 9.50009 20.91 9.84009 20.5 9.84009Z" fill="white"/>
                        <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="white"/>
                        <path d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z" fill="white"/>
                        <path d="M12 14.5001C11.74 14.5001 11.48 14.3901 11.29 14.2101C11.25 14.1601 11.21 14.1101 11.17 14.0601C11.13 14.0001 11.1 13.9401 11.08 13.8801C11.05 13.8201 11.03 13.7601 11.02 13.7001C11.01 13.6301 11 13.5701 11 13.5001C11 13.3701 11.03 13.2401 11.08 13.1201C11.13 13.0001 11.2 12.8901 11.29 12.7901C11.57 12.5101 12.02 12.4201 12.38 12.5801C12.51 12.6301 12.61 12.7001 12.71 12.7901C12.89 12.9801 13 13.2401 13 13.5001C13 13.5701 12.99 13.6301 12.98 13.7001C12.97 13.7601 12.95 13.8201 12.92 13.8801C12.9 13.9401 12.87 14.0001 12.83 14.0601C12.79 14.1101 12.75 14.1601 12.71 14.2101C12.61 14.3001 12.51 14.3701 12.38 14.4201C12.26 14.4701 12.13 14.5001 12 14.5001Z" fill="white"/>
                        <path d="M8.5 18.0001C8.37 18.0001 8.24 17.9701 8.12 17.9201C8 17.8701 7.89001 17.8001 7.79001 17.7101C7.70001 17.6101 7.62999 17.5101 7.57999 17.3801C7.52999 17.2601 7.5 17.1301 7.5 17.0001C7.5 16.7401 7.61001 16.4801 7.79001 16.2901C7.89001 16.2001 8 16.1301 8.12 16.0801C8.49 15.9201 8.92999 16.0101 9.20999 16.2901C9.24999 16.3401 9.29999 16.3901 9.32999 16.4401C9.36999 16.5001 9.40001 16.5601 9.42001 16.6201C9.45001 16.6801 9.47001 16.7401 9.48001 16.8101C9.49001 16.8701 9.5 16.9401 9.5 17.0001C9.5 17.2601 9.38999 17.5201 9.20999 17.7101C9.01999 17.8901 8.76 18.0001 8.5 18.0001Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div class="custom__input">
                <input type="text" id="data_end" name="data_end" placeholder="Выбрать дату прилета" required> 
                <div class="custom__input-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="white"/>
                        <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="white"/>
                        <path d="M20.5 9.84009H3.5C3.09 9.84009 2.75 9.50009 2.75 9.09009C2.75 8.68009 3.09 8.34009 3.5 8.34009H20.5C20.91 8.34009 21.25 8.68009 21.25 9.09009C21.25 9.50009 20.91 9.84009 20.5 9.84009Z" fill="white"/>
                        <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="white"/>
                        <path d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C8 14.37 7.89001 14.3 7.79001 14.21C7.70001 14.11 7.62999 14 7.57999 13.88C7.52999 13.76 7.5 13.63 7.5 13.5C7.5 13.24 7.61001 12.98 7.79001 12.79C7.89001 12.7 8 12.63 8.12 12.58C8.3 12.5 8.50001 12.48 8.70001 12.52C8.76001 12.53 8.82 12.55 8.88 12.58C8.94 12.6 9 12.63 9.06 12.67C9.11 12.71 9.15999 12.75 9.20999 12.79C9.24999 12.84 9.29999 12.89 9.32999 12.94C9.36999 13 9.40001 13.06 9.42001 13.12C9.45001 13.18 9.47001 13.24 9.48001 13.3C9.49001 13.37 9.5 13.43 9.5 13.5C9.5 13.76 9.38999 14.02 9.20999 14.21C9.01999 14.39 8.76 14.5 8.5 14.5Z" fill="white"/>
                        <path d="M12 14.5001C11.74 14.5001 11.48 14.3901 11.29 14.2101C11.25 14.1601 11.21 14.1101 11.17 14.0601C11.13 14.0001 11.1 13.9401 11.08 13.8801C11.05 13.8201 11.03 13.7601 11.02 13.7001C11.01 13.6301 11 13.5701 11 13.5001C11 13.3701 11.03 13.2401 11.08 13.1201C11.13 13.0001 11.2 12.8901 11.29 12.7901C11.57 12.5101 12.02 12.4201 12.38 12.5801C12.51 12.6301 12.61 12.7001 12.71 12.7901C12.89 12.9801 13 13.2401 13 13.5001C13 13.5701 12.99 13.6301 12.98 13.7001C12.97 13.7601 12.95 13.8201 12.92 13.8801C12.9 13.9401 12.87 14.0001 12.83 14.0601C12.79 14.1101 12.75 14.1601 12.71 14.2101C12.61 14.3001 12.51 14.3701 12.38 14.4201C12.26 14.4701 12.13 14.5001 12 14.5001Z" fill="white"/>
                        <path d="M8.5 18.0001C8.37 18.0001 8.24 17.9701 8.12 17.9201C8 17.8701 7.89001 17.8001 7.79001 17.7101C7.70001 17.6101 7.62999 17.5101 7.57999 17.3801C7.52999 17.2601 7.5 17.1301 7.5 17.0001C7.5 16.7401 7.61001 16.4801 7.79001 16.2901C7.89001 16.2001 8 16.1301 8.12 16.0801C8.49 15.9201 8.92999 16.0101 9.20999 16.2901C9.24999 16.3401 9.29999 16.3901 9.32999 16.4401C9.36999 16.5001 9.40001 16.5601 9.42001 16.6201C9.45001 16.6801 9.47001 16.7401 9.48001 16.8101C9.49001 16.8701 9.5 16.9401 9.5 17.0001C9.5 17.2601 9.38999 17.5201 9.20999 17.7101C9.01999 17.8901 8.76 18.0001 8.5 18.0001Z" fill="white"/>
                    </svg>
                </div>
            </div>  


        </div>
        
        <div class="order__offer-row">

            <div class="appointment__dropdown dropdown__link-selector">
                <div class="selector__link dropdown__link-selector">
                    <p class="selected__direction">Выбрать длительность тура</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 15.7071C12.5195 15.8946 12.2652 15.9999 12 15.9999C11.7348 15.9999 11.4805 15.8946 11.293 15.7071L5.63601 10.0501C5.5405 9.95785 5.46431 9.84751 5.41191 9.7255C5.3595 9.6035 5.33191 9.47228 5.33076 9.3395C5.3296 9.20672 5.3549 9.07504 5.40519 8.95215C5.45547 8.82925 5.52972 8.7176 5.62361 8.6237C5.71751 8.52981 5.82916 8.45556 5.95205 8.40528C6.07495 8.355 6.20663 8.32969 6.33941 8.33085C6.47219 8.332 6.60341 8.35959 6.72541 8.412C6.84742 8.46441 6.95776 8.54059 7.05001 8.6361L12 13.5861L16.95 8.6361C17.1386 8.45394 17.3912 8.35315 17.6534 8.35542C17.9156 8.3577 18.1664 8.46287 18.3518 8.64828C18.5372 8.83369 18.6424 9.0845 18.6447 9.3467C18.647 9.60889 18.5462 9.8615 18.364 10.0501L12.707 15.7071Z" fill="#741ADE"/>
                    </svg>
                              
                </div>
                <div class="dropdown__content-selector" id="dynamicDropdownContent" style="box-shadow: 0px 0px 17px 11px rgba(0,0,0,0.1);">
            
                </div>
            </div>

            <div class="custom__input-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.1596 11.62C9.1296 11.62 9.1096 11.62 9.0796 11.62C9.0296 11.61 8.9596 11.61 8.8996 11.62C5.9996 11.53 3.8096 9.25 3.8096 6.44C3.8096 3.58 6.1396 1.25 8.9996 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.1896 11.62C9.1796 11.62 9.1696 11.62 9.1596 11.62ZM8.9996 2.75C6.9696 2.75 5.3096 4.41 5.3096 6.44C5.3096 8.44 6.8696 10.05 8.8596 10.12C8.9196 10.11 9.0496 10.11 9.1796 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.9996 2.75Z" fill="white"/>
                    <path d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z" fill="white"/>
                    <path d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z" fill="white"/>
                    <path d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z" fill="white"/>
                </svg>
                <span>${childData.tourists_count} чел.</span>    
            </div>
             
        </div>

        <p>Цена тура</p>

        <div class="order__offer-row">
            <div class="custom__input">
                <input type="text" id="price" name="price" placeholder="Введите цену тура" required> 
                <div class="custom__input-block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36181 14.3004C5.13015 14.5205 5 14.8191 5 15.1304C5 15.4418 5.13015 15.7404 5.36181 15.9605C5.59347 16.1807 5.90767 16.3043 6.23529 16.3043H6.64706V19.8261C6.64706 20.1374 6.77721 20.436 7.00887 20.6562C7.24053 20.8763 7.55473 21 7.88235 21C8.20997 21 8.52417 20.8763 8.75584 20.6562C8.9875 20.436 9.11765 20.1374 9.11765 19.8261V16.3043H11.1765C11.5041 16.3043 11.8183 16.1807 12.05 15.9605C12.2816 15.7404 12.4118 15.4418 12.4118 15.1304C12.4118 14.8191 12.2816 14.5205 12.05 14.3004C11.8183 14.0802 11.5041 13.9565 11.1765 13.9565H9.11765V13.1739H13.6471C15.0667 13.1739 16.4283 12.638 17.4322 11.684C18.436 10.73 19 9.4361 19 8.08696C19 6.73781 18.436 5.44392 17.4322 4.48993C16.4283 3.53595 15.0667 3 13.6471 3H9.79459C9.55577 3 9.30706 3 9.07812 3.03443C8.47729 3.12507 7.92204 3.39404 7.49187 3.80284C7.0617 4.21163 6.77867 4.73929 6.68329 5.31026C6.64706 5.52783 6.64706 5.76417 6.64706 5.9927V10.8261H6.23529C5.90767 10.8261 5.59347 10.9498 5.36181 11.1699C5.13015 11.3901 5 11.6887 5 12C5 12.3113 5.13015 12.6099 5.36181 12.8301C5.59347 13.0502 5.90767 13.1739 6.23529 13.1739H6.64706V13.9565H6.23529C5.90767 13.9565 5.59347 14.0802 5.36181 14.3004ZM9.11765 10.8261H13.6471C14.4115 10.8261 15.1446 10.5375 15.6852 10.0238C16.2257 9.51013 16.5294 8.81342 16.5294 8.08696C16.5294 7.36049 16.2257 6.66378 15.6852 6.1501C15.1446 5.63641 14.4115 5.34783 13.6471 5.34783H9.85718C9.7254 5.34756 9.59362 5.34913 9.46188 5.35252C9.37696 5.36583 9.29856 5.40409 9.23771 5.46192C9.17685 5.51975 9.13659 5.59426 9.12259 5.67496L9.11929 5.74226L9.11765 6.05217V10.8261Z" fill="white"/>
                    </svg>    
                </div>
            </div>
            <button class="application__item-button" id="form__button">Отправить предложение</button> 
        </div>

    </div>
</div>
    `;

    // Находим элемент, куда нужно вставить данные
    var detailsContainer = document.querySelector('.order__offer');
    if (detailsContainer) {
        // Вставляем созданный HTML в контейнер
        detailsContainer.innerHTML += orderDetailsHtml;
        const imgInputHelper = document.getElementById("add-single-img");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".custom__image-container");
const imgFiles = [];

const addImgHandler = () => {
    const file = imgInputHelper.files[0];
    if (!file) return;
    // Generate img preview
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newImg = document.createElement("img");
      newImg.src = reader.result;
      imgContainer.insertBefore(newImg, imgInputHelperLabel);
      imgInputHelperLabel.parentNode.removeChild(imgInputHelperLabel);
    };
    // Store img file
    imgFiles.push(file);
    // Reset image input
    imgInputHelper.value = "";
    return;
  };
  imgInputHelper.addEventListener("change", addImgHandler);
  

  var database = firebase.database();
  var storageRef = firebase.storage().ref();
  
  $('#form__button').on('click', function() {
      console.log('Отправлена заявка');
      // Собираем значения из input полей
      var hotelImg = $('#add-single-img')[0].files[0];
      var hotelName = $('#hotel_name').val();
      var hotelDesc = $('#hotel_desc').val();
      var cityTour = $('#city_tour').val();
      var dataStart = $('#data_start').val();
      var dataEnd = $('#data_end').val();
      var price = $('#price').val();
      var city = childData.city;
      var country = childData.country;
      var order_ID = new URLSearchParams(window.location.search).get('id');
      var night = $('.selected__direction').text();
      var fileNameWithExtension = hotelImg.name; 
      // Создаем путь для хранения файла в Firebase Storage
      var imageRef = storageRef.child(fileNameWithExtension);
  
      // Загружаем файл в Firebase Storage
      imageRef.put(hotelImg).then(function(snapshot) {
          // Получаем URL-адрес загруженного файла после завершения загрузки
          snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
  
              // Путь к новой записи в базе данных
              var newProposalRef = database.ref('Proposal');
  
              // Создаем объект с данными для сохранения, включая URL-адрес файла
              var proposalData = {
                  city: city,
                  country: country,
                  night: night,
                  order_ID: order_ID,
                  hotel_name: hotelName,
                  hotel_desc: hotelDesc,
                  city_tour: cityTour,
                  data_end: dataEnd,
                  data_start: dataStart,
                  price: price,
                  hotel_img: downloadURL // Сохраняем URL-адрес файла вместо самого файла
              };
  
              // Сохраняем данные в Firebase
              newProposalRef.push(proposalData);
          }).catch(function(error) {
              console.error("Ошибка при получении URL-адреса файла:", error);
          });
      }).catch(function(error) {
          console.error("Ошибка при загрузке файла:", error);
      });
  });
  


  var dynamicDropdownContent = '';
  var minNight = Math.min(childData.nightFirst, childData.nightSecond);
  var maxNight = Math.max(childData.nightFirst, childData.nightSecond);

  for (var i = minNight; i <= maxNight; i++) {
      dynamicDropdownContent += `<p>${i} ноч.</p>`;
  }

  // Вставляем сгенерированные элементы в dropdown
  document.getElementById('dynamicDropdownContent').innerHTML = dynamicDropdownContent;

  


  $(".dropdown__content-selector p").click(function() {
    var direction = $(this).attr('data-direction');
    $(".doctor__item").hide(); // Скрываем все карточки врачей
    $(".doctor__item[data-specialization='" + direction + "']").show(); // Показываем только те карточки, которые соответствуют выбранному направлению
});

$(".dropdown__link-selector").click(function(event) {
    event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
    $(".dropdown__content-selector").slideToggle("fast");
    $('.dropdown__link-selector  svg').toggleClass("rotate_row");
   });
   
   $(document).click(function() {
    $(".dropdown__content-selector").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
    $('.dropdown__link-selector  svg').removeClass("rotate_row");
   });
  
   $(".dropdown__link").click(function(event) {
    event.stopPropagation(); // Предотвращает закрытие выпадающего списка при клике на ссылку
    $(".dropdown__content").slideToggle("fast");
    $('.dropdown__link  svg').toggleClass("rotate_row");
   });
   
   $(document).click(function() {
    $(".dropdown__content").slideUp("fast"); // Закрывает выпадающий список при клике вне его области
    $('.dropdown__link  svg').removeClass("rotate_row");
   });
  
   $('.dropdown__content-selector p').click(function() {
    // Get the text of the clicked p element
    var selectedText = $(this).text();
    
    // Set the text of the dropdown__link-selector to the text of the clicked p element
    $('.selected__direction').text(selectedText);




    
  });
    } else {
        console.error("Элемент с классом.order__details-items не найден");
    }
});






$(document).ready(function() {

});