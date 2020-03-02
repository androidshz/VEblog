'use strict';

const Controller = require('egg').Controller;

class CookiesController extends Controller {
  async setc() {
    const { ctx } = this;
    //cookie的值不能是中文，如果是中文需要编码或加密。。。
    ctx.cookies.set('username','陈',{
        maxAge:7*24*3600000,
        encrypt:true
    })
    ctx.cookies.set('age','20',{
       encrypt:true
      
    })
    ctx.body = 'cookies设置';
  }

  async getc() {
    const { ctx } = this;
   
    ctx.body = decodeURI(ctx.cookies.get('username',{encrypt:true}));
  }
}

module.exports = CookiesController;