'use strict';

const Controller = require('egg').Controller;

class GetVideoController extends Controller {
  async index() {
    const { ctx,service } = this;
    let uid = ctx.request.body.uid;
    // console.log(uid);
    const result = await service.getVideo.index(uid);
    console.log(result);
    ctx.body = result;
  }
}

module.exports = GetVideoController;
