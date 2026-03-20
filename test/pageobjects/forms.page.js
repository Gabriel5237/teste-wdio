class FormPage {
      //Seletores
      get menuForm () { return $("accessibility id:Forms");}
      get campoTexto () { return $("accessibility id:text-input");}
      get labelResultado () { return $("accessibility id:input-text-result");}
      get dropdown () { return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")");}

     // Métodos

     async abrirMenuForm() {
        await this.menuForm.click()
     }

     async preencherTexto(texto) {
        await this.campoTexto.setValue(texto)
     }

     async validarTexto() {
        return await this.labelResultado.getText()
     }

     async selecionarOpcao (txtOpcao) {
        //Melhorar esse métado
        await this.dropdown.click()
        const opcao = $(`-android uiautomator:new UiSelector().text(\"${txtOpcao}\")`)
        await opcao.click()
     }
     
     async validarOpcao () {
        return await this.dropdown.getText()
     }
}
export default new FormPage()