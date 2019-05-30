var App = function () {
    this.controller = "";
    this.method = "";
    this.printMethod = "Print";
    this.outputMethod = "OutputExcel";
    this.url = "";
    this.form = "#form1";
    this.tb = null;
    this.fields = {};
    this.popup = true;
    this.showpop = function () { };
    this.dialog = {
        width: 600,
        height: 350,
        title: "查询", 
        callback:function(){},
        src: "",
        template:""
    };  
};

App.prototype.init = function () {
    this.fields = $(this.form).serializeJson();
};

App.prototype.bindForm = function () {
    $.getJSON(this.url, function (data) {
        $.each(this.fields, function (j, k) {
            $('#' + k.id).val(data[k.id]);
        });
    });
};

App.prototype.setStatus = function (url, self) {
    url = url + "?rd=" + Math.random();
    $.getJSON(url, function (data) {
        alert(data.code);
        if (data.code == "1") {
            self.children().eq(0).attr('class', 'icon-ok');
        } else {
            self.children().eq(0).attr('class', 'icon-no');
        }
    })
}


App.prototype.getWinHeight = function () {
    return $(window).height();
}

//获取 URL 中传递的参数
App.prototype.geturlval = function (name) {

    var s = location.href;
    s = s.replace("?", "?&").split("&");  //这样可以保证第一个参数也能分出来  

    var result = "";
    for (i = 1; i < s.length; i++) {
        if (s[i].indexOf(name + "=") == 0)
            result = s[i].replace(name + "=", "");  //取代前面的参数名，只剩下参数值  
    }
    return result;
};

//获取 URL 中传递的参数
App.prototype.getlinkval = function (s,name) {
   
    s = s.replace("?", "?&").split("&");  //这样可以保证第一个参数也能分出来  

    var result = "";
    for (i = 1; i < s.length; i++) {
        if (s[i].indexOf(name + "=") == 0)
            result = s[i].replace(name + "=", "");  //取代前面的参数名，只剩下参数值  
    }
    return result;
};

//获取 URL 中传递的参数后的所有值
App.prototype.geturlbyname = function (name) {
    var s = location.href;
    var pos = s.indexOf(name);
    var result = "";
    if (pos > 0) {
        result = s.substring(pos + (name.length + 1), s.length);
    }
    return result;
}

