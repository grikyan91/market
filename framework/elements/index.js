import AddToCard from './addToCard';
import MoreView from './moreView';

const app = () => ({
    AddToCard: () => ({...AddToCard}),
    MoreView: () => ({...MoreView}),
})

export default app;
