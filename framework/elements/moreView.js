const card = 'li.ajax_block_product:nth-child(1) > div:nth-child(1)';
const more = '#homefeatured > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > a:nth-child(2)';
const plus = 'a.btn:nth-child(4)';
const size = '#group_1';
const add = '#add_to_cart';
const popup = '#layer_cart';
const ordersButton = 'a.btn:nth-child(2)';

const MoreView = {
    addToCartWithParams: async (page) => {
        await page.waitForSelector(card);
        await page.hover(card);
        await page.waitForSelector(more);
        await page.click(more);
        await page.dblclick(plus);
        await page.selectOption(size, { value: '2' });
        await page.click(add);
        await page.waitForSelector(popup); 
        await page.click(ordersButton);
        return;
    }
}

export default MoreView;
