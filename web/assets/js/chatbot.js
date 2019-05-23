
	var chatbox =
        [
        "<div class='chatbot-box' style='width:420px;height:743px' id='chat_div'>",
            "<div class='chatbot-frame' style='width:100%;height:100%'><iframe style='width:100%;height:100%;border:none' ",
                "src='https://www.coginsight.net/service/#/ba2b24ba-548f-4287-b392-554fc966b9d4?origin=*'></iframe>",
                "<button class='close'><img src='assets/img/btn_down_02_n.png'/></button>",
            "</div>",
            
        "</div>"].join('');
    var chatbtn = "<button class='chatbot-start'><img src='assets/img/intro_icon.png'/></button>"

	$(chatbox).appendTo('body');
    $(chatbtn).appendTo('body');

	var start = function() {
		$('.chatbot-start').css('display','none')   
        $('.chatbot-box').css('display','block')
        $('.chatbot-frame').animate({top:"0px"})
		$(".chat-scroll").scrollTop($(document).height());
	}
	var close = function() {
		$('.chatbot-frame').animate({top:"615px"},function(){
            $('.chatbot-box').css('display','none')
            $('.chatbot-start').css('display','block')   
        })
	}

	function ko_chatbot() {
		$('#chat_div').empty();
		var ap = [
			"<div class='chatbot-frame' style='width:100%;height:100%'><iframe style='width:100%;height:100%;border:none' ",
				"src='https://www.coginsight.net/service/#/ba2b24ba-548f-4287-b392-554fc966b9d4?origin=*'></iframe>",
			"<button class='close'><img src='assets/img/btn_down_02_n.png'/></button></div>"
				].join('');
		$('#chat_div').append(ap);
		$('.chatbot-start').click(start);
		$('.close').click(close);
	}
	function en_chatbot() {
		$('#chat_div').empty();
		var ap =  [
			"<div class='chatbot-frame' style='width:100%;height:100%'><iframe style='width:100%;height:100%;border:none' ",
				"src='https://www.coginsight.net/service/#/ba2b24ba-548f-4287-b392-554fc966b9d4?origin=*'></iframe>",
			"<button class='close'><img src='assets/img/btn_down_02_n.png'/></button></div>"
				].join('');
		$('#chat_div').append(ap);
		$('.chatbot-start').click(start);
		$('.close').click(close);
	}
	function zh_chatbot(){
		$('#chat_div').empty();
		var ap =  [
			"<div class='chatbot-frame' style='width:100%;height:100%'><iframe style='width:100%;height:100%;border:none' ",
				"src='https://www.coginsight.net/service/#/ba2b24ba-548f-4287-b392-554fc966b9d4?origin=*'></iframe>",
			"<button class='close'><img src='assets/img/btn_down_02_n.png'/></button></div>"
				].join('');
		$('#chat_div').append(ap);
		$('.chatbot-start').click(start);
		$('.close').click(close);
	}
