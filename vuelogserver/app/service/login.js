/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async login(username) {
        const { app } = this;
        let result = await app.mysql.get('users', { username })
        return result;
    }

    // async update(uid) {
    //     const { app } = this;
    //     // eslint-disable-next-line prefer-const
    //     let sql = `update users set nums = nums+1,logintimes=NOW() where uid=?`;
    //     // eslint-disable-next-line array-bracket-spacing
    //     const result = await app.mysql.query(sql, [uid]);
    //     return result;
    // }
}

module.exports = LoginService;