/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        const { ctx, service } = this;

        //接收客户端提交上来的数据
        let formData = ctx.request.body;
        //验证码验证
        if (formData.coder.toLowerCase() != ctx.session.captcha.toLowerCase()) {
            ctx.body = { code: -2, Msg: '验证码错误' }
            return;
        }
        let result = await service.login.login(formData.username);
        let data = { code: 1, Msg: '登录成功' };
        //账号不存在
        // console.log(result);  //:数据库查询来的数据
        // console.log(formData)//客户端输入框的数据
        if (!result) {
            data = { code: -1, Msg: '账号不存在' };
        }
        //密码错误 
        if (result && formData.passwd != result.passwd) {

            data = { code: 0, Msg: '密码错误' };
        }
        // 更新登录次数和登录时间
        if (data.code == 1) {
            // await service.login.update(result.uid);
            // console.log(result.uid)
            //把登录成功的相关信息保存到session中
            // let remember = 1;//记住密码
            // if (remember) ctx.session.maxAge=720*3600000;
            ctx.session.uid = result.uid;
            ctx.session.username = result.username;
            ctx.session.portrait = result.portrait;
        }
        ctx.body = data;
    }

    async check() {
        const { ctx } = this;
        ctx.body = {
            uid: ctx.session.uid,
            username: ctx.session.username,
            portrait: ctx.session.portrait
        }

    }

    async logout() {
        const { ctx } = this;
        //清空session
        ctx.session = null;
        ctx.body = {
            code: 1,
            Msg: '退出成功'
        };
    }
}

module.exports = LoginController;