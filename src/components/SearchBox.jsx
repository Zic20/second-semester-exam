import styles from "../components/SearchBox.module.css";
import Button from "./Button";
const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBox;
