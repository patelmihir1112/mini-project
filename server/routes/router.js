const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET/
 */
//  route.get('/DetailedMenu',services.Menu);
route.get('/',services.homeRoutes);
route.get('/OurStores',services.OurStores);
route.get('/Contact',services.Contact);
//  route.get('/DetailedMenu',services.DetailedMenu);

// Api
route.get('/Menu',controller.Menu);
route.get('/Menu/:Id',controller.FindMenu);
// route.get('/DetailedMenu/:Id',controller.FindMenu);
// route.post('/api/DetailedMenu/:Name',controller.FindMDetailedMenuenu);
// route.get('/api/MyOrder',controller.MyOrder);




module.exports = route