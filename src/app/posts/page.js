"use client";
import { useEffect, useState } from "react";
import {
  addEditDataToBackend,
  addTaskToBackend,
  dltPostAtBackent,
  posts,
} from "../partial-components/posts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function Products() {
  const [allPosts, setAllPosts] = useState([]);
  const [inputData, setInputData] = useState({
    id: null,
    name: "",
    description: "",
  });
  const [showBtn, setShowBtn] = useState(true);

  const fetchProducts = async () => {
    MySwal.showLoading();
    const incomingData = await posts();
    setAllPosts(incomingData.data);
    MySwal.hideLoading();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const editData = (post) => {
    let { id, name, description } = post;
    console.log(post);
    setInputData({ id: id, name: name, description: description });
    setShowBtn(false);
  };

  const addEditData = async () => {
    console.log(inputData);
    await addEditDataToBackend(inputData);
    await fetchProducts();
    setInputData({
      id: null,
      name: "",
      description: "",
    });
    setShowBtn(true);
  };

  const addTask = async () => {
    const newPost = {
      name: inputData.name,
      description: inputData.description,
    };
    await addTaskToBackend(newPost);
    await fetchProducts();

    setInputData({
      name: "",
      description: "",
    });
  };

  const dltPost = async (id) => {
    MySwal.showLoading();
    await dltPostAtBackent(id);
    await fetchProducts();
    MySwal.hideLoading();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Posts</h1>
      <div className="border border-gray-300 rounded-lg p-4 mb-10 w-full max-w-lg bg-white shadow-sm">
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={inputData.name}
          onChange={(e) => {
            setInputData((prev) => ({ ...prev, name: e.target.value }));
          }}
          placeholder="Enter title"
          className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700 font-medium mb-1">
          Description
        </label>
        <textarea
          placeholder="Enter description"
          value={inputData.description}
          onChange={(e) => {
            setInputData((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {showBtn ? (
          <button
            onClick={() => {
              addTask();
            }}
            className="bg-blue-600 rounded-md px-4 py-1 text-white hover:bg-blue-700"
          >
            Add Post
          </button>
        ) : (
          <button
            onClick={() => {
              addEditData();
            }}
            className="bg-blue-600 rounded-md px-4 py-1 text-white hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => {
          const { name, description, id } = post;
          return (
            <div
              key={id}
              className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    editData(post);
                  }}
                  className="bg-blue-600 rounded-md px-4 py-1 text-white hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dltPost(id);
                  }}
                  className="bg-red-600 rounded-md px-4 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
