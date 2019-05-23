var chatbox = [
        "<div class='chatbot-box'>'",
            "<div class='chatbot-frame'><iframe style='width:100%;height:100%;border:none' ",
                "src='https://www.coginsight.net/service/#/70c02999-b655-4937-ad28-58546bb00f54'></iframe>",
                "<button class='close'><img src='assets/img/btn_down_02_n.png'/></button>",
            "</div>",
            
        "</div>"].join('');
    var chatbtn = "<button class='chatbot-start'><img src='assets/img/intro_icon.png'/></button>"

    $(chatbox).appendTo('body');
    $(chatbtn).appendTo('body');


    $(".chatbot-start").click(function(){
        $('.chatbot-start').css('display','none')   
        $('.chatbot-box').css('display','block')
        $('.chatbot-frame').animate({top:"0px"})
    })

    $(".close").click(function(){
        $('.chatbot-frame').animate({top:"615px"},function(){
            $('.chatbot-box').css('display','none')
            $('.chatbot-start').css('display','block')   
        })
    })