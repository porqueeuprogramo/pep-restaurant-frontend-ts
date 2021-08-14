import { Switch, Route } from "react-router-dom";
import { RestaurantAdd } from "../components/restaurant/add";
import { RestaurantEdit } from "../components/restaurant/edit";
import { RestaurantList } from "../components/restaurant/list";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RestaurantList} />
      <Route path="/add-restaurant" component={RestaurantAdd} />
      <Route path="/edit-restaurant/:id" component={RestaurantEdit} />
    </Switch>
  );
}

export default Routes;
