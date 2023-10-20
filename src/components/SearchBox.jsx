import styles from "../components/SearchBox.module.css";
const SearchBox = ({ onValueChange }) => {
  function onInputChangeHandler(event) {
    onValueChange(event.target.value.toLowerCase());
  }
  return (
    <div className={styles.searchBox}>
      <input onChange={onInputChangeHandler} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBox;
