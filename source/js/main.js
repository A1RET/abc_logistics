(function($){
  function validateForm(formClass) {
    var form = $(formClass);
    var formItems = form.find('.form-input-required');
    var formBtn = form.find('.form-button');

    $(form).find("#phone").mask("+7 (999) 999-99-99");

    function checkValue() {
      if ($(this).val() == 0) {
        $(this).parent().addClass("form-item-required");
      } else {
        $(this).parent().removeClass("form-item-required");
      };
    }

    for (var i = 0; i < formItems.length; i++) {
      var formItem = $(formItems[i]);

      formItem.blur(checkValue);

      formItem.click(function(event) {
        $(this).parent().removeClass("form-item-required");
      });
    };

    function checkInput(){
      form.find('.form-input-required').each(function(){
        if($(this).val() != ''){
        // Если поле не пустое удаляем клаасс-указание
          $(this).removeClass('empty_field');
        } else {
        // Если поле пустое добавляем ласс-указание
          $(this).addClass('empty_field');
        }
      });
    };

    // Проверка заполненности полей
    setInterval(function(){
      checkInput();
      var sizeEmpty = form.find('.empty_field');

      if(sizeEmpty.length > 0) {
        if(formBtn.prop('disabled', false)){
          formBtn.prop('disabled', true);
          return false
        } else {
          formBtn.prop('disabled', true);
        }
      } else {
        formBtn.prop('disabled', false);
      }
    },500);

    // Событие клика по кнопке отправить
    formBtn.click(function(){
      if($(this).prop('disabled', true)){
    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
      formItems.each(checkValue);
        return false
      } else {
    // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  };

  validateForm(".contact-form");
  validateForm(".call-form");

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
    validateForm(".modal .call-form");
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
