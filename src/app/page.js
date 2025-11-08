import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link
          href={"/login"}
          className="cursor-pointer m-5 bg-amber-900 text-amber-50 p-5 rounded-2xl"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="cursor-pointer m-5 bg-amber-900 text-amber-50 p-5 rounded-2xl"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
