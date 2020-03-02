/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    }
};