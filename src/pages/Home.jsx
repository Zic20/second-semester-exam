import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SearchBox from "../components/SearchBox";
import "../pages/Home.css";
import { json, useLoaderData } from "react-router";
import avatarImage from "../assets/zic.jpg";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    if (data) setRepos(data);
  }, [data]);

  function onSearchInputChangeHandler(value) {
    if (value === "") {
      setRepos(data);
      return;
    }

    let result = data.filter((repo) =>
      repo.name.toLowerCase().startsWith(value)
    );
    setRepos(result);
  }

  return (
    <>
      <header id="head">
        <div className="avatar">
          <img src={avatarImage} alt="" />
        </div>
        <div className="description-box">
          <h1>Isaac Zally Jr</h1>
          <h2>
            Github Profile:{" "}
            <a href="https://github.com/Zic20" rel="noreferrer" target="_blank">
              Zic20
            </a>
          </h2>
        </div>
      </header>
      <SearchBox onValueChange={onSearchInputChangeHandler} />
      <section id="repos">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </section>
    </>
  );
};

export async function loader() {
  const response = await fetch("https://api.github.com/users/Zic20/repos");
  if (!response.ok) {
    throw json(
      {
        message: `Something went wrong ${response.status}`,
      },
      { status: response.status }
    );
  }
  const responseData = await response.json();
  return responseData;
}

export default Home;
