import dragPage from "../pageobjects/drag.page"
//Referencia: https://webdriver.io/docs/api/mobile/dragAndDrop/

describe("Testes na tela DragDrop", () => {
  beforeEach(async () => {
    await dragPage.abrirMenuDrag();
    browser.pause(1000);
  });

  it("Deve arrastar a peça até o lugar certo", async () => {
    const peca_1 = await $("~drag-l1"); // Peça de origem
    const destino_1 = await $("~drop-l1"); // Slot de destino

    await peca_1.dragAndDrop(destino_1)
    await browser.pause(2000);
  });

  it.skip("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
    //DESAFIO: Implementar o drag and drop para todas as peças aqui 

    

    //Resultado esperado, só depois de completar o quebra cabeça
    const mensagem = await $('android=new UiSelector().text("Congratulations")');
    await expect(mensagem).toBeDisplayed();

  });



});