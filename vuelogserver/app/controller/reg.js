/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-spacing */
/* eslint-disable prefer-const */
'use strict';

const Controller = require('egg').Controller;

class RegController extends Controller {
    async index() {
        const { ctx, service } = this;
        // eslint-disable-next-line space-infix-ops
        let formData = ctx.request.body;

        let result = await service.reg.index(formData);

        ctx.body = result;

    }
}

module.exports = RegController;