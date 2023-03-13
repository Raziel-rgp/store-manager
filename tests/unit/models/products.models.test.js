const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts, productId1 } = require('../mocks/products.mock'); 
const { productsModel } = require('../../../src/models');

describe('Tests of Model', async function () {
  afterEach(sinon.restore);

  it('tests of findAll function', async function () {
    sinon.stub(connection, "execute").resolves([allProducts])

    const result = await productsModel.findAll()
    
    expect(result).to.be.deep.equal(allProducts);
  });

  it('tests of findById function', async function () {
    sinon.stub(connection, "execute").resolves([productId1])
    const result = await productsModel.findById(1)
    expect(result).to.be.deep.equal(productId1);
  });
});