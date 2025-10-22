describe('Funcionalidade: Users', () => {
 it('Dado que quero ver os usuários, Quando eu dar GET em "/users", Então vai retornar todos os usuários', () => {
    cy.request('GET', 'https://dummyjson.com/users').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Dado que quero listar um usuário específico, ao dar GET /users/1, Então deve retornar 200', () => {
    cy.request('GET', 'https://dummyjson.com/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body.firstName).to.eq('Emily');
    })
  })
  
  it('Dado que quero buscar um usuario com ID inválido, Quando eu dar GET em /users com um parâmetro inesistente, Então vai retornar um erro e o código 404', () => {
    cy.request({
      method: 'GET',
      url: 'https://dummyjson.com/users/999', 
      failOnStatusCode: false,
    })
    .then((response) => {

      expect(response.status).to.eq(404)
    })  
  })
})