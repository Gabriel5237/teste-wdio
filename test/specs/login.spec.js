import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', () => {
   
   // Executa antes de cada teste
   beforeEach( async() => {
       // Acessa o menu de login
      await loginPage.abrirMenu()
   });
   
   // Executa após cada teste
   afterEach( async() => {
      // Reinicia o app para garantir isolamento dos testes
      await browser.relaunchActiveApp()
   });

    it('Deve fazer login com sucesso', async() => {
       // Preenche email e senha válidos       
       await loginPage.preencherLogin('teste@teste.com', 'senha123456')
       // Valida mensagem de sucesso
       await expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    });

    it('Deve falhar ao fazer login com email inválido', async() => {
       // Preenche email inválido
       await loginPage.preencherLogin('teste@teste', 'senha123456')
       // Valida mensagem de erro
       await loginPage.mensagemErro('Please enter a valid email address')
       
    });

    it('Deve falhar ao fazer login com a senha inválida', async() => {
      // Preenche senha inválida
      await loginPage.preencherLogin('teste@teste.com', '1234')
      // Valida mensagem de erro
      await loginPage.mensagemErro('Please enter at least 8 characters')
      
    });
    
});