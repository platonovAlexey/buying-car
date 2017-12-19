jQuery(function($){
	$("#phone").mask("+7(999)999-9999");
	$("#mileage").mask("999.999км");
	$("#engine").mask("9.9л");
	$("#form__name").mask("");
});

$('.header, .step-item').on('click', '.js-scroll', function(event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});


// $(document).ready(function(){// после загрузки DOM
// 	$('#form').submit(function(e){ // вешаем событие на отправку формы
// 		e.preventDefault(); // выключаем стандартное действие отправки
// 		var form = $(this); // запомним форму в переменной

// 		// добавим небольшую секцию проверки на заполненность
// 		var errors = false; // сначала ошибок нет
// 		form.find('.req').each(function(){ // пройдем по каждому полю с классом .req в форме
// 			$(this).removeClass('error'); // сначала уберем у него класс с ошибкой, на случай если он там есть
// 			if ($(this).val() == '') { // если оно пустое
// 				$(this).addClass('error'); // добавим к нему класс с ошибкой
// 				errors = true; // найдена ошибка
// 			}
// 		});
// 		if (errors) return false; // если есть ошибка то больше ничего не делаем

// 		var data = form.serialize(); // сериализуем данные формы в строку для отправки, обратите внимание что атрибуты name у полей полностью сопдают с нэймами у полей самой гугл формы

// 		$.ajax({ // инициализируем аякс
//             url: "https://docs.google.com/forms/d/e/1FAIpQLSeGbajw6Y_yPuU9cARe9C1By6Bajfmtbs7ci1wV1zylVoO7Iw/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
//             data: data, // данные  которые мы сериализовали
//             type: "POST", // постом
//             dataType: "xml", // ответ ждем в формате xml
//             beforeSend: function(){ // перед отправкой
//             	form.find('#form__btn').attr('disabled'); // отключим кнопку
//             },
//             statusCode: { // после того как пришел ответ от сервера
//                 0: function (){ // это успешный случай
//                 	form.html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>'); // сунем в форму сообщение что все ок
//                 },
//                 200: function (){ // это тоже успешный случай
//                 	form.html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>'); // сунем в форму сообщение что все ок
//                 }
//             }
// 		});
// 	});
// });

const popupClose = document.querySelector('.popup--cross');
const popup = document.querySelector('.popup--wrap');
const btn = document.getElementById('form__btn');
const form = document.getElementById('form');

const inputs = document.querySelectorAll('.form__input--check');
// const selects = document.querySelectorAll('.form__select');

const regEmail = /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/;
const regInput = /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z-_\.]{1,30}$/;

const email = document.querySelector('.form__email');
const phone = document.getElementById('phone');
const checkbox = document.getElementById('checkbox');
const inputName = document.querySelector('.form__input--name');
const allInputs = document.querySelector('.form__input');

popupClose.addEventListener("click", function() {
		document.querySelector('.popup--wrap').style.display = 'none';
		$('#form input[type="text"], #form input[type="password"], #form input[type="email"], #form textarea').val('');
		$('#checkbox').prop('checked', false);
		//$('.form__select').find('option').remove();
		//$('.form__select option').removeAttr('selected');
		//$('.form__select option:first').attr('selected', 'selected');
		$('.form__select').prop('selectedIndex', 0);
})

btn.addEventListener("click", function () {
		for (var i = 0; i < inputs.length; i++) {
				var input = inputs[i];
		}
		// for (var i = 0; i < selects.length; i++) {
		// 		var select = selects[i];
		// }
		if (checkbox.checked && input.value !== '' && phone.value !== '') {
			if (regEmail.test(email.value) == false && regInput.test(inputName.value) == false) {
            // console.log('Введите верные данные');
            alert('Пожалуйста, введите верные данные')
        }
        else {
            // console.log('TRUE');
        }
				popup.style.display = "block";
				// console.log('true');
				$.post("https://docs.google.com/forms/d/e/1FAIpQLSeGbajw6Y_yPuU9cARe9C1By6Bajfmtbs7ci1wV1zylVoO7Iw/formResponse", {
						"entry.1110572503": $('[name="entry.1110572503"]').val(),
						"entry.2057706783": $('[name="entry.2057706783"]').val(),
						"entry.280696008": $('[name="entry.280696008"]').val(),
						"entry.1524737095": $('[name="entry.1524737095"]').val(),
						"entry.1513399796": $('[name="entry.1513399796"]').val(),
						"entry.1581387337": $('[name="entry.1581387337"]').val(),
						"entry.2065248667": $('[name="entry.2065248667"]').val(),
						"entry.319264705": $('[name="entry.319264705"]').val(),
						"entry.12644915": $('[name="entry.12644915"]').val(),
						"entry.1325762942": $('[name="entry.1325762942"]').val()
				});
		}
		else if (checkbox.checked && input.value !== '' && phone.value !== '' ) {
				popup.style.display = "block";
				// console.log('true');
				$.post("https://docs.google.com/forms/d/e/1FAIpQLSeGbajw6Y_yPuU9cARe9C1By6Bajfmtbs7ci1wV1zylVoO7Iw/formResponse", {
						"entry.1110572503": $('[name="entry.1110572503"]').val(),
						"entry.2057706783": $('[name="entry.2057706783"]').val(),
						"entry.280696008": $('[name="entry.280696008"]').val(),
						"entry.1524737095": $('[name="entry.1524737095"]').val(),
						"entry.1513399796": $('[name="entry.1513399796"]').val(),
						"entry.1581387337": $('[name="entry.1581387337"]').val(),
						"entry.2065248667": $('[name="entry.2065248667"]').val(),
						"entry.319264705": $('[name="entry.319264705"]').val(),
						"entry.12644915": $('[name="entry.12644915"]').val(),
						"entry.1325762942": $('[name="entry.1325762942"]').val()
				});
		}
		else {
				alert('Пожалуйста, заполните форму');
				// console.log('false');
		}
})

// if(popup.style.display = "block") {
// 	input.value = '';
// }

// const btn = document.getElementById('form__btn');

// const inputs = document.querySelectorAll('.form__input');
// const checkbox = document.getElementById('checkbox');
// const select1 = document.querySelector('.form__select--name');
// const select2 = document.querySelector('.form__select--two');


// const email = document.querySelector('.form__email');
// const input1 = document.querySelector('.form__input--name');
// const input2 = document.querySelector('.form__input--two');


// const regEmail = /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/;
// const regInput = /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z-_\.]{1,30}$/;

// btn.addEventListener("click", function () {
//     for (var i = 0; i < inputs.length; i++) {
//         var input = inputs[i];
//     }

//     if (input.value !== '' && checkbox.checked && select1.selectedIndex >= 1 && select2.selectedIndex >= 1) {
//         if (regEmail.test(email.value) == false || regInput.test(input1.value) == false || regInput.test(input2.value) == false) {
//             // console.log('Введите верные данные');
//             alert('Пожалуйста, введите верные данные')
//         }
//         else {
//             console.log('TRUE');
//         }
//     }

//     else {
//         // console.log('Форма не заполнена');
//         alert('Пожалуйста, заполните форму')
//     }
// });