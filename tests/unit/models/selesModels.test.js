const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allSales, newSale } = require('./mocks/sales.mock');
const { saleModel } = require('../../../src/models');

describe('seles Models: ', function () {
  afterEach(function() {
    sinon.restore()
  })

  it('findAll', async function () {
    sinon.stub(connection, "execute").resolves([allSales])
    const result = await saleModel.findAll()
    expect(result).to.be.deep.equal(allSales);
  })
  it('findById: ', async function () {
    sinon.stub(connection, 'execute').resolves([allSales[0]]);
    const result = await saleModel.findById(1);
    expect(result).to.be.deep.equal(allSales[0]);
  });

  it('deleteById models: ', async function () {
    sinon.stub(connection, 'execute').resolves();
    const result = await saleModel.deleteById(4);
    expect(result).to.be.deep.equal();
    expect(result).to.be.deep.equal();
  });
});