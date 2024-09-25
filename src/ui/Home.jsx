import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { getUsername } from "../features/user/userSlice";
import Button from "./Button";

function Home() {
  const username = useSelector(getUsername);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}

      <p className="mt-11 text-[10px]">
        Designed by Jonas Schmedtmann for his online course The Ultimate React
        Course 2024: React, Next.js, Redux & More. Copyright &copy; by Jonas
        Schmedtmann.
      </p>
    </div>
  );
}

export default Home;
