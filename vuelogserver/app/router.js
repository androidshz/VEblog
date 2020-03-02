/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    // 获取视频
    router.get('/getvideo', controller.getvideo.index)

    // 获取主页数据
    router.get('/dongtai', controller.admin.dongtai);
    router.get('/shaoji', controller.admin.shaoji);
    router.get('/guandian', controller.admin.guandian);
    router.get('/pingce', controller.admin.pingce);
    router.get('/tushang', controller.admin.tushang);
    router.get('/zhuanti', controller.admin.zhuanti);
    router.get('/tuijian', controller.admin.tuijian);
    //发起评论请求
    router.post('/aplaycomment', controller.comment.index);
    router.post('/addlikes', controller.comment.addlikes);
    router.post('/login', controller.login.login);


    //注册用户
    router.post('/reg', controller.reg.index)
        //登录后获取用户信息
    router.get('/check', controller.login.check);

    //退出
    router.get('/logout', controller.login.logout);

    //cookies设置
    router.get('/cookie/set', controller.cookies.setc);
    router.get('/cookie/get', controller.cookies.getc);

    //session设置
    router.get('/session/set', controller.session.sets);
    router.get('/session/get', controller.session.gets);

    //验证码
    router.get('/coder', controller.svg.index);


    // 获取用户头像
    router.get('/getportrait', controller.getportrait.index);

    //获取用户信息
    router.get('/user/get', controller.user.get);
    //修改用户信息
    router.post('/editInfo/edit', controller.editInfo.edit);
    router.post('/editInfo/edito', controller.editInfo.edito);
    //上传文件
    router.post('/uploadFile/upload', controller.uploadFile.upload);
    //上传视频及信息
    router.post('/addVideo/index', controller.addVideo.index);
    router.post('/uploadFile/uploadPortrait', controller.uploadFile.uploadPortrait);

    //获取用户视频
    router.post('/getVideo/index', controller.getVideos.index);

};