(function($){
  /*----Кастомный скроллбар для таблицы---*/
  $(".table-wrapper").mCustomScrollbar({
    axis:"x", ///Включение горизонтального скроллбара
    scrollInertia: 0, ///Отключение анимации
    theme: "my-theme" ///Стили
  });

  var toggleModal = function(evt) {
    event.preventDefault();
    $(".modal").toggle();
    $(".modal-overlay").toggle();
    event.stopPropagation();
  }
  $(".call-btn").click(toggleModal);
  $(".close-modal").click(toggleModal);
  $(".modal-overlay").click(toggleModal);

  $(".modal-content").load("call.html #content");
})(jQuery);
