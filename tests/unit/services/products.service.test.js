const { expect } = require('chai');
const sinon = require('sinon');

const { productService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');
const { allProducts } = require('./mocks/products.mock'); 


describe('Verificando service pessoa passageira', function () {
  describe('listagem de pessoas passageiras', function () {
    it('retorna a lista completa de pessoas passageiras', async function () {
      // arrange
      sinon.stub(productsModel, 'findAll').resolves(allProducts);
      // act
      const result = await productService.findAll();
      // assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    });

    it('retorna um erro caso a pessoa passageira não existe', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);
      const result = await productService.findById(1);
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });

    it('retorna a pessoa passageira caso ID existente', async function () {
      sinon.stub(productsModel, 'findById').resolves(allProducts[0]);
      const result = await productService.findById(1);
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
    });

  });
  it('', async function() {
    
  });

  afterEach(function () {
    sinon.restore();
  });
});
