$(document).ready(function(){
    $('#generate').click(function(){
        var url = $('#url')[0].value;
        var like_url = 'http://www.facebook.com/plugins/like.php?href='+encodeURIComponent(url)+'&show_faces=true&width=55&action=like&colorscheme=light&layout=box_count;appId=683362905063167';
        var ifr = $('<iframe>', {src: like_url, height: '70px', width: '60px', frameborder: '0', border: 'none', alloTransparency: 'true'})
        var display_url = $('<div>');
        display_url.append(url);
        $('#ifr').empty().append(ifr);
        $('#display_url').append(display_url);
    });

    $('#reset').click(function(){
        $('#url')[0].value = '';
        $('#ifr').empty();
        $('#display_url').empty();
    });
});
