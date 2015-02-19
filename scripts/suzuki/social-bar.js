$(document).ready(function(){
    var bar_template = '<div class="social-bar"><div class="social-links">' +
        '<div class="social-link"><a href="https://www.facebook.com/pages/Suzuki-Colima/415132885190230"  class="facebook"  onclick="push_social('+"'Facebook'"+');"  target="_blank"><span>Facebook </span></a></div>'+
        '</div></div>';
    $('body').prepend( bar_template );
});
