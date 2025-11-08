import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link
          href={"/login"}
          className="cursor-pointer m-5 bg-teal-700 text-white p-5 rounded-2xl"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="cursor-pointer m-5 bg-teal-700 text-white p-5 rounded-2xl"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
