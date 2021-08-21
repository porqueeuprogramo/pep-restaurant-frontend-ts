import type { NextPage } from 'next'
import { ToastContainer } from "react-toastify";
import { Header } from '@shared/components/header';
import { RestaurantList } from "pages/restaurant/list";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <RestaurantList />
            <ToastContainer autoClose={3000} />
        </div>
    )
}

export default Home
