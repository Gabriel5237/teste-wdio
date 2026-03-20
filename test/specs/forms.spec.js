import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulário', () => {

    beforeEach(async () => {
        formPage.abrirMenuForm()

    });

    it('Deve validar se o texto foi preenchido', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
        await driver.pause(5000)
    });

    it('Validar a seleção do dropdown', async () => {
        await formPage.selecionarOpcao('Appium is awesome')
        expect(await formPage.validarOpcao()).toEqual('Appium is awesome')
        await driver.pause(5000)
    });
    it('Deve trocar o botão de on para off', async () => {
        //Trocar para OFF
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        await driver.pause(5000)
        //Trocar para ON
        await browser.swipe({
        direction: 'left',                  // Swipe from right to left
        duration: 5000,                     // Last for 5 seconds
        percent: 0.1,                       // Swipe 50% of the scrollableElement
        scrollableElement: botaoOnOff,  // The element to swipe within
    })
            await driver.pause(5000)

    });
});