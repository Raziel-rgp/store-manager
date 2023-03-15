const { expect } = require('chai');
const sinon = require('sinon');

const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const { allSales } = require('./mocks/sales.mock'); 

describe('sales service:', function () { 
  afterEach(function () {
    sinon.restore();
  });

  it('retorna a lista completa sales', async function () {
    // arrange
    sinon.stub(saleModel, 'findAll').resolves(allSales);
    // act
    const result = await saleService.findAll();
    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(allSales);
  });

  it('retorna um erro caso a pessoa passageira não existe', async function () {
    sinon.stub(saleModel, 'findById').resolves([]);
    const result = await saleService.findById(1);
    expect(result.type).to.equal('SALE_NOT_FOUND');
    expect(result.message).to.equal('Sale not found');
  });

  it('retorna um erro caso a pessoa passageira exista', async function () {
    sinon.stub(saleModel, 'findById').resolves([allSales[0]]);
    const result = await saleService.findById(1);
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal([allSales[0]]);
  });
})