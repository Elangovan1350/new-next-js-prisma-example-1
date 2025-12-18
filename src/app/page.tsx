import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const response = await axios.get(
    "https://new-next-js-prisma-example-1.vercel.app/api/users"
  );
  console.log(response.data);

  return (
    <div>
      <Link
        href="/api/users"
        className="inline-block rounded-2xl font-semibold underline bg-red-500 underline-offset-2 px-5 py-3 border border-black"
      >
        Go to Users API
      </Link>
      <li>
        {response.data.users.map((user: any) => (
          <Link href={`/api/users/${user.id}`} key={user.id}>
            <div className="p-2 bg-amber-300 m-2 text-indigo-700 font-bold rounded-lg inline-block select-none">
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>and</p>
              <p>{user.email}</p>
            </div>
          </Link>
        ))}
      </li>
    </div>
  );
}
