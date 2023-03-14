const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts, productId1 } = require('../services/mocks/products.mock');
const { productsModel } = require('../../../src/models');