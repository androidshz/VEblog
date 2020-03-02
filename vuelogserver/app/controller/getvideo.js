/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class GetvideoController extends Controller {
    async index() {
        const { ctx, service } = this;
        const uid = ctx.request.query;
        console.log(uid)
        const result = await service.video.got();
        const getuid = await service.video.getuid(uid);
        // const nums = await service.course.count();
        let data = { "code": 1, "msg": "", "data": result, "uid": getuid };
        ctx.response.body = data;

    }


}

module.exports = GetvideoController;