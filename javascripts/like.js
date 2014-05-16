$(document).ready(function(){
    $('#generate').click(function(){
        var url = $('#url')[0].value;
        var like_url = 'http://www.facebook.com/plugins/like.php?href='+encodeURIComponent(url)+'&show_faces=true&width=450&action=like&colorscheme=light';
        var ifr = $('<iframe>', {src: like_url, height: '70px'})
        var display_url = $('<div>');
        display_url.append(url);
        $('#ifr').empty().append(ifr).append(display_url);
    });
});
