/* eslint-disable eol-last */
/* eslint-disable eqeqeq */
/* eslint-disable indent */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable semi */
'use strict';

const Service = require('egg').Service;

class RegService extends Service {
    async index(formData) {
        const { app } = this;
        // eslint-disable-next-line prefer-const
        let sql = `SELECT * FROM users where username="${formData.username}" `
        let results = await app.mysql.query(sql);
        if (results.length > 0) {
            return { code: -1, Msg: '账号已存在' }
        } else if (results && formData.passwd != formData.repasswd) {
            return { code: 0, Msg: '两次密码输入不一致' };
        } else {
            let result = await app.mysql.insert('users', { username: formData.username, passwd: formData.passwd })
            return { code: 1, Msg: '注册成功' }
        }

    }
}

module.exports = RegService;