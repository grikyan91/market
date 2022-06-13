const card = 'li.ajax_block_product:nth-child(1) > div:nth-child(1)';
const buttonAdd = 'li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)';
const success = '.layer_cart_product > h2:nth-child(2)';
const popup = '#layer_cart';
const cart = '.shopping_cart';
const count = 'span.ajax_cart_quantity:nth-child(2)';

const AddToCard = {
    getSuccessText: async (page) => {
        await page.waitForSelector(card);
        await page.hover(card);
        await page.waitForSelector(buttonAdd);
        await page.click(buttonAdd);
        await page.waitForSelector(popup);
        const popupText = await page.textContent(success);
        return popupText;
    },
    getCountCart: async (page) => {
        await page.waitForSelector(cart);
        const countCart = await page.textContent(count);
        return countCart;
    }
}

export default AddToCard;
