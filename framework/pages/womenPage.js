import app from '../elements';

const womenPage = '.sf-menu > li:nth-child(1)';

const WomenPage = {
    goToPage: async (page) => {
        await page.waitForSelector(womenPage);
        await page.click(womenPage);
        return;
    },
    getSuccessText: async (page) => {
        const popupText = await app().AddToCard().getSuccessText(page);
        return popupText;
    },
    getCountCart: async (page) => {
        const countCart = await app().AddToCard().getCountCart(page);
        return countCart;
    }
}

export default WomenPage;
