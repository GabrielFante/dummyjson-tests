# Gabriel Fante - 1990554 | Leonardo Lopes - 2010503 | Miguel Guarnetti - 1999154
## Título: Título: [Produtos] – Atualização com campo inválido deveria retornar erro, mas retorna sucesso.
* Passos:
1. Enviar requisição PUT para https://dummyjson.com/products/1?sobrenome=junior.
2. Aguardar resposta da API.

* Resultado esperado: Retornar status 400 (Bad Request) por campo inválido.
* Resultado obtido: Status 200, indicando falha na validação da API.
* Evidência: Log da requisição e resposta JSON retornando 200.
