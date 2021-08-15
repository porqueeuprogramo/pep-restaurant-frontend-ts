import type { NextPage } from 'next'
import { ToastContainer } from "react-toastify";
import { Header } from '@shared/components/header';
import { RestaurantList } from "@shared/components/list";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <RestaurantList />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default Home
