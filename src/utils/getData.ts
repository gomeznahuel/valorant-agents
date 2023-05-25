import axios from "axios";

const getData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export default getData;
