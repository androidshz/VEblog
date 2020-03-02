/* eslint-disable comma-spacing */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
'use strict';

const Service = require('egg').Service;

class GetportraitService extends Service {
    async got(uid) {
        const { app } = this;
        const result = await app.mysql.select('users', uid);
        return result;
    }
}

module.exports = GetportraitService;