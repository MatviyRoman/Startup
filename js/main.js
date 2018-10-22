// ScrollUp To Home, Show & Hide Home
$(function(){
    $(".scrollUp a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }  /*speed*/  );
    });
    $('#home, #home .scrollUp').hover(function(){
        $('.scrollUp').hide();
    }, function(){
        $('.scrollUp').show();
    });
});


/*trigger scrollUp*/
$(function(){
    $('header').trigger('hover');
    $('header').trigger('mouseenter');
    $('header').trigger('mouseover');
});


/*Animate To Animate*/
$(window).on('load', function(){
    $(".link a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }  /*speed*/  );
    });
});


/*Header Modal Get Started*/
$(window).ready(function(){
    $('header .getStarted').click(function(){
        $('header #getStarted').show();
    })
    $('header #getStarted button').click(function(){
        $('header #getStarted').hide();
    })
    $('header .getStarted').trigger('click');
})


/*Hover (Show & Hide) Team Social Icon*/
$(document).ready(function(){
    $('.aboutUs .team1 img').hover(function(){
        $('.aboutUs .socialIcon1').show();
        $('.aboutUs .socialIcon2').hide();
        $('.aboutUs .socialIcon3').hide();
        $('.aboutUs .socialIcon4').hide();
        $('.aboutUs .prev').css("background-color", "#8f8f8f");
    }, function(){
        $('.aboutUs .socialIcon1').hide();
        $('.aboutUs .prev').css("background-color", "#c0301c");
    });
    $('.aboutUs .team2 img').hover(function(){
        $('.aboutUs .socialIcon1').hide();
        $('.aboutUs .socialIcon2').show();
        $('.aboutUs .socialIcon3').hide();
        $('.aboutUs .socialIcon4').hide();
    }, function(){
        $('.aboutUs .socialIcon2').hide();
    });
    $('.aboutUs .team3 img').hover(function(){
        $('.aboutUs .socialIcon1').hide();
        $('.aboutUs .socialIcon2').hide();
        $('.aboutUs .socialIcon3').show();
        $('.aboutUs .socialIcon4').hide();
    }, function(){
        $('.aboutUs .socialIcon3').hide();
    });
    $('.aboutUs .team4 img').hover(function(){
        $('.aboutUs .socialIcon1').hide();
        $('.aboutUs .socialIcon2').hide();
        $('.aboutUs .socialIcon3').hide();
        $('.aboutUs .socialIcon4').show();
        $('.aboutUs .next').css("background-color", "#8f8f8f");
    }, function(){
        $('.aboutUs .socialIcon4').hide();
        $('.aboutUs .next').css("background-color", "#c0301c");
    });
    $('.aboutUs .socialIcon1').hover(function(){
        $('.aboutUs .socialIcon1').show();
        $('.aboutUs .prev').css("background-color", "#8f8f8f");
    });
    $('.aboutUs .socialIcon2').hover(function(){
        $('.aboutUs .socialIcon2').show();
    });
    $('.aboutUs .socialIcon3').hover(function(){
        $('.aboutUs .socialIcon3').show();
    });
    $('.aboutUs .socialIcon4').hover(function(){
        $('.aboutUs .socialIcon4').show();
        $('.aboutUs .next').css("background-color", "#8f8f8f");
    });
});


/*Active Links Works Click*/
$(window).on('load', function(){
    $('.works a').click(function() {
    $('.works a').removeClass('active');
    $(this).addClass('active');
    });
});


/*Show & Hide Modal*/
$(window).ready(function(){
    $('.paralax button').click(function(){
        $('.paralax .modal').show();
    });
    $('.paralax .modal button').click(function(){
        $('.paralax .modal').hide();
    });
});


