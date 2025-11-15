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
import { model } from "../partial-components/model";

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
    MySwal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        MySwal.showLoading();
      },
    });

    const incomingData = await posts();
    setAllPosts(incomingData.data);

    MySwal.close();
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
    MySwal.fire({
      title: "Updating...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        MySwal.showLoading();
      },
    });
    console.log(inputData);
    await addEditDataToBackend(inputData);
    await fetchProducts();
    setInputData({
      id: null,
      name: "",
      description: "",
    });
    setShowBtn(true);
    MySwal.close();
  };

  const addTask = async () => {
    if (inputData.name.trim() && inputData.description.trim()) {
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
    } else {
      MySwal.fire({
        title: "Alert",
        text: "Please Enter all fields",
        icon: "error",
      });
    }
  };

  // const dltPost = async (id) => {
  //   MySwal.showLoading();
  //   await dltPostAtBackent(id);
  //   await fetchProducts();
  //   MySwal.hideLoading();
  // };
  const dltPost = async (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dltPostAtBackent(id);
        await fetchProducts();
        Swal.fire({
          title: "Deleted!",
          text: "Your Post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Posts</h1>
      {/* <button
          onClick={() => {
            model();
          }}
          className="bg-blue-600 rounded-md px-4 py-1 text-white hover:bg-blue-700"
        >
          Add Post
        </button> */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {allPosts.map((post) => {
          const { name, description, id } = post;

          return (
            <div
              key={id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm 
                   hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed break-words flex-grow">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={() => editData(post)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md
                       hover:bg-blue-700 w-full sm:w-auto"
                >
                  Edit
                </button>

                <button
                  onClick={() => dltPost(id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md
                       hover:bg-red-700 w-full sm:w-auto"
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
