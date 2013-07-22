jQuery.noConflict();

// Определение воспроизводимого видео
// Задаётся видео ID на YouTube и массив видео-файлов
// В дальнейшем в зависимости от способа воспроизведения видео
// будет воспроизводится либо видео с YouTube, либо из видео-файла
var videos = {
	en: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	},
	es: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-Spanish-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-Spanish-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	},
	ru: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	},
	it: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	},
	cn: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	},
	tw: {
		video1: { 
			videoId: "uuqGzMd808c",
			sources: [ 
				{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video2: { 
			videoId: "vYdjHhDGAUI",
			sources: [ 
				{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		},
		video3: { 
			videoId: "BJUN4LrXi88#!",
			sources: [ 
				{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
     			{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
			]
		}
	}
};

// Кнопки, отображаемые на странице с видео при остановке вопроизведения видео
// Классы кнопок:
//		button
//		button-small
//		button-mini
//		button-small-mini
var videoButtons = {
	en: {
		videoStop: { buttonClass:"button-small-mini", text:"Done" },
		videoContact: { buttonClass:"button-mini", text:"Have Questions ?" }
	},
	es: {
		videoStop: { buttonClass:"button-small-mini", text:"Hecho" },
		videoContact: { buttonClass:"button-mini", text:"¿Tiene preguntas?" }
	},
	ru: {
		videoStop: { buttonClass:"button-small-mini", text:"Стоп" },
		videoContact: { buttonClass:"button-mini", text:"У Вас вопросы ?" }
	},
	it: {
		videoStop: { buttonClass:"button-small-mini", text:"Fatto" },
		videoContact: { buttonClass:"button-mini", text:"Sono domande ?" }
	},
	cn: {
		videoStop: { buttonClass:"button-small-mini", text:"完成" },
		videoContact: { buttonClass:"button-mini", text:"有疑问吗？" }
	},
	tw: {
		videoStop: { buttonClass:"button-small-mini", text:"完成" },
		videoContact: { buttonClass:"button-mini", text:"有疑問嗎？" }
	}
};

// Кнопки, отображаемые на странице меню
// Классы кнопок:
//		button
//		button-small
//		button-mini
//		button-small-mini
var menuButtons = {
	en: {
		copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell. All rights reserved." },
		callUs: { buttonClass:"button", text:"Call Us" },
		mainmenuToggle: { buttonClass:"button", text:"Menu" },
		replay: { buttonClass:"button", text:"Replay" },
		play: { buttonClass:"button", text:"Play" },
		prev: { buttonClass:"button-small", text:"Prev" },
		next: { buttonClass:"button-small", text:"Next" },
		home: { buttonClass:"button", text:"Home" },
		contact: { buttonClass:"button", text:"Have Questions ?" },
		save: { buttonClass:"button", text:"Submit" }
	},
	es: {
		copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell. All rights reserved." },
		callUs: { buttonClass:"button", text:"Call Us" },
		mainmenuToggle: { buttonClass:"button", text:"Menu" },
		replay: { buttonClass:"button", text:"Replay" },
		play: { buttonClass:"button", text:"Play" },
		prev: { buttonClass:"button-small", text:"Prev" },
		next: { buttonClass:"button-small", text:"Next" },
		home: { buttonClass:"button", text:"Página principal" },
		contact: { buttonClass:"button", text:"¿Tiene preguntas?" },
		save: { buttonClass:"button", text:"Enviar" }
	},
	ru: {
		copyright: { buttonClass:"button", text:"Право копирования © Cryo-Cell. Все права защищены." },
		callUs: { buttonClass:"button", text:"Звонок" },
		mainmenuToggle: { buttonClass:"button", text:"Меню" },
		replay: { buttonClass:"button", text:"Повторить" },
		play: { buttonClass:"button", text:"Воспроизвести" },
		prev: { buttonClass:"button-small", text:"Пред" },
		next: { buttonClass:"button-small", text:"След" },
		home: { buttonClass:"button", text:"Главная" },
		contact: { buttonClass:"button", text:"Вопросы ?" },
		save: { buttonClass:"button", text:"Отправить" }
	},
	it: {
		copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell. All rights reserved." },
		callUs: { buttonClass:"button", text:"Call Us" },
		mainmenuToggle: { buttonClass:"button", text:"Menu" },
		replay: { buttonClass:"button", text:"Replay" },
		play: { buttonClass:"button", text:"Play" },
		prev: { buttonClass:"button-small", text:"Prev" },
		next: { buttonClass:"button-small", text:"Next" },
		home: { buttonClass:"button", text:"Homepage" },
		contact: { buttonClass:"button", text:"Sono domande ?" },
		save: { buttonClass:"button", text:"Invia" }
	},
	cn: {
		copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell. All rights reserved." },
		callUs: { buttonClass:"button", text:"Call Us" },
		mainmenuToggle: { buttonClass:"button", text:"Menu" },
		replay: { buttonClass:"button", text:"重播" },
		play: { buttonClass:"button", text:"Play" },
		prev: { buttonClass:"button-small", text:"Prev" },
		next: { buttonClass:"button-small", text:"Next" },
		home: { buttonClass:"button", text:"首頁" },
		contact: { buttonClass:"button", text:"有疑问吗？ " },
		save: { buttonClass:"button", text:"提交" }
	},
	tw: {
		copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell. All rights reserved." },
		callUs: { buttonClass:"button", text:"Call Us" },
		mainmenuToggle: { buttonClass:"button", text:"Menu" },
		replay: { buttonClass:"button", text:"重播" },
		play: { buttonClass:"button", text:"Play" },
		prev: { buttonClass:"button-small", text:"Prev" },
		next: { buttonClass:"button-small", text:"Next" },
		home: { buttonClass:"button", text:"首頁" },
		contact: { buttonClass:"button", text:"有疑問嗎？" },
		save: { buttonClass:"button", text:"提交" }
	}
};

var mainmenuLinks = {
	en: [
		"Why should you store your baby’s cord blood?",
		"How can cord blood save lives?",
		"Why choose Cryo-Cell?",
		"Contact Us"
	],
	es: [
		"¿Por qué debe almacenar la sangre del cordón umbilical de su bebé?",
		"¿Cómo puede la sangre del cordón umbilical salvar vidas?",
		"¿Por qué elegir Cryo-Cell?",
		"Contact Us"
	],
	ru: [
		"Почему надо сохранить пуповинную кровь?",
		"Как пуповинная кровь спасает жизнь?",
		"Почему выбирают Cryo-Cell?",
		"Свяжитесь с нами"
	],
	it: [
		"Why should you store your baby’s cord blood?",
		"How can cord blood save lives?",
		"Why choose Cryo-Cell?",
		"Contact Us"
	],
	cn: [
		"为什么您应该储存宝宝的脐带血？",
		"脐带血如何能挽救生命",
		"为何选择Cryo-Cell?",
		"Contact Us"
	],
	tw: [
		"為什麼您應該儲存寶寶的臍帶血？",
		"臍帶血如何能挽救生命？",
		"為何選擇Cryo-Cell？",
		"Contact Us"
	]
};

// Заголовки и субтитлы отображаемые на страницах
// Задаются в виде html кода
var pages = {
	en: {
		page1: { 
			title: "Why should you store<br />your baby’s cord blood?",
			subtitle: "Watch an animated video on cord blood stem cells."
		},
		page2: {
			title: "How can cord blood save lives?",
			subtitle: "Watch a 3 minute video on one family’s story."
		},
		page3: { 
			title: "Why choose <span nowrap>Cryo-Cell</span>?",
			subtitle: "Watch a video on the world’s leading cord blood company."
		},
		page4: { 
			title: "Thank you",
			subtitle: "We hope you found these videos informative.<br />To learn more about our services, please fill in the contact form below."
		},
		page5: { 
			title: "Thank you",
			subtitle: "Your request has been sent.<br />One of our client services representatives will contact you shortly."
		}
	},
	es: {
		page1: { 
			title: "¿Por qué debe almacenar la sangre del cordón umbilical de su bebé?",
			subtitle: "Vea un breve vídeo animado sobre las células madre del cordón umbilical."
		},
		page2: {
			title: "¿Cómo puede la sangre del cordón umbilical salvar vidas?",
			subtitle: "Vea el siguiente video de 3 minutos sobre la historia de una familia."
		},
		page3: { 
			title: "¿Por qué elegir Cryo-Cell?",
			subtitle: "Vea un breve video sobre la compañía líder en la preservación de la sangre del cordón umbilical."
		},
		page4: { 
			title: "Gracias",
			subtitle: "Esperamos que haya encontrado estos breves videos muy informativos.<br />Para obtener más información acerca de nuestros servicios, por favor complete el siguiente formulario de contacto."
		},
		page5: { 
			title: "Gracias",
			subtitle: "Your request has been sent.<br />One of our client services representatives will contact you shortly."
		}
	},
	ru: {
		page1: { 
			title: "Почему Вы должны сохранить пуповинную кровь Вашего ребенка?",
			subtitle: "Смотрите анимационное видео о стволовых клетках в пуповинной крови."
		},
		page2: {
			title: "Как пуповинная кровь<br />спасает жизнь?",
			subtitle: "Смотрите 3-х минутное видео истории одной семьи."
		},
		page3: { 
			title: "Почему выбирают <span nowrap>Cryo-Cell</span>?",
			subtitle: "Смотрите видео о ведущей компании в мире, сохраняющей пуповинную кровь."
		},
		page4: { 
			title: "Спасибо",
			subtitle: "Мы надеемся, что вы нашли это видео полезным.<br />Чтобы узнать больше о наших услугах, пожалуйста, заполните форму ниже."
		},
		page5: { 
			title: "Спасибо",
			subtitle: "Ваше сообщение было отправлено.<br />Наш представитель по обслуживанию клиентов свяжется с Вами в ближайшее время."
		}
	},
	it: {
		page1: { 
			title: "Why should you store<br />your baby’s cord blood?",
			subtitle: "Watch an animated video on cord blood stem cells."
		},
		page2: {
			title: "How can cord blood save lives?",
			subtitle: "Watch a 3 minute video on one family’s story."
		},
		page3: { 
			title: "Perché scegliere <span nowrap>Cryo-Cell</span>?",
			subtitle: "Watch a video on the world’s leading cord blood company."
		},
		page4: { 
			title: "Grazie",
			subtitle: "We hope you found these videos informative.<br />To learn more about our services, please fill in the contact form below."
		},
		page5: { 
			title: "Grazie",
			subtitle: "Your request has been sent.<br />One of our client services representatives will contact you shortly."
		}
	},
	cn: {
		page1: { 
			title: "为什么您应该储存宝宝的脐带血？",
			subtitle: "请观赏一个有关脐带血干细胞的动画短视频。"
		},
		page2: {
			title: "脐带血如何能挽救生命",
			subtitle: "请观赏一个3分钟的视频：一个家庭的故事。"
		},
		page3: { 
			title: "为何选择Cryo-Cell?",
			subtitle: "请观赏一个短视频，为您介绍领先世界的脐带血公司。"
		},
		page4: { 
			title: "谢谢",
			subtitle: "希望这些短视频为您提供了翔实的资讯。<br />若想更了解我们的服务，请填写下面的联系表格。"
		},
		page5: { 
			title: "谢谢",
			subtitle: "Your request has been sent.<br />One of our client services representatives will contact you shortly."
		}
	},
	tw: {
		page1: { 
			title: "為什麼您應該儲存寶寶的臍帶血？",
			subtitle: "請觀賞一個有關臍帶血幹細胞的卡通短視頻。"
		},
		page2: {
			title: "臍帶血如何能挽救生命？",
			subtitle: "請觀賞一個3分鐘的視頻：一個家庭的故事。"
		},
		page3: { 
			title: "為何選擇Cryo-Cell？",
			subtitle: "請觀賞一個短視頻，為您介紹領先世界的臍帶血公司"
		},
		page4: { 
			title: "謝謝",
			subtitle: "希望這些短視頻為您提供了翔實的資訊。<br />若想更了解我們的服務，請填寫下面的聯繫表格。"
		},
		page5: { 
			title: "謝謝",
			subtitle: "Your request has been sent.<br />One of our client services representatives will contact you shortly."
		}
	}
};

// Названия полей формы обратной связи
// Задаются в виде обычного текста
var formLabels = {
	en: {
		first_name: "First Name",
		last_name: "Last Name",
		due_date: "Expected Delivery Date",
		phone_number: "Phone Number",
		email: "Email",
		doctor: "Doctor"
	},
	es: {
		first_name: "Nombre",
		last_name: "Apellido",
		due_date: "Fecha estimada de parto",
		phone_number: "Teléfono",
		email: "Correo electrónico",
		doctor: "Médico"
	},
	ru: {
		first_name: "Имя",
		last_name: "Фамилия",
		due_date: "Ожидаемая дата",
		phone_number: "Номер телефона",
		email: "Email",
		doctor: "Доктор"
	},
	it: {
		first_name: "Nome",
		last_name: "Cognome",
		due_date: "Data di arrivo",
		phone_number: "Numero di telefono",
		email: "Email",
		doctor: "Doctor"
	},
	cn: {
		first_name: "名",
		last_name: "姓",
		due_date: "预产期",
		phone_number: "电话号码",
		email: "电子邮件",
		doctor: "醫生"
	},
	tw: {
		first_name: "名",
		last_name: "姓",
		due_date: "預產期",
		phone_number: "電話號碼",
		email: "電子郵件",
		doctor: "醫生"
	}
};

// Заголовок и вопрос в форме, открываемой при отсутствии параметров в адресной строке
// Заголовок задаётся в виде html кода
// Вопрос задаётся в виде обычного теста
var surveys = {
	en: {
		title: "<strong>Welcome to the Cord Blood<br />Education Program</strong>",
		label: "Please enter below the name of the Ob/Gyn practice or doctor where you heard about these videos:"
	},
	es: {
		title: "<strong>Bienvenido al programa de Educación de la Sangre del Cordón Umbilical</strong>",
		label: "Por favor de ingresar el nombre del  consultorio o de su médico obstetra / ginecólogo:"
	},
	ru: {
		title: "<strong>Добро пожаловать в программу обучения<br />по сохранению пуповинной крови</strong>",
		label: "Пожалуйста, укажите генекологическую практику или доктора, где или от которого Вы узнали об этом видео:"
	},
	it: {
		title: "<strong>Welcome to the Cord Blood<br />Education Program</strong>",
		label: "Please enter below the name of the Ob/Gyn practice or doctor where you heard about these videos:"
	},
	cn: {
		title: "<strong>欢迎观赏这个脐带血教育节目</strong>",
		label: "请在下面输入您的妇产科医生或诊所的名称:"
	},
	tw: {
		title: "<strong>歡迎觀賞這個臍帶血教育節目</strong>",
		label: "請在下面輸入您的婦產科醫生或診所的名稱:"
	}
};

// Список поддерживаемых языков
var languages = {
	en: "English",
	es: "Español",
	ru: "Русский",
	cn: "简体中文",
	tw: "繁體中文"
};

var YtPlayers = new Array();

var currentIndex = 0;
var currentLanguage = "en";

var url = false;

function currentCallbackForm() { return jQuery("#callbackForm",currentMenuPage()); }
function currentMenuPage() { return jQuery(".menu-page." + currentLanguage).get(currentIndex); }
function currentVideoPage() { return jQuery(".video-page." + currentLanguage).get(currentIndex); }
function currentPlayer() { return jQuery(currentVideoPage()).find("video").get(0); }
function currentYtPlayer() { return YtPlayers[jQuery(".ytplayer").index(jQuery(currentVideoPage()).find(".ytplayer").get(0))]; }
function currentTubePlayer() { return jQuery(currentVideoPage()).find(".tubeplayer").get(0); }
function nextIndex(index) { index++ ; if(index >= 4) index = 3; return index; }
function prevIndex(index) { index-- ; if(index < 0) index = 0; return index; }
function showCurrentMenu() { jQuery.mobile.changePage("#"+jQuery(currentMenuPage()).attr("id")); }
function hideCurrentMenu() { }
function showCurrentVideo() { }
function hideCurrentVideo() { }
function showBuffering() { jQuery("#buffering").hide(); }
function hideBuffering() { jQuery("#buffering").hide(); }
function hideMainMenu() { jQuery('.mainmenu').hide(); }
function showSurveyDialog() { jQuery.mobile.changePage("#survey-"+currentLanguage); } 
function hideSurveyDialog() { }
function clearForm() { 
	  jQuery("input[name*='expected_delivery_date']").val("");
	  jQuery("input[name*='due_date']").val("");
	  jQuery("input[name*='phone']").val("");
	  jQuery("input[name*='first_name']").val("");
	  jQuery("input[name*='last_name']").val("");
	  jQuery("input[name*='mail']").val("");
	  jQuery("input").removeClass("error");
	  jQuery(".error").remove();
	  jQuery(".ErrorLabel").remove();
	  jQuery(".EditingFormErrorLabel").remove();
}

function playCurrentPlayer() {
	if (currentIndex < 3) {
		if (jQuery(currentVideoPage()).find(".tubeplayer").length>0) {
			try {
				var tubeplayer = currentTubePlayer();
				jQuery(tubeplayer).tubeplayer("play");
			}
			catch(e) {
				debugWrite("tubeplayer:",e);
			}
		}
		else if (jQuery(currentVideoPage()).find(".ytplayer").length>0) {
			try {
				var ytplayer = currentYtPlayer();
				ytplayer.playVideo();
			}
			catch(e) {
				debugWrite("youtube player api:",e);
			}
		}
		else {
			try {
				var player = currentPlayer();
				player.play();
			}
			catch(e) {
				debugWrite("video html5:",e);
			}
		}
	}
}

function pauseCurrentPlayer() {
	if (currentIndex < 3) {
		if (jQuery(currentVideoPage()).find(".tubeplayer").length>0) {
			try {
				var tubeplayer = currentTubePlayer();
				jQuery(tubeplayer).tubeplayer("pause");
			}
			catch(e) {
				debugWrite("tubeplayer:",e);
			}
		}
		else if (jQuery(currentVideoPage()).find(".ytplayer").length>0) {
			try {
				var ytplayer = currentYtPlayer();
				ytplayer.pauseVideo();
			}
			catch(e) {
				debugWrite("youtube player api:",e);
			}
		}
		else {
			try {
				var player = currentPlayer();
				player.pause();
			}
			catch(e) {
				debugWrite("video html5:",e);
			}
		}
	}
}


function getID() {
	if(typeof kioskpro_id === 'undefined') {
      return "kioskpro_id is not set";
    } else {
      var iPadID = kioskpro_id.toString().split(" ").join("");
      if (!iPadID || iPadID == "") {
           return "iPadID is not set";
      } else {
           return iPadID;
      }
 	}
}


/*  
function onYouTubePlayerAPIReady() {
	debugWrite("YouTube Player API is ready!");
	jQuery(".ytplayer").each(function(i,e) {
		var ytplayer;
		ytplayer = new YT.Player(jQuery(this).attr("id"), {
          	width: '280',
			height: '200',
		  	allowfullscreen: 'true',
		  	videoId: jQuery(this).attr("videoId"),
		  	events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange,
				'onError': onPlayerError
		  	}
		});
		YtPlayers.push(ytplayer);
	});
}

function onPlayerError(event) {
	debugWrite(event.data);
}
  
function onPlayerReady(event) {
  	hideBuffering();
}

function onPlayerStateChange(event) {
//	debugWrite("Player's new state: " + event.data);
	switch(event.data) {
	case YT.PlayerState.BUFFERING:
//		showBuffering();
		break;
	case YT.PlayerState.PAUSED:
	  	hideBuffering();
		break;
	case YT.PlayerState.ENDED:
	  	hideMainMenu();
	  	hideCurrentVideo();
	  	hideBuffering();
	  	currentIndex = nextIndex(currentIndex);
	  	showCurrentMenu();
	  	break;
	case YT.PlayerState.PLAYING:
	  	hideBuffering();
	  	break;
	}
}
*/

// Событие инициализации tubeplayer	  	  
jQuery.tubeplayer.defaults.afterReady = function($player){
  	hideBuffering();
}

// Процедура кросс-доменной отправки содержимого формы ввода
// Параметр - отправляемая форма ввода
function crossDomainSubmit(item) {
	// Add the iframe with a unique name
	var uniqueString = "crossDomainForm-"+jQuery("iframe").length;
	var iframe = document.createElement("iframe");
	document.body.appendChild(iframe);
	iframe.style.display = "none";
	try {
	  iframe.contentWindow.name = uniqueString;
	} catch(e) {
	  debugWrite('iframe.contentWindow.name error',e);
	}
	debugWrite('iframe.contentWindow.name',iframe.contentWindow.name);
  
	// construct a form with hidden inputs, targeting the iframe
	var form = document.createElement("form");
	form.target = iframe.contentWindow.name;
	debugWrite('form.target',form.target);
	debugWrite('item.attr("action")',item.attr("action"));
	form.action = item.attr("action");
	debugWrite('form.action',form.action);
	debugWrite('item.attr("method")',item.attr("method"));
	form.method = item.attr("method");
	debugWrite('form.method',form.method);
  
	// repeat for each parameter
	item.find("input").each(function(index, element) {
		var input = document.createElement("input");
		input.type = "hidden";
		debugWrite("element.name",element.name);
		input.name = element.name;
		debugWrite("input.name",input.name);
		debugWrite("element.value",element.value);
		input.value = element.value;
		debugWrite("input.value",input.value);
		form.appendChild(input);
	});
  
	document.body.appendChild(form);
	form.submit();
}


function urldecode (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Philip Peterson
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: AJ
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +      input by: travc
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Lars Fischer
  // +      input by: Ratheous
  // +   improved by: Orlando
  // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
  // +      bugfixed by: Rob
  // +      input by: e-mike
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
  // %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
  // %        note 2: pages served as UTF-8
  // *     example 1: urldecode('Kevin+van+Zonneveld%21');
  // *     returns 1: 'Kevin van Zonneveld!'
  // *     example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
  // *     returns 2: 'http://kevin.vanzonneveld.net/'
  // *     example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
  // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
  return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

// Функция вывода сообщений трассировки
// Обработка try-catch требуется для совместимости с IE
function debugWrite(a,b) {
	try {
		console.log(a,b);
	} catch (e) {
	}
}

function createHeader(lang) {
	var header = jQuery(".header-template").clone();
	header.removeClass("header-template");
	header.attr("data-role","header");
	header.addClass(lang);
	return header;
}

function createFooter(lang) {
	var footer = jQuery(".footer-template").clone();
	footer.removeClass("footer-template");
	footer.attr("data-role","footer");
	footer.addClass(lang);
	return footer;
}

function createMainmenu(lang) {
	var mainmenu = jQuery(".mainmenu-template").clone();
	mainmenu.removeClass("mainmenu-template").addClass("mainmenu");
	mainmenu.find("ul").attr("data-role","listview");
	mainmenu.addClass(lang);
	mainmenu.attr("id","mainmenu");
	
	mainmenu.find(".mainmenu-link").each(function(index,element) {
		jQuery(element).attr("href",jQuery(element).attr("href")+"-"+lang);
		jQuery(element).text(mainmenuLinks[lang][index]);
	});
	
	mainmenu.find(".mainmenu-link").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
        clearForm();
		currentIndex = 0;
		while(currentIndex < 3
		&& ("#"+jQuery(jQuery(".menu-page." + currentLanguage).get(currentIndex)).attr("id")) != jQuery(this).attr("href")) {
			currentIndex++;
		}
		showCurrentMenu();
	});

	return mainmenu;	
}

// Создание формы вопроса на указанном языке
function createSurveyForm(lang) {
	debugWrite("createSurveyForm","start");
	debugWrite("lang",lang);
	var form = jQuery(".survey-form-template").clone();
	form.appendTo(jQuery("body")).removeClass("survey-form-template").addClass("survey-form");
	form.addClass(lang);
//	form.prepend(createHeader(lang));
//	form.append(createFooter(lang));
//	form.find("div[data-role='content']").prepend(createMainmenu(lang));
	form.find("#title").html(surveys[lang].title);
	form.find("#label").text(surveys[lang].label);
	form.attr("id","survey-"+lang);
	form.attr("data-role","page");
	
	form.find("form").submit(function (event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		jQuery("input[name*='doctor']").val(jQuery("input[name*='answer']").val()); 
		hideSurveyDialog();
		showCurrentMenu();
		return false;
	});
	
	debugWrite("createSurveyForm","end");
}


function createMenuVideoPage(lang, pageId) {
	debugWrite("createMenuVideoPage","start");
	debugWrite("pageId",pageId);
	debugWrite("lang",lang);
	var page = jQuery(".menuvideo-page-template#"+pageId).clone();
	page.appendTo(jQuery("body")).removeClass("menuvideo-page-template").addClass("menu-page").addClass("video-page");
	page.addClass(lang);
	page.prepend(createHeader(lang));
	page.append(createFooter(lang));
	page.find("div[data-role='content']").prepend(createMainmenu(lang));
	page.find("#title").html(pages[lang][pageId].title);
	page.find("#subtitle").html(pages[lang][pageId].subtitle);
	page.attr("id",pageId+"-"+lang);
	page.attr("data-role","page");
	
	for(var lblFor in formLabels[lang]) {
		page.find("label[for='"+lblFor+"']").text(formLabels[lang][lblFor]);
	}
	
	for(var btn in menuButtons[lang]) {
		page.find("."+btn+"").text(menuButtons[lang][btn].text);
	}

	var languageSelector = "<img src='intl/flag-"+lang+".png' width='12px' height='12px' /><img src='images/none.png' width='12px' height='12px' />"+languages[lang];
	page.find(".languageSelector").html(languageSelector);
	
	for(var vid in videos[lang]) {
		page.find("#"+vid).attr("videoId",videos[lang][vid].videoId);
	}
	
	page.find("video").each(function(i,e) {
		var player = this;
			
//		player.onvclick = function(e){
//			this.pause();
//		};
		player.addEventListener("ended", function(e){
			jQuery(this).fullScreen(false);
			hideMainMenu();
			hideCurrentVideo();
			hideBuffering();
			currentIndex = nextIndex(currentIndex);
			showCurrentMenu();
		}, false);
		player.addEventListener("playing", function(e){
			hideBuffering();
			jQuery(this).fullScreen(true);
//			hideCurrentMenu();
//			showCurrentVideo();
		}, false);
//		player.addEventListener("pause", function(e){
//			hideCurrentVideo();
//			hideBuffering();
//			showCurrentMenu();
//		}, false);
		player.addEventListener("waiting", function(e){
			showBuffering();
		}, false);
		player.addEventListener("error", function(e){
			debugWrite("an error in playback.");
		}, false);
	});

	page.find(".tubeplayer").each(function(i,e) {
		debugWrite('tubeplayer', 'init');
		jQuery(this).tubeplayer({
			width: 280, // the width of the player
			height: 200, // the height of the player
			allowFullScreen: "true", // true by default, allow user to go full screen
			initialVideo: jQuery(this).attr("videoId"), // the video that is loaded into the player
			start: 0, 
			preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
			showControls: 1, // whether the player should have the controls visible, 0 or 1
			showRelated: 0, // show the related videos when the player ends, 0 or 1 
			autoPlay: false, // whether the player should autoplay the video, 0 or 1
			autoHide: true, 
			theme: "dark", // possible options: "dark" or "light"
			color: "red", // possible options: "red" or "white"
			showinfo: false, // if you want the player to include details about the video
			modestbranding: true, // specify to include/exclude the YouTube watermark
			// the location to the swfobject import for the flash player, default to Google's CDN
			wmode: "transparent", // note: transparent maintains z-index, but disables GPU acceleration
			swfobjectURL: "http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
			loadSWFObject: true, // if you include swfobject, set to false
			// HTML5 specific attrs
			iframed: true, // iframed can be: true, false; if true, but not supported, degrades to flash
			onPlay: function(id){}, // after the play method is called
			onPause: function(){}, // after the pause method is called
			onStop: function(){}, // after the player is stopped
			onSeek: function(time){}, // after the video has been seeked to a defined point
			onMute: function(){}, // after the player is muted
			onUnMute: function(){}, // after the player is unmuted
			onPlayerUnstarted: function(){
				hideBuffering();
			}, // when the player returns a state of unstarted
			onPlayerEnded: function(){
				hideMainMenu();
				hideCurrentVideo();
				hideBuffering();
				currentIndex = nextIndex(currentIndex);
				showCurrentMenu();
			}, // when the player returns a state of ended
			onPlayerPlaying: function(){
				hideBuffering();
			}, //when the player returns a state of playing
			onPlayerPaused: function(){
				hideBuffering();
			}, // when the player returns a state of paused
			onPlayerCued: function(){
				hideBuffering();
			}, // when the player returns a state of cued
			onPlayerBuffering: function(){
				showBuffering();
			}, // when the player returns a state of buffering
			onErrorNotFound: function(){
				debugWrite("a video cant be found");
			}, // if a video cant be found
			onErrorNotEmbeddable: function(){
				debugWrite("a video isnt embeddable");
			}, // if a video isnt embeddable
			onErrorInvalidParameter: function(){
				debugWrite("we've got an invalid param");
			} // if we've got an invalid param
		});
	});
	
	// Проверка встроенной поддержки для <input type="date">
	// Если нет встроенной поддержки для <input type="date">,
	// то заменяем <input type="date"> на <input type="text">
	// и обрабатываем поле с помощью mobiscroll
	if (!Modernizr.inputtypes.date) {
		page.find("input[type='date']").attr("type","text").mobiscroll().date(jQuery.extend({theme:"jqm"},jQuery.mobiscroll.i18n[lang]));
	}
	
	debugWrite("Установка маски ввода (999) 999-9999","start");
	try {
		page.find("input[name*='phone']").mask("(999) 999-9999");
	} catch (e) {
		debugWrite('page.find("input[name*=\'phone\']").mask("(999) 999-9999") error',e);
	}
	debugWrite("Установка маски ввода (999) 999-9999","end");

	debugWrite("Установка валидации форм","start");
	try {
		page.find("form").validate();
	} catch (e) {
		debugWrite('page.find("form").validate() error',e);
	}
	debugWrite("Установка валидации форм","end");

	page.find("input").change(function(event) {
		jQuery("input[name='"+jQuery(this).attr("name")+"']").val(jQuery(this).val());
	});
	
	page.find(".save").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		var isValid = false;
		debugWrite("Валидация формы обратной связи","start");
		try {
			var form = currentCallbackForm();
			debugWrite('form',form.html());
			isValid = form.valid();
		} catch (e) {
			debugWrite('form.valid() error',e);
			debugWrite("Ручная валидация формы обратной связи","start");
			jQuery("input").removeClass("error");
			jQuery(".error").remove();
			jQuery(".ErrorLabel").remove();
			jQuery(".EditingFormErrorLabel").remove();
			isValid = true;
			var form = currentCallbackForm();
			form.find("input.required").each(function(index, element) {
				debugWrite("Валидация элемента",element.getAttribute("name"));
                if(!element.value) {
					debugWrite("Элемент не валидный",element);
					isValid = false;
					debugWrite("Добавление сообщения об ошибке","start");
					//$(element).addClass("error");
 					var error = document.createElement("label");
					error.setAttribute("for",element.getAttribute("name"));
					error.className = 'error';
					element.parentNode.appendChild(error);
					debugWrite("Добавление сообщения об ошибке","end");
				}
            });
			debugWrite("Ручная валидация формы обратной связи","end");
		}
		debugWrite("Валидация формы обратной связи","end");
		if (isValid) {
			debugWrite("Отправка формы обратной связи","start");
			try {
				var form = currentCallbackForm();
				form.ajaxSubmit({
					timeout:   3000,
					dataFilter: function( data, type ) {
						debugWrite("data:",data);
						debugWrite("type:",type);
					},
					success:    function() { 
						hideCurrentMenu();
						currentIndex = 4;
						clearForm();
						showCurrentMenu();
					},
					beforeSend:		function(xhr, settings) {
						debugWrite("xhr:",xhr);
						debugWrite("settings:",settings);
					},
					error:		function(xhr, textStatus, thrownError) {
						// Here's where you handle an error response.
						// Note that if the error was due to a CORS issue,
						// this function will still fire, but there won't be any additional
						// information about the error.
						debugWrite("#callbackForm","Error to send form");
						debugWrite("xhr:",xhr);
						debugWrite("textStatus:",textStatus);
						debugWrite("thrownError:",thrownError);
						debugWrite("Ручная отправка кросс-доменной формы обратной связи","start");
						crossDomainSubmit(currentCallbackForm());
						debugWrite("Ручная отправка кросс-доменной формы обратной связи","end");
						
						hideCurrentMenu();
						currentIndex = 4;
						clearForm();
						showCurrentMenu();
					}
				});
			} catch (e) {
				debugWrite('currentCallbackForm().ajaxSubmit error',e);
				debugWrite("Ручная отправка кросс-доменной формы обратной связи Попытка №2","start");
				try {
					crossDomainSubmit(currentCallbackForm());
				} catch(e) {
					debugWrite("crossDomainSubmit error",e);
				}
				debugWrite("Ручная отправка кросс-доменной формы обратной связи Попытка №2","end");
				
				hideCurrentMenu();
				currentIndex = 4;
				clearForm();
				showCurrentMenu();
			}
			debugWrite("Отправка формы обратной связи","end");
		}
		return false;
	});
			
	page.find(".next").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = nextIndex(currentIndex);
        clearForm();
		showCurrentMenu();
		return false;
	});

	page.find(".prev").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = prevIndex(currentIndex);
        clearForm();
		showCurrentMenu();
		return false;
	});

	page.find(".play").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		showBuffering();
		playCurrentPlayer();
		return false;
	});

	page.find(".replay").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		showBuffering();
		currentIndex = prevIndex(currentIndex);
		playCurrentPlayer();
		return false;
	});

	page.find(".home").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = 0;
		showCurrentMenu();
		return false;
	});

	page.find(".contact").bind("vclick",function(event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = 3;
		showCurrentMenu();
		return false;
	});
	
	page.find(".languageSelector").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		jQuery.mobile.changePage("#languageSelector");
		return false;
	});

	page.find(".mainmenuToggle").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		debugWrite("toggle",jQuery(".mainmenu"));
		jQuery(".mainmenu").toggle();
		return false;
	});
	
	debugWrite("createMenuVideoPage","end");
}