/*Work Show & Hide Text & Button*/
$(window).on('load', function(){
    $('.work1 img').hover(function(){
        $('.work1 .text').show();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work1 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work2 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').show();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work2 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work3 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').show();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work3 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work4 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').show();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
    $(this).css('opacity','0.6');
    }, function(){
        $('.work4 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work5 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').show();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
    $(this).css('opacity','0.6');
    }, function(){
        $('.work5 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work6 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').show();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
    $(this).css('opacity','0.6');
    }, function(){
        $('.work6 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work7 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').show();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work7 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work8 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').show();
        $('.work9 .text').hide();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work8 .text').hide();
        $(this).css('opacity','1');
    })
    $('.work9 img').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').show();
        $(this).css('opacity','0.6');
    }, function(){
        $('.work9 .text').hide();
        $(this).css('opacity','1');
    })
});


/*Work Hover Text & Opacity Image*/
$(window).on('load', function(){
    $('.work1 .text').hover(function(){
        $('.work1 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work1 img').css('opacity','1');
    })
    $('.work2 .text').hover(function(){
        $('.work2 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work2 img').css('opacity','1');
    })
    $('.work3 .text').hover(function(){
        $('.work3 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work3 img').css('opacity','1');
    })
    $('.work4 .text').hover(function(){
        $('.work4 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work4 img').css('opacity','1');
    })
    $('.work5 .text').hover(function(){
        $('.work5 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work5 img').css('opacity','1');
    })
    $('.work6 .text').hover(function(){
        $('.work6 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work6 img').css('opacity','1');
    })
    $('.work7 .text').hover(function(){
        $('.work7 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work7 img').css('opacity','1');
    })
    $('.work8 .text').hover(function(){
        $('.work8 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work8 img').css('opacity','1');
    })
    $('.work9 .text').hover(function(){
        $('.work9 img').css('opacity','0.6');
        $(this).show();
    }, function(){
        $('.work9 img').css('opacity','1');
    })
});


/*Work Hover Text & Opacity Image*/
$(window).on('load', function(){
    $('#works').hover(function(){
        $('.work1 .text').hide();
        $('.work2 .text').hide();
        $('.work3 .text').hide();
        $('.work4 .text').hide();
        $('.work5 .text').hide();
        $('.work6 .text').hide();
        $('.work7 .text').hide();
        $('.work8 .text').hide();
        $('.work9 .text').hide();
    })
});


/*Blog blogPost1 Hover*/
$(function(){
    $('.blog .blogPost1').hover(function(){
        // $('.blog .blogPost1 h2, .blogpost1 span').css({"color":"#c0301c","margin":"50"});
        $('.blogPost1 h2, .blogPost1 span').css('color','#c0301c');
    }, function(){
        $('.blogPost1 h2, .blogPost1 span').css('color', '#555555');
    })
});

/*trigger blogPost1*/
$(function(){
    $('.blog .blogPost1').trigger('hover');
    $('.blog .blogPost1').trigger('mouseenter');
    $('.blog .blogPost1').trigger('mouseover');
});

/*Blog blogPost2 Hover*/
$(function(){
    $('.blog .blogPost2').hover(function(){
        $('.blogPost2 h2, .blogPost2 span').css('color','#c0301c');
    }, function(){
        $('.blogPost2 h2, .blogPost2 span').css('color', '#555555');
    })
});


/*Date header & footer*/
var updateTime = function(dateTime){

    var date = new Date();

    var val = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    $('.showDate1').text(val);

    var val = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    $('.showDate2').text(val);

    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL",
    "AUG","SEP","OCT","NOV","DEC"];

    var val = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    $('.showDate3').text(val);

    var val = date.getFullYear();
    val -= 8;
    $('.date').text('© ' + val + ' Startup, Designed by ShapedTheme');

    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    var timeHours = [
    '00','01','02','03','04','05','06',
    '07','08','09','10','11','12','13',
    '14','15','16','17','18','19','20',
    '21','22','23','24'];

    var timeMin = [
    '00','01','02','03','04','05','06',
    '07','08','09','10','11','12','13',
    '14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27',
    '28','29','30','31','32','33','34',
    '35','36','37','38','39','40','41',
    '42','43','44','45','46','47','48',
    '49','50','51','52','53','54','55',
    '56','57','58','59','60'];

    var timeSec = [
    '00','01','02','03','04','05','06',
    '07','08','09','10','11','12','13',
    '14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27',
    '28','29','30','31','32','33','34',
    '35','36','37','38','39','40','41',
    '42','43','44','45','46','47','48',
    '49','50','51','52','53','54','55',
    '56','57','58','59','60'];

    var time = timeHours[date.getHours()] + ':' + timeMin[date.getMinutes()] + ':' + timeSec[date.getSeconds()];

    $('.time').text(time);


    var dateName = new Date();
    var weekday = new Array(7);
    weekday[0] =  'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    var nameDay = weekday[dateName.getDay()];

    $('.nameDay').text(nameDay);
}

