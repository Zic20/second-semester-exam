import { useEffect, useState } from "react";
import "../components/DetailCard.css";
const DetailCard = ({ data }) => {
  const {
    name,
    github_url,
    date_created,
    watchers,
    stars,
    subscribers,
    languages,
  } = data;
  return (
    <div className="detailCard">
      <div className="head">
        <div className="avatar"></div>
        <div className="description-box">
          <h1>{name}</h1>
          <h2>
            <a href={github_url} rel="noreferrer" target="_blank">
              Go to repo on github
            </a>
          </h2>
          <p>Created On: {date_created}</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <Stat data="Watchers" value={watchers} />
        </div>
        <div className="stat">
          <Stat data="Stars" value={stars} />
        </div>
        <div className="stat">
          <Stat data="Subscribers" value={subscribers} />
        </div>
      </div>
      <LanguagesStats languageData={languages} />
    </div>
  );
};

function LanguagesStats({ languageData }) {
  const [languageStats, setLanguageStats] = useState([]);

  useEffect(() => {
    let totalValue = 0;
    for (const key in languageData) {
      if (languageData.hasOwnProperty(key)) {
        totalValue += languageData[key] || 0;
      }
    }

    const data = languageData;
    for (let key in data) {
      data[key] = Math.floor((data[key] / totalValue) * 100);
    }

    let result = [];
    for (let key in data) {
      result.push({ data: key, value: data[key] });
    }
    console.log(result);

    setLanguageStats(result);
  }, [languageData]);

  return (
    <div className="languages">
      <div className="heading">
        <h5>Languages</h5>
      </div>
      <div className="info">
        {languageStats.map((row, index) => {
          return <Stat key={index} data={row.data} value={`${row.value}%`} />;
        })}
      </div>
    </div>
  );
}

function Stat({ data, value }) {
  return <p>{`${data}: ${value}`}</p>;
}

export default DetailCard;
