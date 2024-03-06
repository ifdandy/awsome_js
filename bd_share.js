(function() {
    window.task = document.getElementsByTagName('a');
    window.share_num = 0;
    window.share_timer = null;
    setTimeout(function () {
        bd_share(false)
    }, 1500);
    window.share_timer = setInterval(function() {
        if(window.share_num > 5){
            clearInterval(window.share_timer);
            return true;
        }
        bd_share($(window.task[window.share_num]).href)
        window.share_num ++;
    },4500);
    function bd_share(share_url) {
        curProtocol = window.location.href.split(':')[0]
        var n = (String(curProtocol).toLowerCase() === 'https') ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif": "//api.share.baidu.com/s.gif";
        if(share_url){
            n += "?r=" + encodeURIComponent(window.location.href), share_url && (n += "&l=" + share_url)
        }else{
            t = document.referrer;
            t ? (n += "?r=" + encodeURIComponent(document.referrer), n += "&l=" + window.location.href) : n += "?l=" + window.location.href;
        }
        var i = new Image;
        i.src = n
    }
})();
