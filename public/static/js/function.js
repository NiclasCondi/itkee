/**
 * 动态加载css文件
 * @param css_filename css文件路径
 */
function loadCss(css_filename) {
    var link = document.createElement('link');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', css_filename);
    link.setAttribute('href', css_filename);
    link.setAttribute('rel', 'stylesheet');
    css_id = document.getElementById('auto_css_id');
    if (css_id) {
        document.getElementsByTagName('head')[0].removeChild(css_id);
    }
    document.getElementsByTagName('head')[0].appendChild(link);
}

//JS操作cookies方法!
//写cookies
function addCookie(name,value,expireHours){
    var cookieString=name+"="+escape(value)+"; path=/";
    //判断是否设置过期时间
    if(expireHours>0){
        var date=new Date();
        date.setTime(date.getTime()+expireHours*3600*1000);
        cookieString=cookieString+";expires="+date.toGMTString();
    }
    document.cookie=cookieString;
}

function getCookie(name){
    var strcookie=document.cookie;
    var arrcookie=strcookie.split("; ");
    for(var i=0;i<arrcookie.length;i++){
        var arr=arrcookie[i].split("=");
        if(arr[0]==name)return unescape(arr[1]);
    }
    return null;
}

function delCookie(name){//删除cookie
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}

