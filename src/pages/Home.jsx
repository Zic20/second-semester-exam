import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SearchBox from "../components/SearchBox";
import "../pages/Home.css";

const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/Zic20/repos");
      if (!response.ok) return;
      const responseData = await response.json();
      if (responseData) setRepos(responseData);
    }

    fetchData();
  }, []);

  return (
    <>
      <header id="head">
        <div className="avatar">&nbsp;</div>
        <div className="description-box">
          <h1>Isaac Zally Jr</h1>
          <h2>
            Github Profile: <a href="">Zic20</a>
          </h2>
        </div>
      </header>
      <SearchBox />
      <section id="repos">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </section>
    </>
  );
};

export default Home;
