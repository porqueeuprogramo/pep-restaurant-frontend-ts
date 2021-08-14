export interface IRestaurantsProvider {
    restaurants: IRestaurant[],
    getRestaurant: (restaurantId: string) => any,
    createRestaurant: (data: IRestaurant) => void,
    updateRestaurant: (restaurantId: string, data: Omit<IRestaurant, "id">) => void,
    duplicateRestaurant: (restaurantId: string, data: IRestaurant) => void,
    deleteRestaurant: (restaurantId: string) => void,
    filterRestaurant: (searchExpression: string) => IRestaurant[] | [],
}

export interface IRestaurantsContext {
    children: React.ReactNode,
}

export interface IRestaurantsAPIData {
    name?: string,
    location?: string,
    capacity?: string,
}

export interface IRestaurant {
    id: string,
    name: string,
    location: string,
    capacity: number,
}