import Link from "next/link";
import { FiEdit, FiTrash, FiCopy } from "react-icons/fi";
import styles from "./styles.module.scss";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import { IRestaurant } from "@shared/types";
import { useRestaurants } from "@shared/hooks/useRestaurants";
import { useAuthentication } from "@shared/hooks/useAuthentication";
import Login from "../login";

export function RestaurantList() {
    const { restaurants, deleteRestaurant, duplicateRestaurant, filterRestaurant } = useRestaurants();
    const { authenticated } = useAuthentication();
    const [currentRestaurants, setCurrentRestaurants] = useState<IRestaurant[] | []>(restaurants)

    useEffect(() => {
        setCurrentRestaurants(restaurants);
    }, [restaurants])

    function handleDeleteRestaurant(id: string) {
        deleteRestaurant(id);
    }

    function searchRestaurant(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        value ? setCurrentRestaurants(filterRestaurant(value)) : setCurrentRestaurants(restaurants)
    }

    if (restaurants.length === 0) {
        return (
            <section className={styles.container}>
                <Link href={{ pathname: "/restaurant/add" }} passHref>
                    <div className={styles.addRestaurant}>
                        Add Restaurant
                    </div>
                </Link>
                <p>There are no restaurants in the database.</p>
            </section>
        );
    }


    return (authenticated ? 
        <section className={styles.container}>
            <div className={styles.optionsContainer}>
                <div className={styles.searchRestaurants}>
                    <input onChange={searchRestaurant} placeholder="Filter restaurants" />
                </div>
                <div className={styles.addRestaurantContainer}>
                    <Link href={{ pathname: "/restaurant-add" }} passHref>
                        <div className={styles.addRestaurant}>
                            Add Restaurant
                        </div>
                    </Link>
                </div>
            </div>
            <table className={styles.restaurants}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRestaurants.map((restaurant) => (
                        <tr className={styles.restaurantRow} key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{restaurant.capacity}</td>
                            <td>
                                <Link href={`/restaurant/edit/${restaurant.id}`} passHref>
                                    <button
                                        className={styles.buttonEdit}
                                    >
                                        <FiEdit />
                                    </button>
                                </Link>
                                <button
                                    className={styles.buttonDelete}
                                    onClick={() => handleDeleteRestaurant(restaurant.id)}
                                >
                                    <FiTrash />
                                </button>
                                <button
                                    className={styles.buttonDuplicate}
                                    onClick={() => duplicateRestaurant(restaurant.id, uuid())}
                                >
                                    <FiCopy />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        :
        <Login />
    );
}