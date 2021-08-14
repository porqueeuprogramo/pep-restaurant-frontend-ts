import { Link, useHistory } from "react-router-dom";
import { FiEdit, FiTrash, FiCopy } from "react-icons/fi";
import { useRestaurants } from "hooks/useRestaurants";
import styles from "./styles.module.scss";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import { IRestaurant } from "types";

export function RestaurantList() {
  const history = useHistory();
  const { restaurants, deleteRestaurant, duplicateRestaurant, filterRestaurant } = useRestaurants();
  const [currentRestaurants, setCurrentRestaurants] = useState<IRestaurant[] | []>(restaurants)

  useEffect(() => {
    setCurrentRestaurants(restaurants);
  }, [restaurants])

  function handleEditRestaurant(id: string) {
    history.push(`/edit-restaurant/${id}`);
  }

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
        <Link to="/add-restaurant" className={styles.addRestaurant}>
          Add Restaurant
        </Link>
        <p>There are no restaurants in the database.</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.optionsContainer}>
        <div className={styles.searchRestaurants}>
          <input onChange={searchRestaurant} placeholder="Filter restaurants"/>
        </div>
        <div className={styles.addRestaurantContainer}>
          <Link to="/add-restaurant" className={styles.addRestaurant}>
            Add Restaurant
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
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{restaurant.capacity}</td>
              <td>
                <button
                  className={styles.buttonEdit}
                  onClick={() => handleEditRestaurant(restaurant.id)}
                >
                  <FiEdit />
                </button>
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
  );
}