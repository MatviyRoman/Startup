var token = '14e97068cd384280a282730ea9dcd777', // learn how to obtain it below
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