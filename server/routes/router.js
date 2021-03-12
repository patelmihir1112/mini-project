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
route.get('/Contact',services.Contact);
route.get('/DetailedMenu',services.DetailedMenu);

// Api
route.get('/FindItems',controller.FindItems);


module.exports = route