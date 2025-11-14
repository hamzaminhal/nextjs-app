const { default: axios } = require("axios");

const posts = async () => {
  let data = await axios.get("https://smit-backend-crud.vercel.app/api/items");
  //   console.log("products=>", data.data);
  return data.data;
};

const addEditDataToBackend = async (data) => {
  console.log(data);
  await axios.patch(
    `https://smit-backend-crud.vercel.app/api/items/${data.id}`,
    {
      name: data.name,
      description: data.description,
    }
  );
  console.log("success");
};

const addTaskToBackend = async (inputData) => {
  await axios.post(
    `https://smit-backend-crud.vercel.app/api/items/`,
    inputData
  );
  posts();
  console.log("success");
};

const dltPostAtBackent = async (id) => {
  await axios.delete(`https://smit-backend-crud.vercel.app/api/items/${id}`);
  posts();
  console.log("success");
};
export { posts, addEditDataToBackend, addTaskToBackend, dltPostAtBackent };
