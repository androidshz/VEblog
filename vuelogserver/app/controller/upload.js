/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
    async index() {
        const { ctx, service } = this;
        const formData = ctx.request.body;
        const result = await service.video.got(formData);
        ctx.response.body = result;
    }
}

module.exports = UploadController;