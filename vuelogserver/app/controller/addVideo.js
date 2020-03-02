'use strict';

const Controller = require('egg').Controller;

class AddVideoController extends Controller {
  async index() {
    const { ctx,service } = this;
    let formdata = ctx.request.body;
    console.log(formdata);
    const result = await service.addVideo.index(formdata);
    let data = {
        code:1,
        Msg:'上传成功'
      };
      // console.log(result);
      ctx.body = data;
  }
}

module.exports = AddVideoController;
