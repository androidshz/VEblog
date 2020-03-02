/* eslint-disable no-extra-semi */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
    async index() {
        const { ctx, service } = this;
        const postdata = ctx.request.body
        const vid = ctx.request.body.vid
        const uid = { uid: postdata.uid }
        const doc = await service.video.set(postdata);
        const getuid = await service.video.getuid(uid);
        const result = {
            commentcontent: postdata.commentcontent,
            times: postdata.times,
            uid: getuid.uid,
            username: getuid.username,
            portrait: getuid.portrait
        }
        ctx.response.body = result;

    }
    async addlikes() {
        const { ctx, service } = this;
        const addtimes = ctx.request.body.vid
        const addtime = await service.video.addlikes(addtimes);
        const addlikes = await service.video.got();
        ctx.response.body = {
            addtime: addtime,
            likes: addlikes.likes

        }
    };

}


module.exports = CommentController;