
let myName = document.querySelector("#myName")
myName.innerHTML= prompt("Adınız nedir?")



var css_file = document.createElement("link");
css_file.setAttribute("rel", "stylesheet");
css_file.setAttribute("type", "text/css");
css_file.setAttribute("href", "https://s.bookcdn.com//css/cl/bw-cl-100x100.css?v=0.0.1");
document.getElementsByTagName("head")[0].appendChild(css_file); 

function setWidgetData_1672975113(data) {
    if (typeof (data) != 'undefined' && data.results.length > 0) {
        for (var i = 0; i < data.results.length; ++i) {
            var objMainBlock = '';
            var params = data.results[i];
            objMainBlock = document.getElementById('tw_' + params.widget_type + '_' + params.widget_id);
            if (objMainBlock !== null)
                objMainBlock.innerHTML = params.html_code;
        }
    }
}
var clock_timer_1672975113 = -1;
widgetSrc = "https://widgets.booked.net/time/info?ver=2;domid=765;type=4;id=1672975113;scode=124;city_id=26063;wlangid=21;mode=0;details=0;background=c9207b;border_color=ffffff;color=ffffff;add_background=ffffff;add_color=c9207b;head_color=ffffff;border=0;transparent=0";
var widgetUrl = location.href;
widgetSrc += '&ref=' + widgetUrl;
var wstrackId = ""; if (wstrackId) { widgetSrc += ';wstrackId=' + wstrackId + ';' } var timeBookedScript = document.createElement("script"); timeBookedScript.setAttribute("type", "text/javascript"); timeBookedScript.src = widgetSrc; document.body.appendChild(timeBookedScript); 