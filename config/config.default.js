'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};
  // app server config
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
    },
  };
  config.middleware = [ 'saveSession' ];
  // should change to your own
  config.keys = appInfo.name + '_1500789024630_3522';

  // add your config here
  config.proxyworker = {
    port: 10086,
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
  };
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
  };
  config.security = {
    csrf: true,
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'your db server',
      // 端口号
      port: 'your db port',
      // 用户名
      user: 'your db user',
      // 密码
      password: 'your passwd',
      // 数据库名
      database: 'your database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.i18n = {
    defaultLocale: 'zh-CN',
  };
  config.session = {
    key: 'your key',
    maxAge: 24 * 3600 * 1000, // 1天
    httpOnly: true,
    encrypt: true,
  };
  return config;
};
