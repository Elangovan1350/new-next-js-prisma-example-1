import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/api/users"
        className="inline-block rounded-2xl font-semibold underline bg-red-500 underline-offset-2 px-5 py-3 border border-black"
      >
        Go to Users API
      </Link>
    </div>
  );
}
