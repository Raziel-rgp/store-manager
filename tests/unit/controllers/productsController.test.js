const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts } = require('./mocks/productControler.mock');
const { productService } = require('../../../src/service/index');
const { productsControllers } = require

describe('controllers:', function () {
  describe('recover list of products', function () {
    it("return status 200 and the list", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().return(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "findAll")
        .resolves({ type: null, message: allProducts })
      
      await productsControllers.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(allProducts)
    });
  });
});