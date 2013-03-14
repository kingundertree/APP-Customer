/**
 * 系统的所有配置
 * 常量，程序中不可进行变更
 * User: kuang
 * Date: 13-2-25
 * Time: 下午7:05
 */

'use strict';
app.regCellPhone = /^1[3|4|5|8][0-9]\d{8}$/;


app.factory('CONF', function(){
    return {
        host: 'http://api.dooioo.com:18080/route/rest'
    };
});