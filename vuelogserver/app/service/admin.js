/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable comma-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
    async dongtai() {
        const {
            app
        } = this;
        let result = await app.mysql.select('shaoji', {
            limit: 6,
            offset: 0
        });
        return result;
    }
    async shaoji() {
        const {
            app
        } = this;
        let result = await app.mysql.select('dongtai', {
            limit: 6,
            offset: 0
        });
        return result;
    }
    async guandian() {
        const {
            app
        } = this;
        let result = await app.mysql.select('guandian', {
            limit: 8,
            offset: 0
        });
        return result;
    }
    async pingce() {
        const {
            app
        } = this;
        let result = await app.mysql.select('pingce', {
            limit: 8,
            offset: 0
        });
        return result;
    }
    async tushang() {
        const {
            app
        } = this;
        let result = await app.mysql.select('tushang', {
            limit: 6,
            offset: 0
        });
        return result;
    }
    async zhuanti() {
        const {
            app
        } = this;
        let result = await app.mysql.select('zhuanti', {
            limit: 6,
            offset: 0
        });
        return result;
    }
    async tuijian() {
        const {
            app
        } = this;
        let result = await app.mysql.select('tuijian', {
            limit: 6,
            offset: 0
        });
        return result;
    }
}

module.exports = AdminService;