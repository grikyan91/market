import app from '../elements';

const dressesPage = '.sf-menu > li:nth-child(2)';

const DressesPage = {
    goToPage: async (page) => {
        await page.waitForSelector(dressesPage);
        await page.click(dressesPage);
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

export default DressesPage;
