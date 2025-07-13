import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-600 focus:outline-none sm:w-64 sm:focus:w-72 lg:w-96"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