setInterval(updateTime,1000);


/*Animation getStart*/

// var myStart = function myStart() {

    $(function(getStart){
        $('#getStarted').animate({
            width: '-=50px',
            height: '-=50px',
            opacity: 1
        }, 1000);
        $('#getStarted').animate({
            width: '+=50px',
            height: '+=50px',
            opacity: 0
        }, 1000);
    })
// }

// setInterval(myStart, 1000);



/*My Animation*/
var setInt = function(){
    $('.getStarted').click(function(){
        // $('#getStarted').show();
    $('#getStarted').animate({
        width: '+=100px',
        height: '+=100px',
        fontSize: '30px',
        opacity: '0.5',
        top: '400px'
    }, 3000);

    $('#getStarted').animate({
        width: '-=100px',
        height: '-=100px',
        fontSize: '15px',
        opacity: '1',
        top: '-140px'
    }, 1000);
    })
}

setInterval(setInt, 1000);
setTimeout(setInt, 1000);


$(function(){
    $('header nav .linkMenu').click(function(){
        $('header nav .link').slideToggle(1000);
    })
})



/*Work Show & Hide Text & Button*/
// $(window).on('load', function(){
//     $('.works .capsula').hover(function(){
//         $('.works .text').toggle();
//     });
//     $('.works .text').hover(function(){
//         $('.works img').css('opacity', '0.7');
//     }, function(){
//         $('.works img').css('opacity', '1.0');
//     });
//     $('.works img').hover(function(){
//         $(this).css('opacity', '0.7');
//     }, function(){
//         $(this).css('opacity', '1.0');
//     });
// });


// $('.works img').hover(function(){
//         $(this).css('opacity', '0.7');
//         $('.works .text').show();
//     }, function(){
//         $(this).css('opacity', '1.0');
//         $('.works .text').hide();
// });


// $('.works img').hover(function(){
//         $(this).css('opacity', '0.7');
//         $('.works .text').show();
//     }, function(){
//         $(this).css('opacity', '1.0');
//         $('.works .text').hide();
//     });


// $('.works .capsula').children().hover(function(){
//         $(this).css('background', '#c0301c');
//         $((this),$('.works .text')).show();
//     }, function(){
//         $(this).css('background', 'none');
//         $(this).children().hide();
//     });


// $('.works .text').hover(function(){
//         $(this '.works img').css('opacity', '0.7');
//         $('.works .text').show();
//     }/*, function(){
//         $(this).css('opacity', '1.0');
//         $('.works .text').hide();
// }*/);

/*$('.work .text').hover(function(event) {
    event.preventDefault();

});*/




var token = '53de552232da47c198d82e3ce3498d79', // learn how to obtain it below
    userid = 22306463, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4; // how much photos do you want to get

function getInstaPhotos() {
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: token,
            count: num_photos
        },
        success: function(data) {
            console.log(data);

            for (i in data.data) {
                $('ul#photos').append('<li><img src="' + data[i]).photo.src + '"></li>';
            };
        },
        error: function(data) {
            console.log(data); // send the error notifications to console
        }
    });
};


$('.getInstaPhotos').click(function(event) {
    event.preventDefault();

    getInstaPhotos();

});