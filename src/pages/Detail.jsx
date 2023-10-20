import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return <p>{id}</p>;
};

export default Detail;
