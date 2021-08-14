import React from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { IRestaurant, IRestaurantsContext, IRestaurantsProvider } from "types";
import { v4 as uuid } from 'uuid';

export const RestaurantsContext = createContext<IRestaurantsContext | {}>({});

export function RestaurantsProvider({ children }: IRestaurantsContext) {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([{
    id: uuid(),
    name: "Restaurant 1",
    location: "Location 1",
    capacity: 10,
  },
  {
    id: uuid(),
    name: "Restaurant 2",
    location: "Location 2",
    capacity: 20,
  },
  {
    id: uuid(),
    name: "Restaurant 3",
    location: "Location 3",
    capacity: 30,
  },
  ]);

  function getRestaurant(restaurantId: string): IRestaurant | undefined {
    const restaurant = restaurants.find(
      (item) => item.id === restaurantId
    );
    return restaurant;
  }

  function createRestaurant(data: IRestaurant) {
    setRestaurants((currentRestaurants) => [...currentRestaurants, data]);
    toast.success("The restaurant was created");
  }

  function updateRestaurant(restaurantId, data: IRestaurant) {
    const newRestaurantList = [...restaurants];
    const selectedRestaurant = newRestaurantList.findIndex(res => res.id === restaurantId);
    newRestaurantList[selectedRestaurant] = data;
    setRestaurants(newRestaurantList);
    toast.success("The restaurant was updated");
  }

  function duplicateRestaurant(restaurantId, newId) {
    const newRestaurantList = [...restaurants];
    const selectedRestaurantIndex = newRestaurantList.findIndex(res => res.id === restaurantId);
    newRestaurantList.splice(selectedRestaurantIndex, 0, {...newRestaurantList[selectedRestaurantIndex], id: newId});
    setRestaurants(newRestaurantList);
    toast.success("The restaurant was duplicated");
  }

  function deleteRestaurant(restaurantId: string) {
    setRestaurants((currentRestaurants) => currentRestaurants.filter(res => res.id !== restaurantId));
    toast.success("The restaurant was deleted");
  }

  function filterRestaurant(searchExpression: string): IRestaurant[] | [] {
    const regexp = new RegExp(searchExpression, 'i');
    return restaurants.filter(restaurant => regexp.test(restaurant.name) || regexp.test(restaurant.location));
  }

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        getRestaurant,
        createRestaurant,
        deleteRestaurant,
        updateRestaurant,
        duplicateRestaurant,
        filterRestaurant
      }}
    >
      <React.Fragment>
        {children}
      </React.Fragment>
    </RestaurantsContext.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantsContext) as IRestaurantsProvider;
  return context;
}
