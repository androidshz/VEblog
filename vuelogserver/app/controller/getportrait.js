/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable quote-props */
'use strict';

const Controller = require('egg').Controller;

class GetportraitController extends Controller {
    async index() {
        const { ctx, service } = this;
        const result = await service.getportrait.got();

        let data = { "code": 1, "msg": "", "data": result };
        ctx.response.body = data;

    }
}

module.exports = GetportraitController;