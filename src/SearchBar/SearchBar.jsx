import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css"
import { useState } from "react";

export default function SearchBar({ submit }) {
  const [searchText, setSearchText] = useState('');
  function fetchData(event) {
    if (event.key === "Enter" && searchText.trim() != "") {
      console.log(searchText)
      submit(searchText)
      setSearchText('')
    }
  }

  function handleChange(event) {
    setSearchText(event.target.value)
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input type="text"
        className={s.searchText}
        placeholder="Search TV show you may like"
        onKeyUp={fetchData}
        onChange={handleChange}
        value={searchText}
      />
    </>
  )
}