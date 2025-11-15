export default function Model({
  inputData,
  setInputData,
  showBtn,
  addTask,
  addEditData,
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-10 w-full max-w-lg bg-white shadow-sm">
      <label className="block text-gray-700 font-medium mb-1">Title</label>
      <input
        type="text"
        value={inputData.name}
        onChange={(e) => {
          setInputData((prev) => ({ ...prev, name: e.target.value }));
        }}
        placeholder="Enter title"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (showBtn) {
              addTask();
            } else {
              addEditData();
            }
          }
        }}
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (showBtn) {
              addTask();
            } else {
              addEditData();
            }
          }
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
  );
}
