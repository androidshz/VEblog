// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddVideo = require('../../../app/service/addVideo');
import ExportAdmin = require('../../../app/service/admin');
import ExportEditInfo = require('../../../app/service/editInfo');
import ExportGetportrait = require('../../../app/service/getportrait');
import ExportGetVideo = require('../../../app/service/getVideo');
import ExportLogin = require('../../../app/service/login');
import ExportReg = require('../../../app/service/reg');
import ExportUser = require('../../../app/service/user');
import ExportVideo = require('../../../app/service/video');

declare module 'egg' {
  interface IService {
    addVideo: ExportAddVideo;
    admin: ExportAdmin;
    editInfo: ExportEditInfo;
    getportrait: ExportGetportrait;
    getVideo: ExportGetVideo;
    login: ExportLogin;
    reg: ExportReg;
    user: ExportUser;
    video: ExportVideo;
  }
}
