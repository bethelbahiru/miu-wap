$(document).ready(function () {
    
    $('#lookup').click(function(event) {
    
        $.ajax({ url: 'http://localhost:8080/look', 
                type: "POST" ,
                data: { word: $('#words').val()} , 
                dataType: 'json',
                success: function(result) {
                    console.log(result.result);
                   alert('')
                }})
    });
});