function createPagesIfNotExists(lang) {
	debugWrite("createPagesIfNotExists","start");
	debugWrite("lang",lang);

	if (jQuery(".menu-page."+lang).length==0) {
		// Создание страниц меню
		debugWrite("Создание страниц меню","start");
		for(var pageId in pages[lang]) {
			createMenuVideoPage(lang, pageId);
		}
		debugWrite("Создание страниц меню","end");
	}
	
	debugWrite("createPagesIfNotExists","end");
}

jQuery(document).one ('pageshow', function (event) {
	debugWrite('pageshow', 'one');
	
	// Разбор строки запроса на элементы
	try {
		url = jQuery.url(window.location.toString());
	} catch (e) {
		debugWrite("jQuery.url error",e);
	}
	
	// Использование языка браузера в качестве начального языка страниц
	debugWrite("Использование языка браузера в качестве начального языка страниц","start");
	var userLang = navigator.language || navigator.userLanguage; 
	userLang = userLang.substr(0,2);
 	debugWrite("The language is: ",userLang);
	if (languages[userLang]) {
		currentLanguage = userLang;
	}
	debugWrite("Использование языка браузера в качестве начального языка страниц","end");
 
	if(jQuery("input[name*='url']").val()==jQuery(location).attr('href')) {
		currentIndex = 3;
	} else {
		currentIndex = 0;
	}
	
	if(jQuery(".InfoLabel").length) {
		jQuery(".InfoLabel").remove();
		currentIndex = 4;
		clearForm();
	}
	
	hideBuffering();
	hideMainMenu();
	hideSurveyDialog();

/*	
	debugWrite("hideDoctor","start");
	hideDoctor();
	debugWrite("hideDoctor","end");
*/
	
	// Создание страниц для текущего языка
	debugWrite("Создание страниц для текущего языка","start");
	createPagesIfNotExists(currentLanguage);
	debugWrite("Создание страниц для текущего языка","end");
		
/*
	// Инициализация для YouTube Player API
	if (jQuery(".ytplayer").length) {	
		debugWrite('ytplayer', 'init');
		// Load the IFrame Player API code asynchronously.
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
*/
	jQuery("input[name*='expected_delivery_date']").attr("type","date");
	jQuery("input[name*='due_date']").attr("type","date");
	jQuery("input[name*='phone']").attr("type","tel");
	jQuery("input[name*='mail']").attr("type","email");

	jQuery("label[id*='url']").parent().hide();
	jQuery("label[id*='ipad_id']").parent().hide();
	jQuery("input[id*='url']").parent().hide();
	jQuery("input[id*='ipad_id']").parent().hide();
	//jQuery("input[type='submit']").parent().hide();
	
	try {
		jQuery("input[name*='ipad_id']").val(getID());
		jQuery("input[name*='url']").val(window.location.toString());
	} catch (e) {
		debugWrite('error',e);
	}

	// Заполняем элементы ввода значениями переданными в параметрах
	try {
		url.attr("query").split("&").forEach(function (value,index) {
			var ar = value.split("=");
			debugWrite(ar[0],ar[1]);
			jQuery("input[name*='"+ar[0]+"']").val(urldecode(ar[1]));
		});
	} catch (e) {
		debugWrite('url.attr("query").split("&").forEach error',e);
	}

	// Открытие формы вопроса перед началом использования сайта
	// Условие - либо нет iPadID, либо в строке адреса нет параметров
	if(((typeof kioskpro_id === 'undefined') || !kioskpro_id.toString().split(" ").join(""))
	&& (!url || (!url.attr("query") && !url.attr("fragment")))) {
		createSurveyForm(currentLanguage);
		showSurveyDialog();
	} else {
		showCurrentMenu();
	}
});

jQuery(document).on ("pagebeforecreate", "#languageSelector", function (event) {
	debugWrite("pagebeforecreate", "#languageSelector");
	for(var lang in languages) {
		var btn = "<a href='#main-"+lang+"' data-role='button'><img src='intl/flag-"+lang+".png' width='12px' height='12px' /><img src='images/none.png' width='12px' height='12px' />"+languages[lang]+"</a>";
		jQuery(btn).appendTo(jQuery(this).find("div[data-role='content']")).jqmData("lang",lang);
	}
	jQuery(this).find("a").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentLanguage = jQuery(this).jqmData("lang");
		createPagesIfNotExists(currentLanguage);
		showCurrentMenu();
		return false;
	});
});
