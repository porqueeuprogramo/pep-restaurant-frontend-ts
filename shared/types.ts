export interface IRestaurant {
    id: string,
    name: string,
    location: string,
    capacity: number,
}
export interface IUser {
    id: string,
    password?: string,
}
export interface IRestaurantsProvider {
    restaurants: IRestaurant[],
    getRestaurant: (restaurantId: string) => any,
    createRestaurant: (data: IRestaurant) => void,
    updateRestaurant: (restaurantId: string, data: Omit<IRestaurant, "id">) => void,
    duplicateRestaurant: (restaurantId: string, data: IRestaurant) => void,
    deleteRestaurant: (restaurantId: string) => void,
    filterRestaurant: (searchExpression: string) => IRestaurant[] | [],
}
export interface IAuthenticationProvider {
    setAuthenticated: (authenticated: boolean) => void,
    authenticated: boolean
}

interface BaseContext {
    children: React.ReactNode,
}
export interface IRestaurantsContext extends BaseContext { };
export interface IAuthenticationContext extends BaseContext {};

export interface IRestaurantsAPIData {
    name?: string,
    location?: string,
    capacity?: string,
}
