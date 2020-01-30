$(document).ready(function(){
    
    loadJSON('GET', 'https://api.myjson.com/bins/b6eod', function(res){
        render($('#job-table').html(), '.main-table', res);
        render($('#main-jobs-template').html(), '.job-main', res);
    });
    // about//
    loadJSON('GET', 'https://api.myjson.com/bins/b6eod', function(res){
        render($('#main-jobs').html(), '.jobs', res);
    });
    loadJSON('GET', 'https://api.myjson.com/bins/et5gt', function(res){
        render($('#co-worker').html(), '.team', res);
    });
    // about//
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

    $('#example').DataTable();

})