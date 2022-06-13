import app from '../elements';

const HomePage = {
    addToCartWithParams: async (page) => {
        await app().MoreView().addToCartWithParams(page);
        return;
    }
}

export default HomePage;
