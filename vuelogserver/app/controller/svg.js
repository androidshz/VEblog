'use strict';
var svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class SvgController extends Controller {
    async index() {
        const { ctx } = this;
        let captcha = svgCaptcha.create(
            {
                //设置验证码样式
                background: '#fff',
                size:1,
                ignoreChars:'0oli',
                noise:5,
                fontSize:48,
                height:30,
                width:120
            }
        );
        //需要把图片上的内容放到session里，用于验证
        ctx.session.captcha = captcha.text;
        //需要把验证码相应到客户端
        // 需设置响应头类型
        ctx.set('content-type', 'image/svg+xml');
        ctx.body = captcha.data;

    }
}

module.exports = SvgController;