App.prototype.formartDate = function (t) {
    if (t == null)
        return "";
    var value = t.replace(/\/Date\((-?\d+)\)\//, '$1'); //标红的这段是关键代码，将那个长字符串的日期值转换
    date = new Date();
    date.setTime(value);
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate;
};

App.prototype.formartDetailDate = function (t) {
    if (t == null)
        return "";
    var value = t.replace(/\/Date\((-?\d+)\)\//, '$1'); //标红的这段是关键代码，将那个长字符串的日期值转换
    date = new Date();
    date.setTime(value);
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    return date.getFullYear() + "-" + month + "-" + currentDate + " " + hh + ":" + mm;
};

App.prototype.getTableDate = function (file_name) {
    var data = [];
    if (file_name != "") {
        var jsonStr = "{\"total\":1," + "\"rows\":" + file_name + "}";
        data = eval('(' + jsonStr + ')');
    }
    return data;
}

App.prototype.formatTitle = function (title, max) {
    var nTitle = title.substring(0, max);
    return nTitle;
};

App.prototype.formatChar = function (char) {
    if (char != "") {
        char = char.substr(0, char.length - 1);
    }
    return char;
};

App.prototype.wapChar = function (title, suff, max) {
    if (title.length < max) {
        title = suff + title;
    }
    return title;
};

//js 显示友好的时间格式 变量dateTimeStamp为时间戳
App.prototype.getDateDiff = function (dateTimeStamp) {

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;

    var now = new Date().getTime();
    //var time_sec = Math.floor(now/1000);
    var diffVal = now - parseInt(dateTimeStamp) * 1000;
    if (diffVal < 0) {
    }

    var currentMonth = diffVal / month;
    var currentWeek = diffVal / (7 * day);
    var currentDay = diffVal / day;
    var currentHour = diffVal / hour;
    var currentMin = diffVal / minute;

    if (currentMonth >= 1) {
        result = parseInt(currentMonth) + "月前";
    }
    else if (currentWeek >= 1) {
        result = parseInt(currentWeek) + "周前";
    }
    else if (currentDay >= 1) {
        result = parseInt(currentDay) + "天前";
    }
    else if (currentHour >= 1) {
        result = parseInt(currentHour) + "小时前";
    }
    else if (currentMin >= 1) {
        result = parseInt(currentMin) + "分钟前";
    } else
        result = "刚刚";
    return result;
};

App.prototype.Timer = function (options) {
    var defaultVal = {
        maxtime: 6,
        onStart: function (seconds) {
            alert(seconds);
        },
        onEnd: function () { }
    };
    var obj = $.extend(defaultVal, options);
    var timer = null;
    return {
        start: function () {
            timer = setInterval(function () { CountDown() }, 1000);
            function CountDown() {
                if (obj.maxtime >= 0) {
                    obj.onStart(obj.maxtime);
                    obj.maxtime = obj.maxtime - 1;
                }
                else {
                    clearInterval(timer);
                    obj.onEnd();
                }
            }
        },
        finish: function () {
            clearInterval(timer);
            obj.onEnd(obj.maxtime);
        }
    };
};

App.prototype.objs = (function () {
    var items = [];
    return {
        add: function (i, obj) {
            items[i] = obj;
        },
        get: function (i) {
            return items[i];
        },
        remove: function (i) {
            //var index = i - 1;
            items.splice(i, 1);
        },
        removeAll: function () {
            items = [];
        },
        length: function () {
            return items.length;
        },
        exists: function (id) {
            if (typeof (items[id]) == "undefined") return false;
            return true;
        }
    }
})();

App.prototype.websocket = function (options) {
    var defaults = {
        domain: top.location.hostname,
        port: 3398,
        protocol: "",
        onOpen: function (socket) { },
        onMessage: function (msg) { },
        onClose: function () { }
    };
    var opts = $.extend(defaults, options);
    var url = "ws://" + opts.domain + ":" + opts.port;
    var socket = false;
    return {
        init: function () {
            socket = new WebSocket(url);
            socket.onopen = function () {
                if (socket.readyState == 1) {
                    opts.onOpen(socket);
                }
            };
            socket.onclose = function () {
                socket = false;
                opts.onClose();
            };
            socket.onmessage = function (msg) {
                opts.onMessage(msg);
            };
        },
        send: function (msg) {
            if (!socket) {
                this.init();
            }
            socket.send(msg);
            return true;
        }
    }
};

App.prototype.cookiers = function () {
    var today = new Date();
    var expire = new Date();
    return {
        set: function (name, value, ts) {
            expire.setTime(today.getTime() + 1000 * ts);
            window.document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()));
        },
        get: function (name) {
            var search = name + "=";
            if (window.document.cookie.length > 0) { // if there are any cookies   
                offset = window.document.cookie.indexOf(search);
                if (offset != -1) { // if cookie exists   
                    offset += search.length;
                    // set index of beginning of value   
                    end = window.document.cookie.indexOf(";", offset);
                    // set index of end of cookie value  
                    if (end == -1)
                        end = window.document.cookie.length;
                    return unescape(window.document.cookie.substring(offset, end));
                }
            }
            return null;
        },
        rm: function (key, context) {
        },
        clear: function () {
        }
    };
};

App.prototype.getServerUrl = function () {
    var remoteUrl = "http://" + window.location.host;
    return remoteUrl;
}

