import { useSelector } from 'react-redux';
import CreateUser from "../features/user/CreateUser";
import Button from './Button';
function Home() {
  const username = useSelector(state => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username?<Button type="primary" to="/menu">continue ordering, {username}</Button>:<CreateUser />}
    </div>
  );
}

export default Home;
