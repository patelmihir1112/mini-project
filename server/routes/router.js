const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET/
 */
route.get('/',services.homeRoutes);
route.get('/Menu',services.Menu);
route.get('/OurStores',services.OurStores);
route.get('/ContactUs',services.ContactUs);
route.get('/DetailedMenu',services.DetailedMenu);
// route.get('/Order',controller.Order);

// Api
route.get('/FindItems',controller.FindItems);
route.get('/DeleteItem',controller.DeleteItem);


module.exports = route