App.prototype.initConfig = function (options) {
    var app = this;

    var defaults = {
        toolbar: [{},{},{},{},{},{
            icon: 'icon-remove',
            elemevent: function () {
                var id = "";
                $('input[type=checkbox]:checked').each(function () {
                    id += $(this).val() + ",";
                })
                if (id == "" || id == undefined) {
                    $.Toast.error("请先选中值");
                    return;
                }
                id = app.formatChar(id);
                $.easypop.confirm("您确认删除吗", function () {
                    app.method = "Delete/";
                    var url = app.getServerUrl() + app.controller + app.method + id;
                    $.post(url, function (data) {
                        $.Toast.success(data.msg);
                        app.dialog.callback();
                    })
                }, function () { });
            }

        }, {
            icon: 'icon-edit',
            elemevent: function () {
                var chd = $('input[type=checkbox]:checked').val();
                if (chd == "" || chd == undefined) {
                    $.Toast.error("请先选中值");
                    return;
                }
                var url = app.getServerUrl() + app.controller + "Edit/" + chd + "?action=edit";
                if (app.popup) {                  
                    app.showpop({ width: app.dialog.width, height: app.dialog.height, callback: app.dialog.callback, title: app.dialog.title, src: url });
                } else {
                    app.load2(url);
                }
            }
        }, {
            icon: 'icon-add',
            elemevent: function () {
                var url = app.getServerUrl() + app.controller + "Edit/?action=add";
                if (app.popup) {
                    app.showpop({ width: app.dialog.width, height: app.dialog.height, callback: app.dialog.callback, title: app.dialog.title, src: url });
                } else {
                    app.load2(url);
                }
            }
        },  {
            icon: 'icon-search',
            elemevent: function () {               
                if (app.popup) {
                    app.showpop({ width: app.dialog.width, height: app.dialog.height, title:"查询", callback: app.dialog.callback, template: app.dialog.template });
                }
            }
        }, {
            icon: 'icon-group',
            elemevent: function () {
            }
        }, {
            icon: 'icon-print',
            elemevent: function () {
                var url = app.getServerUrl() + app.controller + app.printMethod;
                app.preview(url);
            }
        }, {
            icon: 'icon-xls',
            elemevent: function () {
                var url = app.getServerUrl() + app.controller + app.outputMethod;
                window.open(url);
            }
        }, {
            icon: 'icon-back',
            elemevent: function () {               
                app.back();
            }
        }]
    };


    if (options != undefined) {
        $.each(options.toolbar, function (i, n) {
            $.each(defaults.toolbar, function (j, k) {
                if (k != undefined) {
                    if (n.icon == k.icon) {
                        defaults.toolbar.splice(j, 1);
                    }
                }
            })
        })
    } 
    var obj = $.extend(true, {}, defaults, options);  
    $('a.easyui-linkbutton').linkbutton(obj);
};

App.prototype.geturl = function (url) {
    var pages = this;
    if (url.indexOf('pagecode') > 0) {
        $('#hidPgeCode').val(pages.getlinkval(url, 'pagecode'));
    }
    if (url.indexOf('pagecode') < 0) {
        if (url.indexOf('?') < 0) {
            url = url + "?pagecode=" + $('#hidPgeCode').val();
        } else {
            url = url + "&pagecode=" + $('#hidPgeCode').val();
        }
    }
    return url;
}

App.prototype.load = function (url) {
    var pages = this;
    pages.objs.removeAll();
    var index = pages.objs.length();
    pages.objs.add(index, url);
    url = pages.geturl(url);
    $("#tabcontent").load(url, function () { });

};

App.prototype.load2 = function (url) {
    var pages = this;
    url = pages.geturl(url);
    var index = pages.objs.length();
    pages.objs.add(index, url);    
    $("#tabcontent").load(url, function () { });

  };

App.prototype.back = function () {   
    var pages = this;
    var index = pages.objs.length() - 2;
    var url = pages.objs.get(index);
    $("#tabcontent").load(url, function () { });
    pages.objs.remove(index + 1);
};

App.prototype.initFooterConfig = function (toolbar) {

    $('#divFooterBtns>input').click(function () {
        var elem = $(this);
        $.each(toolbar, function (i, n) {
            if (n.icon == elem.attr('icon')) {
                n.elemevent(elem)
            }
        })
    })
};

App.prototype.preview = function (url) {
    var app = this;
    window.open(app.getServerUrl() + "/print/index?preview=" + url);
};

App.prototype.uploadFile = function (url, callback, rule, divid) {
   
    if (divid == undefined) {
        divid = "#divImg";
    }
    $(".imgtext").hide();
    $(divid).hover(function () {
        $(".imgtext", this).slideToggle(100);
    });
    var defaultRule = "jpeg|jpg|gif|png";
	 if (rule != undefined)	 {
		 defaultRule = 	rule;	 
	 }  
	 $(divid).click(function () {
        // 上传方法
        $(this).upload({
            // 上传地址
            url: url,
            // 文件域名字
            fileName: 'filedata',
			//上传文档格式
			rule:defaultRule,
            // 其他表单数据
            params: { name: 'pxblog' },
            // 上传完成后, 返回json, text
            dataType: 'json',
            // 上传之前回调,return true表示可继续上传
            onSend: function () {
                return true;
            },
            onSubmit: function (data) {          
                window.parent.showToastError(data);
            },
            // 上传之后回调
            onComplate: callback
        });
    });
};
