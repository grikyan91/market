import DressesPage from './dressesPage';
import TshirtPage from './tShirtPage';
import WomenPage from './womenPage';
import OrdersPage from './ordersPage';
import HomePage from './homePage';

const app = () => ({
    Women: () => ({...WomenPage}),
    Dress: () => ({...DressesPage}),
    Tshirt: () => ({...TshirtPage}),
    Orders: () => ({...OrdersPage}),
    Home: () => ({...HomePage}),
})

export default app;
