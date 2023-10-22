import { useNavigate } from "react-router";
import styles from "../components/RepoCard.module.css";
import Button from "./Button";
const RepoCard = ({ repoData }) => {
  const { name, id } = repoData;
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className="avatar-sm">
        <img src={repoData.owner.avatar_url} alt="" />
      </div>
      <h3>{name}</h3>
      <div className="highlight"></div>
      <Button onClick={() => navigate(`detail/${name}`)}>View Details</Button>
    </div>
  );
};

export default RepoCard;
