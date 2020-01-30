$(document).ready(function(){
    
    loadJSON('GET', 'https://api.myjson.com/bins/137x9p', function(res){
        render($('#main-jobs-template').html(), '.job-main', res);
        render($('#our-team').html(), '.team', res);
    });
    
    function loadJSON (type, url, callback){
        $.ajax({
            'type': type,
            'url': url,
            'success': callback,
        });

    }
    function render(t, id, data){
        var template = Handlebars.compile(t);
        var html = template(data);
        $(id).append(html);
    };


})