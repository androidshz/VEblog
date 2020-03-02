/* eslint-disable semi */
/* eslint-disable object-shorthand */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict'

const Service = require('egg').Service;

class GetVideoService extends Service {

    async index(uid) {
        const { app } = this;
        const result = await app.mysql.get('videousers', { uid: uid });
        return result;
    }
}

module.exports = GetVideoService;