const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { allProducts, productId1, newProduct, productUpdated } = require('./mocks/products.mocks'); 
const { productsModel } = require('../../../src/models');

describe('Tests of Model product', function () {
  afterEach(function () {
    sinon.restore()
  })

  it('recive the list of products', async function () {
    sinon.stub(connection, "execute").resolves([allProducts])
    const result = await productsModel.findAll()
    expect(result).to.be.deep.equal(allProducts);
  });

  it('tests of findById function', async function () {
    sinon.stub(connection, "execute").resolves([[productId1]])
    const result = await productsModel.findById(1)
    expect(result).to.be.deep.equal(productId1);
  });

  it('tests add new product', async function () {
    sinon.stub(connection, "execute").resolves([{insertId: 1}])
    const result = await productsModel.insertNewProduct(newProduct)
    expect(result).to.be.deep.equal(1);
  });

  it('deleteById models: ', async function () {
    sinon.stub(connection, 'execute').resolves();
    const result = await productsModel.deleteById(4);
    expect(result).to.be.deep.equal();
    expect(result).to.be.deep.equal();
  });

  it('updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves(productUpdated);
    const result = await productsModel.updateProduct("BalaDeGoma", 1);
    expect(result.id).to.be.deep.equal(1);
    expect(result.name).to.be.deep.equal("BalaDeGoma");
  });
});