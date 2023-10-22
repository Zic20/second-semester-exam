import { json, useLoaderData } from "react-router";
import DetailCard from "../components/DetailCard";
import { useEffect, useState } from "react";

const Detail = () => {
  const [filteredData, setFilteredData] = useState({});
  const data = useLoaderData();
  useEffect(() => {
    async function setData() {
      if (data) {
        const languages = await getLanguages(data.languages_url);
        setFilteredData({
          name: data.name,
          github_url: data.html_url,
          date_created: data.created_at,
          watchers: data.watchers,
          stars: data.stargazers_count,
          subscribers: data.subscribers_count,
          languages,
        });
      } else {
        throw new Error("Page not found");
      }
    }

    async function getLanguages(url) {
      const response = await fetch(url);

      if (!response.ok) {
        throw json(
          {
            message: `Something went wrong ${response.status}`,
          },
          { status: response.status }
        );
      }

      return await response.json();
    }

    setData();
  }, [data]);

  return <DetailCard data={filteredData} />;
};

export async function loader({ params }) {
  const name = params.name;
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer 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`
  );
  const response = await fetch(`https://api.github.com/repos/zic20/${name}`, {
    headers,
  });
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

export default Detail;
