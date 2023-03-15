const { expect } = require('chai');
const sinon = require('sinon');

const { allSales } = require('./mocks/salesController.mock');
const { saleService } = require('../../../src/services/index');
const { salesControllers } = require('../../../src/controllers/index')

describe('controllers Sales:', function () {
  afterEach(function () {
    sinon.restore();
  });

  it("return status 200 and the list", async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "findAll")
      .resolves({ type: null, message: allSales })

    await salesControllers.findAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true)
    expect(res.json.calledWith(allSales)).to.be.equal(true)
  });

  it("findById que exista o product", async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "findById")
      .resolves({ type: null, message: allSales[0] })

    await salesControllers.findById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true)
    expect(res.json.calledWith(allSales[0])).to.be.equal(true)
  });

  it("findById que não exista o product", async function () {
    const res = {};
    const req = { params: { id: 200 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "findById")
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' })

    await salesControllers.findById(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true)
    expect(res.json.calledWith({ message: 'Sale not found' })).to.be.equal(true)
  });

  it("testing delete", async function () {
    const res = {};
    const req = { params: { id: 4 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(saleService, "deleteById")
      .resolves({ type: null, message: {} })

    await salesControllers.deleteById(req, res);
    expect(res.status.calledWith(204)).to.be.equal(true)
  });
});