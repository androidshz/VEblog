// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddVideo = require('../../../app/controller/addVideo');
import ExportAdmin = require('../../../app/controller/admin');
import ExportComment = require('../../../app/controller/comment');
import ExportCookies = require('../../../app/controller/cookies');
import ExportEditInfo = require('../../../app/controller/editInfo');
import ExportGetportrait = require('../../../app/controller/getportrait');
import ExportGetvideo = require('../../../app/controller/getvideo');
import ExportGetVideos = require('../../../app/controller/getVideos');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportReg = require('../../../app/controller/reg');
import ExportSession = require('../../../app/controller/session');
import ExportSvg = require('../../../app/controller/svg');
import ExportUpload = require('../../../app/controller/upload');
import ExportUploadFile = require('../../../app/controller/uploadFile');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    addVideo: ExportAddVideo;
    admin: ExportAdmin;
    comment: ExportComment;
    cookies: ExportCookies;
    editInfo: ExportEditInfo;
    getportrait: ExportGetportrait;
    getvideo: ExportGetvideo;
    getVideos: ExportGetVideos;
    home: ExportHome;
    login: ExportLogin;
    reg: ExportReg;
    session: ExportSession;
    svg: ExportSvg;
    upload: ExportUpload;
    uploadFile: ExportUploadFile;
    user: ExportUser;
  }
}
