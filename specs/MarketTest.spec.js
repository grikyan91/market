import chai from 'chai';
import {run, stop} from '../lib/browser';
import app from '../framework/pages';
const assert = chai.assert;

describe ('UI тесты на магазин', () => {
    let page;

    beforeEach( async () => {
        page = await run('https://automationpractice.com/index.php');
    });
    afterEach(async() => {
        await stop();
    });

    it ('Добавление товара на странице women', async () => { 
        await app().Women().goToPage(page);
        const popupText = await app().Women().getSuccessText(page);
        assert.strictEqual(popupText, '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t', 'Невалидное сообщение об успешном добавлении товара в корзину');
        const num = await app().Women().getCountCart(page);
        assert.equal(num, '1' , 'Элемент не добавился в корзину');
    });

    it ('Добавление товара на странице dresses', async () => { 
        await app().Dress().goToPage(page);
        const popupText = await app().Dress().getSuccessText(page);
        assert.strictEqual(popupText, '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t', 'Невалидное сообщение об успешном добавлении товара в корзину');
        const num = await app().Dress().getCountCart(page);
        assert.equal(num, '1' , 'Элемент не добавился в корзину');
    });

    it ('Добавление товара на странице tshirt', async () => { 
        await app().Tshirt().goToPage(page);
        const popupText = await app().Tshirt().getSuccessText(page);
        assert.strictEqual(popupText, '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t', 'Невалидное сообщение об успешном добавлении товара в корзину');
        const num = await app().Tshirt().getCountCart(page);
        assert.equal(num, '1' , 'Элемент не добавился в корзину');
    });

    it ('Проверка прокидывания выбранного размера в корзину', async () => { 
        await app().Home().addToCartWithParams(page);
        const sizeColor = await app().Orders().getSizeColor(page);
        assert.strictEqual(sizeColor, 'Color : Orange, Size : M', 'Цвет или размер не соответствует выбранному ранее');
    });

    it ('Проверка прокидывания выбранного количества в корзину', async () => { 
        await app().Home().addToCartWithParams(page);
        const amount = await app().Orders().getAmount(page);
        assert.equal(amount, '3', 'Количество элементов не соответствует ранее выбранному значению');
    });
});
