import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block cursor-pointer text-sm rounded-full bg-yellow-500 my-6 font-semibold tracking-wide text-stone-800 uppercase transition-all duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
    secondary:
      "inline-block cursor-pointer text-sm rounded-full border-2 border-stone-300 my-6 font-semibold tracking-wide text-stone-400 uppercase transition-all duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if(to){
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );}
  if(onClick){
     return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );}
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
