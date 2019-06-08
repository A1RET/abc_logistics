(function($){
$(window).on("load",function() {
  /*----Кастомный скроллбар для таблицы---*/
  $(".table-wrapper").mCustomScrollbar({
    axis:"x", ///Включение горизонтального скроллбара
    scrollInertia: 0, ///Отключение анимации
    theme: "my-theme" ///Стили
  });
});
})(jQuery);
