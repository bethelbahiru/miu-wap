$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.ajax({ url: 'http://localhost:8080/look', data: , dataType: 'json'}).done(function (result) {
            console.log(result);
        })
    });
});