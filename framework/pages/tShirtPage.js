import app from '../elements';

const tshirtPage = '.sf-menu > li:nth-child(3)';

const TshirtPage = {
    goToPage: async (page) => {
        await page.waitForSelector(tshirtPage);
        await page.click(tshirtPage);
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

export default TshirtPage;
