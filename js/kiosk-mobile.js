jQuery.noConflict();

var YtPlayers = new Array();

var currentIndex = 0;
var currentLanguage = "en";

function currentMenuPage() { return jQuery(".menu-page." + currentLanguage).get(currentIndex); }
function currentVideoPage() { return jQuery(".video-page." + currentLanguage).get(currentIndex); }
function currentPlayer() { return jQuery(currentVideoPage()).find("video").get(0); }
function currentYtPlayer() { return YtPlayers[jQuery(".ytplayer").index(jQuery(currentVideoPage()).find(".ytplayer").get(0))]; }
function currentTubePlayer() { return jQuery(currentVideoPage()).find(".tubeplayer").get(0); }
function nextIndex(index) { index++ ; if(index >= 4) index = 3; return index; }
function prevIndex(index) { index-- ; if(index < 0) index = 0; return index; }
function showCurrentMenu() { jQuery(currentMenuPage()).fadeIn("slow").show(); }
function hideCurrentMenu() { jQuery(currentMenuPage()).hide(); }
function showCurrentVideo() { jQuery(currentVideoPage()).fadeIn("slow"); }
function hideCurrentVideo() { jQuery(currentVideoPage()).hide();  }
function showBuffering() { jQuery("#buffering").hide(); }
function hideBuffering() { jQuery("#buffering").hide(); }
function hideMainMenu() { jQuery('#mainmenu').hide(); }
function showSurveyDialog() { jQuery("#surveyForm").fadeIn("slow"); } 
function hideSurveyDialog() { jQuery("#surveyForm").hide(); }
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
				console.log("tubeplayer:",e);
			}
		}
		else if (jQuery(currentVideoPage()).find(".ytplayer").length>0) {
			try {
				var ytplayer = currentYtPlayer();
				ytplayer.playVideo();
			}
			catch(e) {
				console.log("youtube player api:",e);
			}
		}
		else {
			try {
				var player = currentPlayer();
				player.play();
			}
			catch(e) {
				console.log("video html5:",e);
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
				console.log("tubeplayer:",e);
			}
		}
		else if (jQuery(currentVideoPage()).find(".ytplayer").length>0) {
			try {
				var ytplayer = currentYtPlayer();
				ytplayer.pauseVideo();
			}
			catch(e) {
				console.log("youtube player api:",e);
			}
		}
		else {
			try {
				var player = currentPlayer();
				player.pause();
			}
			catch(e) {
				console.log("video html5:",e);
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


function onYouTubePlayerAPIReady() {
	//alert("API is ready!");
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
	alert(event.data);
}
  
function onPlayerReady(event) {
  	hideBuffering();
}
  
function onPlayerStateChange(event) {
//	alert("Player's new state: " + event.data);
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

jQuery.tubeplayer.defaults.afterReady = function($player){
  	hideBuffering();
}

function crossDomainSubmit(item) {
  // Add the iframe with a unique name
  var uniqueString = "crossDomainForm-"+jQuery("iframe").length;
  var iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.contentWindow.name = uniqueString;

  // construct a form with hidden inputs, targeting the iframe
  var form = document.createElement("form");
  form.target = uniqueString;
  form.action = item.attr("action");
  form.method = item.attr("method");

  // repeat for each parameter
  item.find("input").each(function() {
	  var input = document.createElement("input");
	  input.type = "hidden";
	  input.name = jQuery(this).attr("name");
	  input.value = jQuery(this).val();
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

jQuery(document).on ('pageinit', '#main', function (event) {
	console.log('pageinit', '#main');
	
	// Разбор строки запроса на элементы
	var url = jQuery.url(jQuery(location).attr("href"));
	
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
	
	jQuery(".video-page").hide();
	jQuery(".menu-page").hide();
	hideBuffering();
	hideMainMenu();
	hideSurveyDialog();
	
	jQuery("#surveyForm").submit(function (event) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		jQuery("input[name*='doctor']").val(jQuery("input[name*='answer']").val()); 
		hideSurveyDialog();
		showCurrentMenu();
		return false;
	});
	
	// Открытие формы вопроса перед началом использования сайта
	// Условие - либо нет iPadID, либо в строке адреса нет параметров
	if(((typeof kioskpro_id === 'undefined') || !kioskpro_id.toString().split(" ").join(""))
	&& !url.attr("query") && !url.attr("fragment")) {
		showSurveyDialog();
	} else {
		showCurrentMenu();
	}

	jQuery("video").each(function(i,e) {
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
			alert("an error in playback.");
		}, false);
	});

	jQuery(".tubeplayer").each(function(i,e) {
		console.log('tubeplayer', 'init');
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
				alert("a video cant be found");
			}, // if a video cant be found
			onErrorNotEmbeddable: function(){
				alert("a video isnt embeddable");
			}, // if a video isnt embeddable
			onErrorInvalidParameter: function(){
				alert("we've got an invalid param");
			} // if we've got an invalid param
		});
	});
	
	// Инициализация для YouTube Player API
	if (jQuery(".ytplayer").length) {	
		console.log('ytplayer', 'init');
		// Load the IFrame Player API code asynchronously.
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	jQuery("input[name*='expected_delivery_date']").attr("type","date");
	jQuery("input[name*='due_date']").attr("type","date");
	jQuery("input[name*='phone']").attr("type","tel");
	jQuery("input[name*='mail']").attr("type","email");

	jQuery("label[id*='url']").parent().hide();
	jQuery("label[id*='ipad_id']").parent().hide();
	jQuery("input[id*='url']").parent().hide();
	jQuery("input[id*='ipad_id']").parent().hide();
	//jQuery("input[type='submit']").parent().hide();
	
	jQuery("input[name*='ipad_id']").val(getID());
	jQuery("input[name*='url']").val(jQuery(location).attr('href'));

	// Заполняем элементы ввода значениями переданными в параметрах
	url.attr("query").split("&").forEach(function (value,index) {
		var ar = value.split("=");
		jQuery("input[name*='"+ar[0]+"']").val(urldecode(ar[1]));
	});

	// Проверка встроенной поддержки для <input type="date">
	// Если нет встроенной поддержки для <input type="date">,
	// то заменяем <input type="date"> на <input type="text">
	if (!Modernizr.inputtypes.date) {
		jQuery("input[type='date']").attr("type","text");
	}
	
	// Обработка поля due_date если нет встроенной поддержки для <input type="date">
	jQuery("input[name*='due_date'][type='text']").focus(function(event) { 
		jQuery( "input[name*='due_date']" ).datepicker( 
			"dialog", 
			jQuery("input[name*='due_date']").val() , 
			function (date, inst) {
				jQuery("input[name*='due_date']").val(date);
			},
			{
				showButtonPanel: true
			}
		);
	});
	jQuery("input[name*='phone']").mask("(999) 999-9999");
	
	if (jQuery('#callbackForm input[type="submit"]').length==0) {
		jQuery("#callbackForm").validate();
	}
	
	console.log('unbind', 'start');
	jQuery(".mainmenu").unbind("vclick");
	jQuery(".mainmenu-link").unbind("vclick");
	jQuery(".save").unbind("vclick");
	jQuery(".next").unbind("vclick");
	jQuery(".prev").unbind("vclick");
	jQuery(".play").unbind("vclick");
	jQuery(".replay").unbind("vclick");
	jQuery(".home").unbind("vclick");
	jQuery(".contact").unbind("vclick");
	jQuery(".en-locale").unbind("vclick");
	jQuery(".es-locale").unbind("vclick");
	console.log('unbind', 'end');
	
	console.log('bind', 'start');
	jQuery(".mainmenu").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		jQuery("#mainmenu").toggle();
	});
	
	jQuery(".mainmenu-link").bind("vclick",function(event,ui) {
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
	jQuery(".save").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		if (jQuery('#callbackForm').valid()) {
			jQuery('#callbackForm').ajaxSubmit({
				timeout:   3000, 
				success:    function() { 
					hideCurrentMenu();
					currentIndex = 4;
        			clearForm();
					showCurrentMenu();
				},
				beforeSend:		function(xhr, settings) {
					console.log("xhr:",xhr);
					console.log("settings:",settings);
				},
				error:		function(xhr, textStatus, thrownError) {
					// Here's where you handle an error response.
    				// Note that if the error was due to a CORS issue,
    				// this function will still fire, but there won't be any additional
    				// information about the error.
					//alert("Error to send form");
					console.log("xhr:",xhr);
					console.log("textStatus:",textStatus);
					console.log("thrownError:",thrownError);
					
					crossDomainSubmit(jQuery('#callbackForm'));
					
					hideCurrentMenu();
					currentIndex = 4;
        			clearForm();
					showCurrentMenu();
				}
			});
		}
	});
	jQuery(".next").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = nextIndex(currentIndex);
        clearForm();
		showCurrentMenu();
	});
	jQuery(".prev").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = prevIndex(currentIndex);
        clearForm();
		showCurrentMenu();
	});
	jQuery(".play").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		showBuffering();
		playCurrentPlayer();
	});
	jQuery(".replay").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		showBuffering();
		currentIndex = prevIndex(currentIndex);
		playCurrentPlayer();
	});
	jQuery(".home").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = 0;
		showCurrentMenu();
	});
	jQuery(".contact").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentIndex = 3;
		showCurrentMenu();
	});
	jQuery(".en-locale").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentLanguage = "en";
		showCurrentMenu();
	});
	jQuery(".es-locale").bind("vclick",function(event,ui) {
		if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
		hideSurveyDialog();
		hideMainMenu();
		pauseCurrentPlayer();
		hideBuffering();
		hideCurrentMenu();
		currentLanguage = "es";
		showCurrentMenu();
	});
	console.log('bind', 'end');
});