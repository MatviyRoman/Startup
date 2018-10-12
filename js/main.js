$(window).on('load', function(){
    $(".link a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }  /*speed*/  );
    });
});

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
    });
    $('.aboutUs .socialIcon2').hover(function(){
        $('.aboutUs .socialIcon2').show();
    });
    $('.aboutUs .socialIcon3').hover(function(){
        $('.aboutUs .socialIcon3').show();
    });
    $('.aboutUs .socialIcon4').hover(function(){
        $('.aboutUs .socialIcon4').show();
    });
});
    





var token = '2500bb580a04415b915df338d1493e2c', // learn how to obtain it below
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


/*for ( i in data) {
  $('ul#photos').append('<li><img src="'+data[i]).photo.src + '"></li>';
};*/