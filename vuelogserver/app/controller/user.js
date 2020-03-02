/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async get() {
        const { ctx, service } = this;
        const uid = ctx.query.uid;
        const result = await service.user.getInfo(uid);
        ctx.body = {
            code: 1,
            info: result
        };
    }
}

module.exports = UserController;