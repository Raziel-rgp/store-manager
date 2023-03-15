const { expect } = require('chai');
const sinon = require('sinon');

const { allProducts, newProduct } = require('./mocks/productControler.mock');
const { productService } = require('../../../src/services/index');
const { productsControllers } = require('../../../src/controllers/index')

describe('controllers Products:', function () {
  afterEach(function () {
    sinon.restore();
  });

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

  it("findById que não exista o product", async function () {
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

  it("testing delete", async function () { 
    const res = {};
    const req = { params: { id: 4 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "deleteById")
      .resolves({ type: null, message: {} })
    
    await productsControllers.deleteById(req, res);
    expect(res.status.calledWith(204)).to.be.equal(true)
  });

  it("testing insertNewProduct:", async function () {
    const res = {};
    const req = { body: { name: "Tenis" } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'insertNewProduct')
      .resolves({ type: null, message: newProduct })
    await productsControllers.insertNewProduct(req, res);
    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith(newProduct)).to.be.equal(false);
  })
});