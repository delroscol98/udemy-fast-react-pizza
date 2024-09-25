import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { getUsername } from "../user/userSlice";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const username = useSelector(getUsername);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) navigate("/");
  }, [username]);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
