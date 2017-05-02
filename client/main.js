import './main.html';

// Auto Focus on this input so you can directly ctrl + v
$('.urlinput').focus();

Template.Home.events({
    'click .urlBUTTTT': function(e, tmpl) {
        e.preventDefault();
        console.log(".urlSubmit clicked");

        var url = $('.urlinput').val();
        console.log("Var url assigned : " + url);

        UrlShortener.shorten(url, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                // This isn't required I am just demonstrating that you can set a
                // session variable to the value of res.path which is useful for
                // displaying the new short url to the user
                Session.set('shortUrl', res.path);

                // Clear the input value
                $('.urlinput').val('');
            }
        });


    }
});