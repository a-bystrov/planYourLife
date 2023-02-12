//header
$('.header button'). mouseover(function(){
    $(this).css({
        'background-color':'white',
        'border-color':'#3A79FF'
      });
    }).
    mouseout(function(){
    $(this).css({
        'background-color':'#D2E1FF',
        'border-color':'white'
      });
});

$('.header .rightListHeader svg').mouseover(function(){
    $(this).css({
        'fill':'#3A79FF',
        });
    }).
    mouseout(function(){
    $(this).css({
        'fill':'#757E9A',
    });

});

$('.header .leftListHeader svg').mouseover(function(){
    $(this).css({
        'fill':'white',
        'stroke':'#3A79FF'
        });
    }).
    mouseout(function(){
    $(this).css({
        'fill':'#3A79FF',
        'stroke':'white'
    });
})

$('.header a').mouseover(function(){
    $(this).css({
        'color':'#3A79FF',
        });
    }).
    mouseout(function(){
    $(this).css({
        'color':'#757E9A',
    });
})

//heroImage
$('.heroImage').mouseover(function(){
    $(this).css({
        'box-shadow':'0 0 10px rgba(0,0,0,0.5)',
        });
    }).
    mouseout(function(){
    $(this).css({
        'box-shadow':'none',
    });
})

window.setInterval(function(){
    $('.heroImage div').slice(0,3).each(function(){
        if(display = $(this).css('display')=='block'){
                $(this).trigger('click')
            };
        });
    $('.heroImage').trigger('click')
}, 4000);

function fillDot(indexDot){
    $('.slaiderDots svg').css('fill', '#D1D6E3');
    $('.slaiderDots svg').eq(indexDot).next().css('fill', '#5283FF');
    if(indexDot==2){
        $('.slaiderDots svg').first().css('fill', '#5283FF');
    }
};

$('.heroImage div').click(function(){
    $(this).fadeOut(500, function(){
        if($(this).index()==2) {
            $(this).siblings().first().fadeIn(500);
        }
        else {
            $(this).next('div').fadeIn(500)
        };
        
        switch($(this).index()) {
            case 0: 
                fillDot(0);
                break;
            case 1:
                fillDot(1);
            break;
            case 2:
                fillDot(2);
            break;
        }
        
    }) 
})

$('.slaiderDots svg').click(function(e){
    e.stopPropagation();
    let display;
    function fadeHeroImage(indexHero){
        $('.heroImage div').slice(0,3).each(function(index){
            if(display = $(this).css('display')=='block'){
                    $(this).fadeOut(500,function(){
                        $('.heroImage div').eq(indexHero).fadeIn(500);
                    });
                };
            });
            $('.slaiderDots svg').css('fill', '#D1D6E3');
            $('.slaiderDots svg').eq(indexHero).css('fill', '#5283FF');
    }
    switch($(this).index()) {
        case 0: 
            fadeHeroImage(0);
            break;
        case 1:
            fadeHeroImage(1);
        break;
        case 2:
            fadeHeroImage(2);
        break;
    }
});

//customers
$('.customers svg'). mouseover(function(){
    $(this).children().css({
        'fill':'#5982E7',
      });
    }).
    mouseout(function(){
    $(this).children().css({
        'fill':'#D6DAE5',
      });
});

//blog
$('.blog .buttonReadNow'). mouseover(function(){
    $(this).css({
        'background-color':'white',
        'border-color':'#3A79FF'
      });
    }).
    mouseout(function(){
    $(this).css({
        'background-color':'#D2E1FF',
        'border-color':'white'
      });
});

$('.blog .buttonAddToBookmarks').  mouseover(function(){
    $(this).css({
        'color':'#3A79FF',
      });
    }).
    mouseout(function(){
    $(this).css({
        'color':'#A6B6DA',
      });
});

$('.howToStart img').click(function(){
    if($(this).attr('src') == 'images/howToStart/hts1.png'){
        $(".zoomInImage img").attr("src", 'images/howToStart/hts1(2).png');
    }
    else {
    $(".zoomInImage img").attr("src", $(this).attr('src'));
    }
    $('.zoomInImage').css({
        'display':'flex',
    });
});

$('.zoomInImage svg').click(function(){
    $('.zoomInImage').css({
        'display':'none',
    });
});

//newsletter
$('.newsletter button').mouseover(function(){
    $(this).css({
        'color':'#4D6CE1',
        'border':'2px solid #4D6CE1',
        'background-color':'white'
      });
    }).
    mouseout(function(){
    $(this).css({
        'color':'white',
        'border':'none',
        'background-color':'#4D6CE1'
      });
});

// Registration
$('.registration button').mouseover(function(){
    $(this).css({
        'color':'#4D6CE1',
        'border':'2px solid #4D6CE1',
        'background-color':'white'
      });
    }).
    mouseout(function(){
    $(this).css({
        'color':'white',
        'border':'none',
        'background-color':'#4D6CE1'
    });
});

$(".registration [name='ConfirmPassword']").on("keyup", function() { // Выполняем скрипт при изменении содержимого 2-го поля
    var value_input1 = $(".registration [name='Password']").val(); // Получаем содержимое 1-го поля
    var value_input2 = $(this).val(); // Получаем содержимое 2-го поля
    if(value_input1 != value_input2) { // Условие, если поля не совпадают
        $(".error").html("Passwords don't match!"); // Выводим сообщение
        $(".registration button").attr("disabled", "disabled"); // Запрещаем отправку формы
    } else { // Условие, если поля совпадают
        $(".registration button").removeAttr("disabled");  // Разрешаем отправку формы
        $(".error").html(""); // Скрываем сообщение
    }
});