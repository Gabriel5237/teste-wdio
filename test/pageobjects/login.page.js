class LoginPage {
    //Seletores

    // 1 - O usuário acessa o menu de login do aplicativo
    get menuLogin() {
        return $('~Login')
    }
    
    // 2 O sistema exibe os campos de email e senha
    // 3 O usuário preenche os dados de acesso (email e senha)
    get campoEmail() {
        return $('~input-email')
    }
    
    get campoSenha() {
        return $('~input-password')
    }
    
    // 4 O usuário aciona o botão de login
    get botaoLogin() {
        return $('~button-LOGIN')
    }
    
    // 5 O sistema realiza a validação das credenciais informadas
    // 6 Em caso de sucesso, o sistema exibe a mensagem: "You are logged in!"
    get mensagem() {
        return $('id=android:id/message')
    }

    //Metodos / Ações
    async abrirMenu() {
        await this.menuLogin.click()
    }

    async preencherLogin(email, senha) {
       await this.campoEmail.clearValue()
       await this.campoEmail.setValue(email)
       await this.campoSenha.clearValue()
       await this.campoSenha.setValue(senha)
       await this.botaoLogin.click()
    }

    async mensagemAlerta() {
        return await this.mensagem.getText()
    }
    // Fluxo alternativo - mensagens de erro
    async mensagemErro(texto) {
        const elemento = await $(`//android.widget.TextView[@text="${texto}"]`)
        await expect(elemento).toHaveText(texto)
    }

}

export default new LoginPage()