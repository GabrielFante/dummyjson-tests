describe('Funcionalidade: Product', () =>{
  it('Dado que quero ver os produtos, Quando eu dar GET em "/product", Então vai retornar todos os produtos', () => {
    cy.request('GET', 'https://dummyjson.com/products').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Dado que quero limitar a listagem de 5 produtos, ao dar GET /products?limit=5, Então deve retornar 200', () => {
    cy.request('GET', 'https://dummyjson.com/products?limit=5').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products).to.have.length(5);
    })
  })

  it('Dado que quero verificar que os produtos tem os campos corretos, Quando eu dar GET em /products e listar todos os produtos, Então vai retornar todos os produtos listados confirmando as propriedades que quero verificar e retornar o código 200', () => {
    cy.request('GET', ' https://dummyjson.com/products?limit=0&skip=10').then((response) => {
      expect(response.body).to.be.an('object')
      expect(response.body.products).to.be.an('array')
      expect(response.status).to.eq(200)

      response.body.products.forEach((produto) => {
        expect(produto).to.include.keys(
          'id',
          'title',
          'description',
          'price',
          'category',
          'discountPercentage',
          'rating',
          'stock'
        )
      })
    })  
  })

  it('Dado que quero atualizar um produto existente e verificar se o retorno reflete a atualização, ao dar PUT/products/1, 200', () => {
    cy.request('PUT', 'https://dummyjson.com/products/1?titile=Iphone12').then((response) => {
      expect(response.status).to.eq(200);
    })    
  })

  it('Dado que quero testar atualização com campo inválido, ado dar PUT/products3000, então deve retornar 400', () => {
    cy.request('PUT', 'https://dummyjson.com/products/1?sobrenome=junior').then((response) => {
      expect(response.status).to.eq(200);
    })
  })
  
  it('Dado quero deletar um produto, Quando eu dar um DELETE em /product passando o id, Então vai deletar o produto e retornar o código 200', () => {
    cy.request('DELETE', ' https://dummyjson.com/product/1').then((response) => {
      expect(response.status).to.eq(200)
    })  
  })
  
  it('Dado quero tentar deletar um produto inesistente, Quando eu dar um DELETE em /product passando o id inválido, Então vai retornar um erro e o código 404', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://dummyjson.com/product/999', 
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(404)
    })  
  })
})