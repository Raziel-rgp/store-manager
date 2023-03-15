const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts } = require('./mocks/productControler.mock');
const { productService } = require('../../../src/services/index');
const { productsControllers } = require('../../../src/controllers/index')

describe('controllers:', function () {
  it("return status 200 and the list", async function () {
    const res = {};
    const req = {};
  res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "findAll")
      .resolves({ type: null, message: allProducts })
    
    await productsControllers.findAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true)
    expect(res.json.calledWith(allProducts)).to.be.equal(true)
    });
  it("findById que exista o product", async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    sinon
      .stub(productService, "findById")
      .resolves({ type: null, message: allProducts[0] })
    
    await productsControllers.findById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true)
    expect(res.json.calledWith(allProducts[0])).to.be.equal(true)
  });
  it("findById que exista o product", async function () {
    const res = {};
    const req = { params: { id: 200 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "findById")
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' })

    await productsControllers.findById(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true)
    expect(res.json.calledWith({ message: 'Sale not found'})).to.be.equal(true)
  });
});