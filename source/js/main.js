(function($){
  /*----Кастомный скроллбар для таблицы---*/
  $(".table-wrapper").mCustomScrollbar({
    axis:"x", ///Включение горизонтального скроллбара
    scrollInertia: 0, ///Отключение анимации
    theme: "my-theme" ///Стили
  });

  /*---Функция переключения элементов мобильного меню---*/
  var toggleMenu = function(evt) {
    event.preventDefault();
    $(".header-logo").toggleClass("header-logo-modal");
    $(".nav-site").toggleClass("nav-site-modal");
    $(".nav-btn").toggleClass("nav-btn-opened");
  };
  /*---Переключение меню по кнопке---*/
  $(".nav-btn").click(toggleMenu);

  /*---Выключение мобильного меню на десктопе---*/
  $(window).resize(function () {
    if($(window).width() >= 1020) {
    $(".header-logo").removeClass("header-logo-modal");
    $(".nav-site").removeClass("nav-site-modal");
    $(".nav-btn").removeClass("nav-btn-opened");
    };
  });

  /*---Функция переключения модального окана с формой---*/
  var toggleModal = function(evt) {
    event.preventDefault();
    $(".modal").toggle();
    $(".modal-overlay").toggle();
    event.stopPropagation();
  }

  /*---Переключение модального окна---*/
  /*---При клике на кнопку Заказать звонок---*/
  $(".call-btn").click(toggleModal);
  /*---При клике на кнопку Закрыть окно---*/
  $(".close-modal").click(toggleModal);
  /*---При клике на оверлей---*/
  $(".modal-overlay").click(toggleModal);
  /*---Загрузка формы в модальном окне---*/
  $(".modal-content").load("call.html #content");
})(jQuery);
