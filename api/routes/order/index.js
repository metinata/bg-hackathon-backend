import express from 'express'
import * as controller from './controller'

const router = express.Router();

router
    .route('/order/countries')
    .get(controller.getCountries)

router
    .route('/order/cities')
    .get(controller.getCitiesByCountryId)

router
    .route('/order/users')
    .get(controller.getAvailableUsers)

router
    .route('/order/products')
    .get(controller.getProductsByCityId)

router
    .route('/order/place')
    .post(controller.placeOrder)

router
    .route('/orders')
    .get(controller.getOrders)

export default router