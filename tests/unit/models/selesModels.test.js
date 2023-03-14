const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allSales } = require('./mocks/sales.mock');
const { saleModel } = require('../../../src/models');
const { func } = require('joi');

describe('first', async function () {
  it('recuperando todas a sales', async function () {
    sinon.stub(connection, "execute").resolves([allSales])
    const result = await saleModel.findAll()
    expect(result).to.be.deep.equal(allSales);
  })
  it('recuperando sales by id', async function () {
    sinon.stub(connection, 'execute').resolves([allSales[0]]);
    const result = await saleModel.findById(1);
    expect(result).to.be.deep.equal(allSales[0]);
  });
  it('', async function () {
    
  });
});