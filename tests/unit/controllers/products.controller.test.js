const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts } = require('./mocks/productControler.mock');
const { productsModel } = require('../../../src/models');

/* describe('controllers:', function () {
  describe('recover list of products', function () {
    it("return status 200 and the list", async function () {

    });
  });
}); */