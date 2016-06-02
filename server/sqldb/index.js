/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.options.dbName,config.sequelize.options.username,config.sequelize.options.password, config.sequelize.options)
};

// Insert models below
db.Chat = db.sequelize.import('../api/chat/chat.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Chat.belongsTo(db.User);
db.User.hasMany(db.Chat);
module.exports = db;
