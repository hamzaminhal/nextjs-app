const { default: axios } = require("axios");

const products = async () => {
  let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log("products=>", data.data);
  return data;
};

export { products };
