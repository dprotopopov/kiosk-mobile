///////////////////////////////////////////////////////////////////////////////////////
//
// Обучающее видео компании Cryo-Cell International
// http://cryo-cell.com
//
// Разработчик RBA DESIGN INTERNATIONAL LLC
// http://rbadesign.us
//
// Версия для мобильных устройств
//
////////////////////////////////////////////////////////////////////////////////////////

// YouTube JavaScript Player API  
var onYouTubePlayerReady;
var onStateChange;
var onError;

// Событие инициализации YouTube Player API
var onYouTubePlayerAPIReady;
var onPlayerError;
var onPlayerReady;
var onPlayerStateChange;

(function ($) {
	// Определение способа воспроизведения видео с YouTube
	// Значения:
	//     tubeplayer   - использование плагина Tubeplayer (http://www.tikku.com/jquery-youtube-tubeplayer-plugin)
	//     iframeplayer - использование YouTube Player API (https://developers.google.com/youtube/iframe_api_reference)
	//     jsplayer     - использование YouTube JavaScript Player API (https://developers.google.com/youtube/js_api_reference)
	var PlayerApi = "tubeplayer";
	
	// Используется для YouTube Player API
	var YtPlayers = {};
	
	var deviceReadyDeferred = $.Deferred();
	var domReadyDeferred = $.Deferred();
	var languageReadyDeferred = $.Deferred();
	var iframePlayerAPIReadyDeferred = $.Deferred();
	var playerReadyDeferred = {};
	var playerActivated = {};
	
	var currentIndex = 0;
	var currentLanguage = "en";
	
	var url = false;
	
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
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
		},
		es: {
			video1: { 
				videoId: "uuqGzMd808c",
				sources: [ 
					{ src:"video/CC_an_13_Spanish.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/CC_an_13_Spanish.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-Spanish-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-Spanish-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Corporate_Master_LAS_1.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Corporate_Master_LAS_1.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
		},
		ru: {
			video1: { 
				videoId: "uuqGzMd808c",
				sources: [ 
					{ src:"video/Cord_Blood_Educational_Video_Russian.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cord_Blood_Educational_Video_Russian.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "video/Cord_Blood_Educational_Video_Russian.srt",
					text: hereDoc(function() {/*!
1
00:00:04,000 --> 00:00:09,950
Познакомтесь с типичной американской семьей. Они молоды, красивы и ... она беременна.Поздравляем!

2
00:00:10,000 --> 00:00:13,950
Новый ребенок приносит  новые возможности и целый ряд решений

3
00:00:14,000 --> 00:00:18,450
Одним из наиболее важных решений является хранить ли пуповинную кровь ребенка и ткани.

4
00:00:18,540 --> 00:00:24,790
Мы слышали о хранении пуповинной крови, но мы действительно не знаем, почему мы должны замораживать пуповинную кровь нашего ребенка.

5
00:00:24,800 --> 00:00:27,300
А Вы храните пуповинную кровь ваших детей?

6
00:00:27,350 --> 00:00:34,950
Конечно, я храню - для всех моих детей! Если у вас есть возможность сохранить стволовые вашего ребенка клетки, вы определенно должны это сделать. Позвольте мне объяснить.

7
00:00:35,000 --> 00:00:40,900
Пуповинная кровь и ткани содержат стволовые клетки, строительные блоки всех других тканей в нашем организме.

8
00:00:41,000 --> 00:00:49,900
Стволовые клетки пуповинной крови используются для лечения около 80 заболеваний, включая церебральный паралич, лейкемии, аутоиммунные заболевания и генетические нарушения.

9
00:00:50,000 --> 00:00:51,800
Ого!

10
00:00:51,850 --> 00:00:58,950
Конечно! А на самом деле, как мы становимся старше, многие из этих условий становятся более распространенными, поэтому потребность в этих стволовых клеток может увеличиваться с течением времени

11
00:00:59,080 --> 00:01:04,280
В самом деле, более 30 000 трансплантаций пуповинной крови стволовых клеток уже были выполнены.

12
00:01:04,370 --> 00:01:06,370
Новые методы лечения появляются практически каждый день.

13
00:01:06,500 --> 00:01:12,850
Сохранение стволовых клеток Вашего новорожденного – это одна из самых лучших инвестиций которую вы можете сделать для вашего ребенка и вашей семьи.

14
00:01:12,900 --> 00:01:14,900
Нашей семьи?

15
00:01:15,000 --> 00:01:21,000
Да. Пуповинная кровь может быть использована для лечения вашего ребенка, братьев и сестер или других близких членов семьи, в зависимости от заболевания.

16
00:01:21,150 --> 00:01:26,650
Вероятность соответствия пересадки гораздо больше, от родственника, чем от неродственного донора.

17
00:01:26,800 --> 00:01:30,400
И при пересадке пациенты выздоравливают лучше, когда донор стволовых клеток близкий родственник.

18
00:01:30,540 --> 00:01:34,540
Вы также должны воспользоваться возможностью хранить стволовые клетки, которые находятся в тканях пуповины.

19
00:01:34,640 --> 00:01:36,840
Эти стволовые клетки другого типа и весьма перспективны.

20
00:01:36,910 --> 00:01:48,460
Они изучаются для лечения в будущем таких болезней, которые более распространены в пожилом возрасте, такие как инфаркт миокарда, инсульт, болезнь Паркинсона, диабет и другие заболевания.

21
00:01:48,600 --> 00:01:51,500
Это потрясающе. Но есть ли здесь какие нибудь риски?

22
00:01:51,550 --> 00:01:58,400
Сбор пуповинной крови и ткани после рождения вашего ребенка занимает несколько минут и не представляет абсолютно никакого риска для матери или ребенка.

23
00:01:58,450 --> 00:02:02,650
Но  у Вас будет только одна возможность для заморозки этих ценных клеток.

24
00:02:02,800 --> 00:02:04,800
Сколько это будет стоить?

25
00:02:05,000 --> 00:02:11,700
Сбор и хранение пуповинной крови в частном банке стволовых клеток будет стоит около $ 2000 плюс небольшая ежегодная плата за хранение.

26
00:02:11,800 --> 00:02:15,900
Банк хранит это в криогенных морозильниках для исключительного использования вашей семьей.

27
00:02:16,000 --> 00:02:18,300
Кредитные планы позволяют сделать это очень доступным.

28
00:02:18,400 --> 00:02:20,400
Есть ли другие способы?

29
00:02:20,500 --> 00:02:23,800
Если вы не захотите хранить стволовые вашего ребенка клетки для своей семьи,

30
00:02:23,850 --> 00:02:29,450
Вы сможете пожертвовать их в общественный банк для использования другими лицами, которые имеют неотложную медицинскую необходимость.

31
00:02:29,500 --> 00:02:34,090
Каждый год тысячи пациентов ищут подходящего донора в общественном банке,

32
00:02:34,150 --> 00:02:37,500
и стволовых вашего ребенка клетки могут подойти, чтобы спасти чью-то жизнь.

33
00:02:37,550 --> 00:02:44,350
Однако, как только вы сдадите их в общественный банк, они не могут быть доступны для вашего ребенка или семьи в будущем.

34
00:02:44,200 --> 00:02:48,000
В этом случае, вам придется самим надеяться, что совпадение для Вас придет во время

35
00:02:48,120 --> 00:02:57,920
По состоянию на 2013 год, расходы на приобретение соответствующих стволовых клеток из общественного банка составляет около $ 35 000 и включены в качестве части платы за больничное лечение.

36
00:02:58,000 --> 00:03:00,400
Но как мы узнаем, какой частный банк выбрать?

37
00:03:00,450 --> 00:03:03,850
Взвесте все, прежде чем выбрать банк для хранения пуповинной крови.

38
00:03:04,020 --> 00:03:11,270
Проверьте аккредитации, записи успешного терапевтического применения и гарантии

39
00:03:11,350 --> 00:03:13,450
Через несколько месяцев

40
00:03:13,510 --> 00:03:15,810
Родовая палата

41
00:03:21,000 --> 00:03:24,750
Спокойствие для всей вашей семьи.

*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
		},
		it: {
			video1: { 
				videoId: "uuqGzMd808c",
				sources: [ 
					{ src:"video/CC_an_13.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/CC_an_13.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
		},
		cn: {
			video1: { 
				videoId: "uuqGzMd808c",
				sources: [ 
					{ src:"video/Cord_Blood_Educational_Video_Simplified_Chinese_1.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cord_Blood_Educational_Video_Simplified_Chinese_1.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
		},
		tw: {
			video1: { 
				videoId: "uuqGzMd808c",
				sources: [ 
					{ src:"video/Cord_Blood_Educational_Video_Traditional_Chinese_1.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cord_Blood_Educational_Video_Traditional_Chinese_1.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video2: { 
				videoId: "vYdjHhDGAUI",
				sources: [ 
					{ src:"video/One-Life-Saved-FINAL.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/One-Life-Saved-FINAL.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			},
			video3: { 
				videoId: "BJUN4LrXi88#!",
				sources: [ 
					{ src:"video/Cryo-Cell-Replication_Master-1280.mp4", type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' },
					{ src:"video/Cryo-Cell-Replication_Master-1280.ogv", type:'video/ogg; codecs="theora, vorbis"' }
				],
				srt: {
					data: "",
					text: hereDoc(function() {/*!
*/})
				}
			}
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
			copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell International. All rights reserved." },
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
			copyright: { buttonClass:"button", text:"© Cryo-Cell International. Todos los Derechos Reservados." },
			callUs: { buttonClass:"button", text:"Llámenos" },
			mainmenuToggle: { buttonClass:"button", text:"Menú" },
			replay: { buttonClass:"button", text:"Replay" },
			play: { buttonClass:"button", text:"Reproducir" },
			prev: { buttonClass:"button-small", text:"Anterior" },
			next: { buttonClass:"button-small", text:"Siguiente" },
			home: { buttonClass:"button", text:"Página principal" },
			contact: { buttonClass:"button", text:"¿Tiene preguntas?" },
			save: { buttonClass:"button", text:"Enviar" }
		},
		ru: {
			copyright: { buttonClass:"button", text:"Право копирования © Cryo-Cell International. Все права защищены." },
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
			copyright: { buttonClass:"button", text:"Copyright © Cryo-Cell International. All rights reserved." },
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
			copyright: { buttonClass:"button", text:"©Cryo-Cell版权所有. 保留所有权利." },
			callUs: { buttonClass:"button", text:"致电我们" },
			mainmenuToggle: { buttonClass:"button", text:"选单" },
			replay: { buttonClass:"button", text:"重播" },
			play: { buttonClass:"button", text:"播放" },
			prev: { buttonClass:"button-small", text:"前页" },
			next: { buttonClass:"button-small", text:"下页" },
			home: { buttonClass:"button", text:"首頁" },
			contact: { buttonClass:"button", text:"有疑问吗？ " },
			save: { buttonClass:"button", text:"提交" }
		},
		tw: {
			copyright: { buttonClass:"button", text:"©Cryo-Cell版權所有. 保留所有權利." },
			callUs: { buttonClass:"button", text:"致電我們" },
			mainmenuToggle: { buttonClass:"button", text:"選單" },
			replay: { buttonClass:"button", text:"重播" },
			play: { buttonClass:"button", text:"播放" },
			prev: { buttonClass:"button-small", text:"前頁" },
			next: { buttonClass:"button-small", text:"下頁" },
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
			"Contáctenos"
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
			"与我们联系"
		],
		tw: [
			"為什麼您應該儲存寶寶的臍帶血？",
			"臍帶血如何能挽救生命？",
			"為何選擇Cryo-Cell？",
			"與我們聯繫"
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
				subtitle: "We hope you found these brief videos informative.<br />To learn more about our services, please fill in the contact form below."
			},
			page5: { 
				title: "Thank you",
				subtitle: "Your request has been sent.<br />One of our client services advisors will contact you shortly."
			}
		},
		es: {
			page1: { 
				title: "¿Por qué debe almacenar la sangre del cordón umbilical de su bebé?",
				subtitle: "Vea un breve vídeo animado sobre las células madre del cordón umbilical."
			},
			page2: {
				title: "¿Cómo la sangre del cordón umbilical puede salvar vidas?",
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
				subtitle: "Su solicitud ha sido enviada.<br />Muy pronto uno de nuestros asesores de servicio al cliente se pondrá en contacto con usted."
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
				subtitle: "您的要求已发送<br />我们的客户服务代表将很快地与您联系."
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
				subtitle: "您的要求已發送<br />我們的客戶服務代表將很快地與您聯繫."
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
			label: "Por favor ingresar el nombre del consultorio o de su médico obstetra / ginecólogo:"
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
	
	try {
		var kioskId = (kioskpro_id.toString().split(" ").join(""));
		localStorage.setItem("KioskProID", kioskId);
	} catch (e) {
	}
	
	// Определение ID, заданного в Kiosk Pro
	function getID() {
		var iPadID = "iPadID is not set";
		try {
			iPadID = localStorage.getItem("KioskProID");
		} catch(e) {
			iPadID = "iPadID is not set";
		}
		return iPadID;
	}
	
	function isKioskPro() {
		var bool = true;
		try {
			var iPadID = localStorage.getItem("KioskProID");
			bool = iPadID && iPadID != "";
		} catch(e) {
			bool = false;
		}
		return bool;
	}
	
	function isCordova() {
		var bool = false;
		try {
			bool = (typeof cordova != 'undefined') || (typeof Cordova != 'undefined');
		} catch(e) {
		}
		return bool;
	}
	
	function isMobileSafari() {
		return navigator.userAgent.match(/(iPod|iPhone|iPad)/) 
			&& navigator.userAgent.match(/AppleWebKit/) 
			&& (!isKioskPro()) 
			&& (!isCordova());
	}
	
	function currentCallbackForm() { return $("#callbackForm",currentMenuPage()); }
	function currentMenuPage() { return $(".menu-page." + currentLanguage).get(currentIndex); }
	function currentVideoPage() { return $(".video-page." + currentLanguage).get(currentIndex); }
	function currentPlayer() { return $(currentVideoPage()).find("video").get(0); }
	function currentJsPlayer() { return document.getElementById("jsplayer-"+$(currentVideoPage()).attr("id")); }
	function currentFramePlayer() { return YtPlayers[$(currentVideoPage()).attr("id")]; }
	function currentTubePlayer() { return $(".tubeplayer",currentVideoPage()); }
	function nextIndex(index) { index++ ; if(index >= 4) index = 3; return index; }
	function prevIndex(index) { index-- ; if(index < 0) index = 0; return index; }
	function showCurrentMenu() { 
		$.mobile.changePage("#"+$(currentMenuPage()).attr("id")); 
		showCurrentVideo();
	}
	function hideCurrentMenu() {
		hideCurrentVideo(); 
	}
	function showCurrentVideo() { 
		var page = $(currentVideoPage());
		if(isMobileSafari()) {
			createYoutubePlayer(page);
		}
	}
	function hideCurrentVideo() { 
		var page = $(currentVideoPage());
		var playerid = "jsplayer-"+page.attr("id");
		playerReadyDeferred[playerid] = $.Deferred();
		if(isMobileSafari()) {
			destroyCurrentPlayer();
		}
	}
	function showBuffering() { $("#buffering").hide(); }
	function hideBuffering() { $("#buffering").hide(); }
	function hideMainMenu() { $('.mainmenu').hide(); }
	function showSurveyDialog() { $.mobile.changePage("#survey-"+currentLanguage); } 
	function hideSurveyDialog() { }
	function clearForm() { 
		  $("input[name*='expected_delivery_date']").val("");
		  $("input[name*='due_date']").val("");
		  $("input[name*='phone']").val("");
		  $("input[name*='first_name']").val("");
		  $("input[name*='last_name']").val("");
		  $("input[name*='mail']").val("");
		  $("input").removeClass("error");
		  $(".error").remove();
		  $(".ErrorLabel").remove();
		  $(".EditingFormErrorLabel").remove();
	}
	
	function playCurrentPlayer() {
		if (currentIndex < 3) {
			var page = $(currentVideoPage());
			if ($(".tubeplayer",page).length) {
				try {
					var tubeplayer = currentTubePlayer();
					var playerid = $(tubeplayer).attr("id");
					if(playerActivated[playerid]) $.when(playerReadyDeferred[playerid]).then(function() {
						tubeplayer.tubeplayer("play");
					});
				}
				catch(e) {
					debugWrite("tubeplayer:",e);
				}
			}
			else if ($(".iframeplayer",page).length) {
				try {
					var iframeplayer = currentFramePlayer();
					var playerid = iframeplayer.a.id;
					if(playerActivated[playerid]) $.when(playerReadyDeferred[playerid]).then(function() {
						iframeplayer.playVideo();
					});
				}
				catch(e) {
					debugWrite("youtube player api:",e);
				}
			}
			else if ((!isKioskPro()) && PlayerApi == 'jsplayer') {
				try {
					var jsplayer = currentJsPlayer();
					var playerid = $(jsplayer).attr("id");
					if(playerActivated[playerid]) $.when(playerReadyDeferred[playerid]).then(function() {
						jsplayer.playVideo();
					});
				}
				catch(e) {
					debugWrite("youtube player api:",e);
				}
			}
			else {
				try {
					var player = currentPlayer();
					var playerid = $(player).attr("id");
					if(playerActivated[playerid]) player.play();
				}
				catch(e) {
					debugWrite("video html5:",e);
				}
			}
		}
	}
	
	function pauseCurrentPlayer() {
		if (currentIndex < 3) {
			var page = $(currentVideoPage());
			if ($(".tubeplayer",page).length) {
				try {
					var tubeplayer = currentTubePlayer();
					var playerid = $(tubeplayer).attr("id");
					$.when(playerReadyDeferred[playerid]).then(function() {
						tubeplayer.tubeplayer("pause");
					});
				}
				catch(e) {
					debugWrite("tubeplayer:",e);
				}
			}
			else if ($(".iframeplayer",page).length) {
				try {
					var iframeplayer = currentFramePlayer();
					var playerid = iframeplayer.a.id;
					$.when(playerReadyDeferred[playerid]).then(function() {
						iframeplayer.pauseVideo();
					});
				}
				catch(e) {
					debugWrite("youtube player api:",e);
				}
			}
			else if ((!isKioskPro()) && PlayerApi == 'jsplayer') {
				try {
					var jsplayer = currentJsPlayer();
					var playerid = $(jsplayer).attr("id");
					$.when(playerReadyDeferred[playerid]).then(function() {
						jsplayer.pauseVideo();
					});
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
	
	function activateCurrentPlayer() {
		if (currentIndex < 3) {
			var page = $(currentVideoPage());
			if ($(".tubeplayer",page).length) {
				var tubeplayer = currentTubePlayer();
				var playerid = $(tubeplayer).attr("id");
				playerActivated[playerid] = true;
			}
			else if ($(".iframeplayer",page).length) {
				var iframeplayer = currentFramePlayer();
				var playerid = iframeplayer.a.id;
				playerActivated[playerid] = true;
			}
			else if ((!isKioskPro()) && PlayerApi == 'jsplayer') {
				var jsplayer = currentJsPlayer();
				var playerid = $(jsplayer).attr("id");
				playerActivated[playerid] = true;
			}
			else {
				var player = currentPlayer();
				var playerid = $(player).attr("id");
				playerActivated[playerid] = true;
			}
		}
	}
	
	function destroyCurrentPlayer() {
		if (currentIndex < 3) {
			var page = $(currentVideoPage());
			if ($(".tubeplayer",page).length) {
				try {
					var tubeplayer = currentTubePlayer();
					var playerid = $(tubeplayer).attr("id");
					tubeplayer.tubeplayer("destroy");
				}
				catch(e) {
					debugWrite("tubeplayer:",e);
				}
			}
	//		else if ($(".iframeplayer",page).length) {
	//			try {
	//				var iframeplayer = currentFramePlayer();
	//				var playerid = iframeplayer.a.id;
	//				$.when(playerReadyDeferred[playerid]).then(function() {
	//					iframeplayer.pauseVideo();
	//				});
	//			}
	//			catch(e) {
	//				debugWrite("youtube player api:",e);
	//			}
	//		}
	//		else if ((!isKioskPro()) && PlayerApi == 'jsplayer') {
	//			try {
	//				var jsplayer = currentJsPlayer();
	//				var playerid = $(jsplayer).attr("id");
	//				$.when(playerReadyDeferred[playerid]).then(function() {
	//					jsplayer.pauseVideo();
	//				});
	//			}
	//			catch(e) {
	//				debugWrite("youtube player api:",e);
	//			}
	//		}
	//		else {
	//			try {
	//				var player = currentPlayer();
	//				player.pause();
	//			}
	//			catch(e) {
	//				debugWrite("video html5:",e);
	//			}
	//		}
		}
	}
		
	
	// YouTube JavaScript Player API  
	onYouTubePlayerReady = function (playerid) {
		debugWrite("onYouTubePlayerReady",playerid);
		playerReadyDeferred[playerid].resolve();
		var player = document.getElementById(playerid);
		player.addEventListener("onStateChange", "onStateChange");
		player.addEventListener("onError", "onError");		
	}
	
	onStateChange = function (state) {
		debugWrite("onStateChange",state);
		switch(state) {
		case 0:
//			hideCurrentVideoStop();
//			hideCurrentVideoContact();
//			hideCurrentVideo();
			hideBuffering();
			currentIndex = nextIndex(currentIndex);
			showCurrentMenu();
			break;
		case 1:
			activateCurrentPlayer();
			hideBuffering();
//			hideCurrentVideoStop();
//			hideCurrentVideoContact();
//			showCurrentVideo();
//			hideCurrentMenu();
			break;
		case 2:
			hideBuffering();
//			showCurrentVideoStop();
//			showCurrentVideoContact();
			break;
		case 3:
	//		showBuffering();
			break;
		}
	}
	
	onError = function (error) {
		debugWrite("onError",error);
	}
	
	// Событие инициализации YouTube Player API
	onYouTubeIframeAPIReady = function () {
		iframePlayerAPIReadyDeferred.resolve();
	}
	
	onPlayerError = function (event) {
		debugWrite("onPlayerError",event);
	}
	
	onPlayerReady = function (event) {
		debugWrite("onPlayerReady",event);
		var playerid = event.target.a.id;
		playerReadyDeferred[playerid].resolve();
		hideBuffering();
	}
	
	onPlayerStateChange = function (event) {
		debugWrite("onPlayerStateChange",event);
		switch(event.data) {
		case YT.PlayerState.BUFFERING:
	//		showBuffering();
			break;
		case YT.PlayerState.PAUSED:
			hideBuffering();
			showCurrentVideoStop();
			showCurrentVideoContact();
			break;
		case YT.PlayerState.ENDED:
			hideCurrentVideoStop();
			hideCurrentVideoContact();
			hideCurrentVideo();
			hideBuffering();
			currentIndex = nextIndex(currentIndex);
			showCurrentMenu();
			break;
		case YT.PlayerState.PLAYING:
			activateCurrentPlayer();
			hideBuffering();
			hideCurrentVideoStop();
			hideCurrentVideoContact();
			showCurrentVideo();
			hideCurrentMenu();
			break;
		}
	}
	
	// Событие инициализации tubeplayer	  	  
	$.tubeplayer.defaults.afterReady = function($player){
		debugWrite("$.tubeplayer.defaults.afterReady",$player);
		var playerid = $player.attr("id");
		playerReadyDeferred[playerid].resolve();
		hideBuffering();
	}
	
	// Процедура кросс-доменной отправки содержимого формы ввода
	// Параметр - отправляемая форма ввода
	function crossDomainSubmit(item) {
		// Add the iframe with a unique name
		var uniqueString = "crossDomainForm-"+$("iframe").length;
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
	
	function hereDoc(f) {
	  return f.toString().
		  replace(/^[^\/]+\/\*!?/, '').
		  replace(/\*\/[^\/]+$/, '');
	}
	
	// Функция вывода сообщений трассировки
	// Обработка try-catch требуется для совместимости с IE
	function debugWrite(a,b) {
		try {
	//		console.log(a,b);
			console.log(a+":"+b);
		} catch (e) {
		}
	}
	
	function createHeader(lang) {
		var header = $(".header-template").clone();
		header.removeClass("header-template");
		header.attr("data-role","header");
		header.addClass(lang);
		return header;
	}
	
	function createFooter(lang) {
		var footer = $(".footer-template").clone();
		footer.removeClass("footer-template");
		footer.attr("data-role","footer");
		footer.addClass(lang);
		return footer;
	}
	
	function createMainmenu(lang) {
		var mainmenu = $(".mainmenu-template").clone();
		mainmenu.removeClass("mainmenu-template").addClass("mainmenu");
		mainmenu.find("ul").attr("data-role","listview");
		mainmenu.addClass(lang);
		mainmenu.attr("id","mainmenu");
		
		mainmenu.find(".mainmenu-link").each(function(index,element) {
			$(element).attr("href",$(element).attr("href")+"-"+lang);
			$(element).text(mainmenuLinks[lang][index]);
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
			&& ("#"+$($(".menu-page." + currentLanguage).get(currentIndex)).attr("id")) != $(this).attr("href")) {
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
		var form = $(".survey-form-template").clone();
		form.appendTo($("body")).removeClass("survey-form-template").addClass("survey-form");
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
			$("input[name*='doctor']").val($("input[name*='answer']").val()); 
			hideSurveyDialog();
			showCurrentMenu();
			return false;
		});
		
		debugWrite("createSurveyForm","end");
		
		return form;
	}
	
	function createYoutubePlayer(page) {
		debugWrite("Инициализация tubeplayer","start");
		page.find(".tubeplayer").each(function(i,e) {
			var playerid = $(e).attr("id");
			playerActivated[playerid] = !isMobileSafari();
			playerReadyDeferred[playerid] = $.Deferred();
			$(e).tubeplayer({
				width: 280, // the width of the player
				height: 200, // the height of the player
				allowFullScreen: "true", // true by default, allow user to go full screen
				initialVideo: $(e).attr("videoId"), // the video that is loaded into the player
				start: 0, 
				preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
				showControls: 1, // whether the player should have the controls visible, 0 or 1
				showRelated: 0, // show the related videos when the player ends, 0 or 1 
				autoPlay: false, // whether the player should autoplay the video, 0 or 1
				autoHide: false, 
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
		debugWrite("Инициализация tubeplayer","end");
	
		debugWrite("Инициализация iframeplayer","start");
		page.find(".iframeplayer").each(function(i,e) {
			var playerid = $(e).attr("id");
			playerActivated[playerid] = !isMobileSafari();
			playerReadyDeferred[playerid] = $.Deferred();
			var player = new YT.Player(playerid, {
				width: "280",
				height: '200',
				allowfullscreen: 'true',
				videoId: $(e).attr("videoId"),
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange,
					'onError': onPlayerError
				}
			});
			YtPlayers[page.attr("id")] = player;
			debugWrite("new YT.Player",$(e).attr("videoId"));
		});
		debugWrite("Инициализация iframeplayer","end");
	
		debugWrite("Инициализация jsplayer","start");
		page.find(".jsplayer").each(function(i,e) {
			var playerid = "jsplayer-"+$(e).parent().attr("id");
			var params = { allowScriptAccess: "always" };
			var atts = { id: playerid };
			playerActivated[playerid] = !isMobileSafari();
			playerReadyDeferred[playerid] = $.Deferred();
			swfobject.embedSWF("http://www.youtube.com/v/"+$(this).attr("videoId")+"?enablejsapi=1&playerapiid="+playerid+"&version=3",$(e).attr("id"), "280", "200", "8", null, null, params, atts);
			debugWrite("embedSWF",$(e).attr("videoId"));
		});
		debugWrite("Инициализация jsplayer","end");
	}
	
	function createMenuVideoPage(lang, pageId) {
		debugWrite("createMenuVideoPage","start");
		debugWrite("pageId",pageId);
		debugWrite("lang",lang);
		var page = $(".menuvideo-page-template#"+pageId).clone();
		page.appendTo($("body")).removeClass("menuvideo-page-template").addClass("menu-page").addClass("video-page");
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
			page.find("#"+vid).attr("videoId",videos[lang][vid].videoId).attr("id",page.attr("id"));
		}
		
		page.find("video").each(function(i,e) {
			var player = e;
			var playerid = $(e).attr("id");
			var srt = $('.srt',page);
			$(player).data("page",page);
  			setSubtitles(srt);
				
	//		player.onvclick = function(e){
	//			this.pause();
	//		};
			player.addEventListener("ended", function(e){
				var page = $(this).data("page");
				var srt = $('.srt',page);
				$(this).fullScreen(false);
				hideMainMenu();
				hideCurrentVideo();
				hideBuffering();
				currentIndex = nextIndex(currentIndex);
				showCurrentMenu();
				pauseSubtitles(srt);
			}, false);
			player.addEventListener("playing", function(e){
				var page = $(this).data("page");
				var srt = $('.srt',page);
				hideBuffering();
				$(this).fullScreen(true);
	//			hideCurrentMenu();
	//			showCurrentVideo();
 				playSubtitles(srt);
			}, false);
			player.addEventListener("pause", function(e){
				var page = $(this).data("page");
				var srt = $('.srt',page);
	//			hideCurrentVideo();
	//			hideBuffering();
	//			showCurrentMenu();
				pauseSubtitles(srt);
			}, false);
			player.addEventListener("waiting", function(e){
				showBuffering();
			}, false);
			player.addEventListener("error", function(e){
				debugWrite("an error in playback.");
			}, false);
		});
	
		if(!isMobileSafari()) createYoutubePlayer(page);
		
		// Проверка встроенной поддержки для <input type="date">
		// Если нет встроенной поддержки для <input type="date">,
		// то заменяем <input type="date"> на <input type="text">
		// и обрабатываем поле с помощью mobiscroll
		if (!Modernizr.inputtypes.date) {
			page.find("input[type='date']").attr("type","text").mobiscroll().date($.extend({theme:"jqm"},$.mobiscroll.i18n[lang]));
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
			$("input[name='"+$(this).attr("name")+"']").val($(this).val());
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
				$("input").removeClass("error");
				$(".error").remove();
				$(".ErrorLabel").remove();
				$(".EditingFormErrorLabel").remove();
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
				
		page.find(".save").dblclick(function(event) {
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
			$.mobile.changePage("#languageSelector");
			return false;
		});
	
		page.find(".mainmenuToggle").bind("vclick",function(event,ui) {
			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
			debugWrite("toggle",$(".mainmenu"));
			$(".mainmenu").toggle();
			return false;
		});
		
		debugWrite("createMenuVideoPage","end");

  function playSubtitles(subtitleElement) {
	var timer = subtitleElement.data("timer");
	timer.play();
  }
  function pauseSubtitles(subtitleElement) {
	var timer = subtitleElement.data("timer");
	timer.pause();
  }
  function stopSubtitles(subtitleElement) {
	var timer = subtitleElement.data("timer");
	timer.stop();
  }

/*
 * jQuery srt
 *
 * version 0.1 (November 28, 2008)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
/*
  usage:
    <video src="example.ogg" id="examplevideo" />
    <div class="srt" data-video="examplevideo" data-srt="example.srt"></div>

  jquery.srt.js will try to load subtitles in all elements with 'srt' class.
  'data-video' atribute is used to link to the related video,
  if no data-srt is provided, the contents of the div is parsed as srt.
*/

  
//$(document).ready(function() {
  function toSeconds(t) {
    var s = 0.0
    if(t) {
      var p = t.split(':');
      for(i=0;i<p.length;i++)
        s = s * 60 + parseFloat(p[i].replace(',', '.'))
    }
    return s;
  }
  function strip(s) {
    return s.replace(/^\s+|\s+$/g,"");
  }
  function setSubtitles(subtitleElement) {
    var videoId = subtitleElement.attr('data-video');
    var srt = subtitleElement.text();
    subtitleElement.text('');
    srt = srt.replace(/\r\n|\r|\n/g, '\n')
    
    var subtitles = {};
    srt = strip(srt);
    var srt_ = srt.split('\n\n');
	last = -1;
    for(s in srt_) {
        st = srt_[s].split('\n');
        if(st.length >=2) {
          n = st[0];
          i = strip(st[1].split(' --> ')[0]);
          o = strip(st[1].split(' --> ')[1]);
          t = st[2];
          if(st.length > 2) {
            for(j=3; j<st.length;j++)
              t += '\n'+st[j];
          }
          is = toSeconds(i);
          os = toSeconds(o);
		  last = Math.max(parseInt(is),last+1);
          subtitles[last] = {i:i, o: o, t: t};
		  debugWrite ("#"+last,subtitles[last].i+" --> "+subtitles[last].o+" "+subtitles[last].t);
        }
    }
    var currentSubtitle = -1;
    var timer = $.timer(function() {
      var currentTime = document.getElementById(videoId).currentTime;
      var subtitle = -1;
      for(s in subtitles) {
        if(s > currentTime)
          break
        subtitle = s;
      }
      if(subtitle > 0) {
        if(subtitle != currentSubtitle) {
          subtitleElement.html(subtitles[subtitle].t);
          currentSubtitle=subtitle;
        } else if(subtitles[subtitle].o < currentTime) {
          subtitleElement.html('');
        }
      }
    });
	timer.set({ time : 100, autostart : false });
	subtitleElement.data("timer",timer);
  }
//  $('.srt',page).each(function() {
//    var subtitleElement = $(this);
//    var videoId = subtitleElement.attr('data-video');
//    if(!videoId) return;
//    var srtUrl = subtitleElement.attr('data-srt');
//    if(srtUrl) {
//      $(this).load(srtUrl, function (responseText, textStatus, req) { playSubtitles(subtitleElement)})
//	  debugWrite("load srt",$(this).text());
//    } else {
//      playSubtitles(subtitleElement);
//    }
//  });
//});
	}
	
	function createPagesIfNotExists(lang) {
		debugWrite("createPagesIfNotExists","start");
		debugWrite("lang",lang);
	
		if ($(".menu-page."+lang).length==0) {
			// Создание страниц меню
			debugWrite("Создание страниц меню","start");
			for(var pageId in pages[lang]) {
				createMenuVideoPage(lang, pageId);
			}
			debugWrite("Создание страниц меню","end");
		}
		
		debugWrite("createPagesIfNotExists","end");
	}
	
	$(document).ready(function (event) {
		debugWrite('ready', 'start');
		
		// Разбор строки запроса на элементы
		try {
			url = $.url(window.location.toString());
		} catch (e) {
			debugWrite("$.url error",e);
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
		
		hideBuffering();
		hideMainMenu();
		hideSurveyDialog();
	
	/*	
		debugWrite("hideDoctor","start");
		hideDoctor();
		debugWrite("hideDoctor","end");
	*/
	
		domReadyDeferred.resolve();
	
		if (!isCordova())  {
			deviceReadyDeferred.resolve();
			languageReadyDeferred.resolve();
		}
		
		if((!isKioskPro()) && PlayerApi == "iframeplayer") {
		// Инициализация для YouTube Player API
			debugWrite("Инициализация YouTube Player API","start");
			// Load the IFrame Player API code asynchronously.
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			debugWrite("Инициализация YouTube Player API","end");
		} else {
			iframePlayerAPIReadyDeferred.resolve();
		}
		
		debugWrite('ready', 'end');
	});
	
	// Wait for Cordova to load
	//
	document.addEventListener("deviceready", onDeviceReady, false);
	
	// Cordova is ready
	//
	function onDeviceReady() {
		debugWrite("onDeviceReady","start");
		deviceReadyDeferred.resolve();
	
		try {
			navigator.globalization.getLocaleName(
				function(locale) { 
					if(languages[locale.value.substr(0,2)]) currentLanguage = locale.value.substr(0,2); 
					languageReadyDeferred.resolve();
				},
				function() {
					languageReadyDeferred.resolve();
				}
			)
		} catch(e) {
			languageReadyDeferred.resolve();
		}
		
		debugWrite("onDeviceReady","end");
	}
	
	$.when(deviceReadyDeferred, domReadyDeferred, languageReadyDeferred, iframePlayerAPIReadyDeferred).then(function() {
		debugWrite('when(deviceReadyDeferred, domReadyDeferred, languageReadyDeferred, iframePlayerAPIReadyDeferred).then','start');
	
		// Создание страниц для текущего языка
		debugWrite("Создание страниц для текущего языка","start");
		createPagesIfNotExists(currentLanguage);
		debugWrite("Создание страниц для текущего языка","end");
			
		debugWrite("Устанавливаем типы полей ввода","start");
		$("input[name*='expected_delivery_date']").attr("type","date");
		$("input[name*='due_date']").attr("type","date");
		$("input[name*='phone']").attr("type","tel");
		$("input[name*='mail']").attr("type","email");
		debugWrite("Устанавливаем типы полей ввода","end");
	
		debugWrite("Скрываем не используемые поля","start");
		$("label[id*='url']").parent().hide();
		$("label[id*='ipad_id']").parent().hide();
		$("input[id*='url']").parent().hide();
		$("input[id*='ipad_id']").parent().hide();
		//$("input[type='submit']").parent().hide();
		debugWrite("Скрываем не используемые поля","end");
		
		debugWrite("Заполняем поля ipad_id и url","start");
		try {
			$("input[name*='ipad_id']").val(getID());
			$("input[name*='url']").val(window.location.toString());
		} catch (e) {
			debugWrite('error',e);
		}
		debugWrite("Заполняем поля ipad_id и url","end");
	
		debugWrite("Заполняем элементы ввода значениями переданными в параметрах","start");
		try {
			url.attr("query").split("&").forEach(function (value,index) {
				var ar = value.split("=");
				debugWrite(ar[0],ar[1]);
				$("input[name*='"+ar[0]+"']").val(urldecode(ar[1]));
			});
		} catch (e) {
			debugWrite('url.attr("query").split("&").forEach error',e);
		}
		debugWrite("Заполняем элементы ввода значениями переданными в параметрах","end");
	
		// Открытие формы вопроса перед началом использования сайта
		// Условие - либо нет iPadID, либо в строке адреса нет параметров
		// Письмо от 02.08.2013 - Убрать вопрос по доктору до начала просмотра видео
		if(false && (!isKioskPro())	&& (!url || (!url.attr("query") && !url.attr("fragment")))) {
			var form = createSurveyForm(currentLanguage);
			// set the page hash to our start page
			window.location.hash = "#"+form.attr("id");
			//initialise jQM
			$.mobile.initializePage();
		} else {
			debugWrite("Показ страницы","start");
			// set the page hash to our start page
			window.location.hash = "#"+$(currentMenuPage()).attr("id");
			//initialise jQM
			$.mobile.initializePage();
			showCurrentVideo();
			debugWrite("Показ страницы","end");
		}
	
		debugWrite('when(deviceReadyDeferred, domReadyDeferred, languageReadyDeferred, iframePlayerAPIReadyDeferred).then','end');
	});
	
	$(document).on ("pagebeforecreate", "#languageSelector", function (event) {
		debugWrite("pagebeforecreate", "#languageSelector");
		for(var lang in languages) {
			var btn = "<a href='#main-"+lang+"' data-role='button'><img src='intl/flag-"+lang+".png' width='12px' height='12px' /><img src='images/none.png' width='12px' height='12px' />"+languages[lang]+"</a>";
			$(btn).appendTo($(this).find("div[data-role='content']")).jqmData("lang",lang);
		}
		$(this).find("a").bind("vclick",function(event,ui) {
			if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
			hideSurveyDialog();
			hideMainMenu();
			pauseCurrentPlayer();
			hideBuffering();
			hideCurrentMenu();
			currentLanguage = $(this).jqmData("lang");
			createPagesIfNotExists(currentLanguage);
			showCurrentMenu();
			return false;
		});
	});
})(jQuery);
