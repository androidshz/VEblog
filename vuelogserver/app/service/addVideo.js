'use strict'

const Service = require('egg').Service;

class AddVideoService extends Service{
    
    async index(formdata){
        const {app} = this;
        let result = await app.mysql.insert('videousers',formdata);
        return result;
    }
}

module.exports = AddVideoService;