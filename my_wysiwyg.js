$.fn.my_wysiwyg = function (tab){

 	var tab2 = Object.values(tab);

 	if(tab2[0].indexOf("bold") !== -1){
 		$(document).on('click','.fa-bold',function(){
      		(document).execCommand('bold');
		});
		$('<button class="fas fa-bold" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("italic") !== -1){
		$(document).on('click','.fa-italic',function(){
  			(document).execCommand('italic');
		});
		$('<button class="fas fa-italic" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("underline") !== -1){
		$(document).on('click','.fa-underline',function(){
				(document).execCommand('underline');
		});
		$('<button class="fas fa-underline" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("strikeThrough") !== -1){
		$(document).on('click','.fa-strikethrough',function(){
				(document).execCommand('strikeThrough');
		});
		$('<button class="fas fa-strikethrough" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("justify") !== -1){
		$(document).on('click','.fa-align-justify',function(){
				(document).execCommand('justifyFull');
		});
		$('<button class="fas fa-align-justify" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("right") !== -1){
		$(document).on('click','.fa-align-right',function(){
				(document).execCommand('justifyRight');
		});
		$('<button class="fas fa-align-right" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("right") !== -1){
		$(document).on('click','.fa-align-left',function(){
				(document).execCommand('justifyLeft');
		});
		$('<button class="fas fa-align-left" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("center") !== -1){
		$(document).on('click','.fa-align-center',function(){
				(document).execCommand('justifyCenter');
		});
		$('<button class="fas fa-align-center" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("undo") !== -1){
		$(document).on('click','.fa-undo',function(){
				(document).execCommand('undo');
		});
		$('<button class="fas fa-undo" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("redo") !== -1){
		$(document).on('click','.fa-redo',function(){
				  (document).execCommand('redo');
		});
		$('<button class="fas fa-redo" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("link") !== -1){
		$(document).on('click','.fa-link',function(e){
			var linkURL = prompt("Enter the URL for this link:", e.target.value);
			document.execCommand("createLink", false, linkURL); // renvoie le code HTML contenu dans ce bloc div
			document.execCommand("formatBlock", false, a);	  
		});
		$('<button class="fas fa-link" ></button>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("color_text") !== -1){
		$(document).on('click','#color_text',function(e){
	  		var color = e.target.value; 
     		document.execCommand('foreColor', false, color);
		});
		$('<input id="color_text" type="color"/>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("color_back") !== -1){
		$(document).on('click','#color_back',function(e){
	  		var color_b = e.target.value; 
     		document.execCommand('backColor', false, color_b);
		});
		$('<input id="color_back" type="color"/>').appendTo($('.buttons'));
	}

	if(tab2[0].indexOf("code") !== -1){
		$(document).on('click','.fa-code', function(){
	  		if ($('#code').hasClass("active")){
		      var htmlString = $(".editor").text();
		      $(".editor").html( htmlString );
		      $(".editor").css("background-color", "white").removeClass("code__color_important");
		      $('#code').removeClass("active");
		    }
		    else{
		      $('#code').addClass("active");
		      var htmlString = $(".editor").html();
		      $(".editor").css("background-color", "black").addClass("code__color_important");
		      $(".editor").text( htmlString );
		    }
		});
		$('<button id="code" class="fas fa-code"></button>').appendTo($('.buttons'));
	}


	if(tab2[0].indexOf("font_size") !== -1){
		$(document).on('click','.font_size-value',function(e){
	        var size = e.target.value;
      		document.execCommand("fontSize", false, size);
		});
		$('<select id="font_size-selector"></select>').appendTo($('.buttons'));
   		$("#font_size-selector").append("<option class='font_size-value' value='1'>xx-small</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='2'>x-small</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='3' selected>default</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='4'>medium</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='5'>large</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='6'>x-large</option>");
   		$("#font_size-selector").append("<option class='font_size-value' value='7'>xx-large</option>");
	}


   	if(tab2[0].indexOf("tag") !== -1){
		$(document).on('click','.tag-value',function(e){
	        var tag = e.target.value;
			document.execCommand('formatBlock', false, tag);
		});
		$('<select id="tag-selector"></select>').appendTo($('.buttons'));
   		$("#tag-selector").append("<option class='tag-value' value='h1'>h1</option>");
   		$("#tag-selector").append("<option class='tag-value' value='h2'>h2</option>");
   		$("#tag-selector").append("<option class='tag-value' value='h3'>h3</option>");
   		$("#tag-selector").append("<option class='tag-value' value='h4'>h4</option>");
   		$("#tag-selector").append("<option class='tag-value' value='h5'>h5</option>");
   		$("#tag-selector").append("<option class='tag-value' value='h6'>h6</option>");
   		$("#tag-selector").append("<option class='tag-value' value='pre'>code</option>");
 		$("#tag-selector").append("<option class='tag-value' value='p'>p</option>");
	}

};


$('div').my_wysiwyg({
  buttons: ['save', 'bold', 'italic', 'underline', 'strikeThrough', 'justify', 'right', 'left', 'center', 'undo', 'redo', 'link', 'color_text', 'color_back', 'code', 'font_size', 'tag' ],
});
