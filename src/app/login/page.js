import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5">
          {/* <!-- Email --> */}
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
            />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
            />
          </div>

          {/* <!-- Forgot Password --> */}
          <div className="text-right">
            <Link
              href="#"
              className="text-sm text-teal-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-medium py-2 rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-5">
          Don’t have an account?
          <Link
            href="signup"
            className="text-teal-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
