import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Login Box */}
        <Link
          href="/login"
          className="flex flex-col items-center justify-center bg-teal-600 text-white rounded-2xl p-8 
                 hover:bg-teal-700 shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">🔑</span>
          <h2 className="text-xl font-semibold mb-2">Login</h2>
          <p className="text-center text-sm">
            Access your account and manage your posts
          </p>
        </Link>

        {/* Sign Up Box */}
        <Link
          href="/signup"
          className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-2xl p-8 
                 hover:bg-blue-700 shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">📝</span>
          <h2 className="text-xl font-semibold mb-2">Sign Up</h2>
          <p className="text-center text-sm">
            Create a new account to start posting
          </p>
        </Link>

        {/* Posts Box */}
        <Link
          href="/posts"
          className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-2xl p-8 
                 hover:bg-purple-700 shadow-lg transition transform hover:scale-105"
        >
          <span className="text-4xl mb-4">📄</span>
          <h2 className="text-xl font-semibold mb-2">Posts</h2>
          <p className="text-center text-sm">View and manage all your posts</p>
        </Link>
      </div>
    </div>
  );
}
