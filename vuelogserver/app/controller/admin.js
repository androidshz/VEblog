/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async dongtai() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.dongtai();
    ctx.body = result;
  }
  async shaoji() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.shaoji();
    ctx.body = result;
  }
  async guandian() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.guandian();
    ctx.body = result;
  }
  async pingce() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.pingce();
    ctx.body = result;
  }

  async tushang() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.tushang();
    ctx.body = result;
  }

  async zhuanti() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.zhuanti();
    ctx.body = result;
  }

  async tuijian() {
    const {
      ctx,
      service
    } = this;
    const result = await service.admin.tuijian();
    ctx.body = result;
  }

}


module.exports = AdminController;