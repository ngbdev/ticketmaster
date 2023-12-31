import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      ></input>
    </div>
  );
};

export default Navbar;
