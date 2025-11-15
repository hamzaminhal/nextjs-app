import Swal from "sweetalert2";

const model = async () => {
  const { value: formValues } = await Swal.fire({
    title: "Add Task",
    html: `
    <labelclass="w-full">Title</label>
    <input id="swal-input1" class="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <labelclass="w-full">Description</label>
    <textarea id="swal-input2" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
  `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
};

export { model };
