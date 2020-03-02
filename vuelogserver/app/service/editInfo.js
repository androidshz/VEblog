'use strict'

const Service = require('egg').Service;

class EditInfoService extends Service{
    
    //修改基本信息
    async edit(formData){
        const {app} = this;
        let result = await app.mysql.update('users',formData,{
            where:{
                uid:formData.uid
            }
        });
        return result;
    }

    //修改联系信息
    async edito(formData1){
        const {app} = this;
        let result = await app.mysql.update('users',formData1,{
            where:{
                uid:formData1.uid
            }
        });
        return result;
    }
}

module.exports = EditInfoService;