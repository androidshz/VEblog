/* eslint-disable space-infix-ops */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class VideoService extends Service {


    async got() {
        const { app } = this;
        const result = await app.mysql.select('video');
        return result;

    }
    async getuid(uid) {
        const { app } = this;
        const result = await app.mysql.get('users', uid);
        return result;

    }

    async gotusers() {
        const { app } = this;
        const result = await app.mysql.select('users');
        return result;

    }
    async set(postdata) {
        const { app } = this;

        const result = await app.mysql.insert('comment', postdata);
        const results = await app.mysql.get('comment', { uid: postdata.uid });
        console.log(result, results)
        return results;
    }
    async addlikes(vid) {
        const { app } = this;
        console.log(vid)
        let sql = `UPDATE video SET likes = likes+1 WHERE vid = ?`
        const result = await app.mysql.query(sql, [vid]);
        return result;

    }
    async reducelikes(vid) {
        const { app } = this;
        console.log(vid)
        let sql = `UPDATE video SET likes = likes-1 WHERE vid = ?`
        const result = await app.mysql.query(sql, [vid]);
        return result;

    }

}

module.exports = VideoService;