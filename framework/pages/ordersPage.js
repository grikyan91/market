const sizeM = 'td.cart_description > small:nth-child(3) > a:nth-child(1)';
const num = '.cart_quantity_input';

const OrdersPage = {
    getSizeColor: async (page) => {
        const size = await page.textContent(sizeM);
        return size;
    },
    getAmount: async (page) => {
        const element1 = await page.locator(num);
        const amount = await element1.getAttribute('value');
        return amount;
    }
}

export default OrdersPage;
