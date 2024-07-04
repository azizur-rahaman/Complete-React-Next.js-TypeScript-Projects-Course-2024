import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    console.log(data);

    const {id, login, avatar_url, html_url, company, bio} = data;

  return (
    <>
      <h2>Fetch Data</h2>
      <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt="" />
      <h3>{data.login}</h3>
      <h4>{`Works at ${data.company}`}</h4>
      <p>{data.bio}</p>
    </>
  );
};

export default MultipleReturnsFetchData;
