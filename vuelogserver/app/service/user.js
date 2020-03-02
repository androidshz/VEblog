'use strict'

const Service = require('egg').Service;

class UserService extends Service{
    
    async getInfo(uid){
        const {app} = this;
        let result = await app.mysql.get('users',{uid});
        return result;
    }
}

module.exports = UserService;