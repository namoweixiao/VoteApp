'use strict';

// had enabled by egg
// exports.static = true;
exports.proxyworker = {
  enable: true,
  package: 'egg-development-proxyworker',
};
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.static = true;
exports.mysql = {
  enable: false,
  package: 'egg-mysql',
};
exports.i18n = {
  enable: true,
  package: 'egg-i18n',
};
