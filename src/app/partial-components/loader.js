export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-10 px-40 rounded-2xl shadow-lg flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-teal-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
