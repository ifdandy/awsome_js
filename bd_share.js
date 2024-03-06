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
        var randomNum = Math.floor(Math.random() * 100) + 1;
        if(randomNum > 50){
            bd_share(window.task[window.share_num].href);
            window.share_num ++;
        }
    },4500);
    function bd_share(share_url) {
        curProtocol = window.location.href.split(':')[0];
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
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
(function(){
var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
(function(){
var el = document.createElement("script");
el.src = "https://sf1-scmcdn-tos.pstatp.com/goofy/ttzz/push.js?d9e55c4fdd4e5133ca15a61aea2eed8366400d87a35e0af2f1a2b58df59ac772932b0e7039e2d26f282318ad3ff64a5277708db420e28cf4c4dfa77352ac31212b8d7c8c6655c9b00211740aa8a98e2e";
el.id = "ttzz";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(el, s);
})(window);
