/**
 * ArtUI完整配置项
 * 可以在这里配置整个ArtUI的特性
 */
/**************************提示********************************
 * 修改默认配置请首先确保已经完全明确该参数的真实用。
 **************************提示********************************/

var artui = {
    artpop: {
        /*
        pb_mask: 'ui-mask', //遮盖层样式 
        pb: 'ui-dialog',     //弹出层DIV外框架，可以定义边框、背景、字体等，配合CSS3可以设置圆角边框、阴影等
        pb_hd: 'ui-dialog-titlebar',       //标题栏样式 
        pb_t: 'ui-dialog-title',       //标题栏样式 
        pb_x: 'ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close',         //关闭按钮样式
        pb_iframe: '0px',                                                                       //获取当前窗口距离页面顶部高度
        pb_bd:'ui-dialog-content',                                                              //内容区+按钮栏样式
        pb_ft: 'ui-dialog-buttonpane ui-widget-content ui-helper-clearfix',                     //按钮栏样式
        pb_ct: 'ui-dialog-content',                                                                              //内容区样式
        pb_ok:'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only',         //确定按钮样式 
        pb_cl: 'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'          //取消按钮样式    
        */

        pb_mask: 'ui-mask', //遮盖层样式 
        pb: 'modal-content bootstrap ui-dialog',     //弹出层DIV外框架，可以定义边框、背景、字体等，配合CSS3可以设置圆角边框、阴影等
        pb_hd: 'modal-header',       //标题栏样式 
        pb_t: 'modal-title bootstrap-title',       //标题栏样式 
        pb_x: 'close',         //关闭按钮样式
        pb_iframe: '0px',                                                              //获取当前窗口距离页面顶部高度
        pb_bd:'modal-body',                                                              //内容区+按钮栏样式
        pb_ft: 'modal-footer',                     //按钮栏样式
        pb_ct: '',                                                                              //内容区样式
        pb_ok:'btn btn-primary',         //确定按钮样式 
        pb_cl:'btn btn-default'          //取消按钮样式  
    },
    validRegExp: {
        username: '^[A-Za-z0-9_-]+$',
        password: '^[A-Za-z0-9_-]+$',
        mobile: '^1(3|4|5|7|8)\d{9}$',
        email: '^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$',
        number: '^\\d+$',
        float: '^\\d+(\\.\\d+)?$'
    },
    table: {
        height: "380px",
        width: '100%'
    },
    toast: {
        style: 'ui-tips'
    },
    webImgUrl: 'http://124.232.163.143:8080',
    tree: {
        line: {
            OPEN: "button level1 switch center_open",
            CLOSE: "button level1 switch center_close",
            DOCU: "button level1 switch center_docu",
            POS: {
                ROOTS: "roots",
                CENTER: "center",
                BOTTOM: "bottom"
            }
        },
        checkbox: {
            DEFAULT: "button chk checkbox_false_full",
            FALSE: "button chk checkbox_false_full",
            TRUE: "button chk checkbox_true_full",
            PART: "button chk checkbox_true_part"
        },
        folder: {
            OPEN: "button ico_open",
            CLOSE: "button ico_close",
            DOCU: "button ico_docu"
        },
        expand: {
            OPEN: "open",
            CLOSE: "close"
        }
    }
};