/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class EditInfoController extends Controller {
    async edit() {
        const { ctx, service } = this;
        let formData = ctx.request.body;
        console.log(ctx.request.body);
        const result = await service.editInfo.edit(formData);
        let data = {
            code: 1,
            Msg: '修改成功'
        };
        // console.log(result);
        ctx.body = data;
    }

    async edito() {
        const { ctx, service } = this;
        let formData1 = ctx.request.body;
        // console.log(formData1.email);
        const result = await service.editInfo.edito(formData1);
        let data = {
            code: 1,
            Msg: '修改成功'
        };
        // console.log(result);
        ctx.body = data;
    }
}

module.exports = EditInfoController;