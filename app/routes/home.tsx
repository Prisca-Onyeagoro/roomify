import Navbar from "~/components/Navbar/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="bg-white text-4xl text-black">Welcome, can we begin</h1>
    </div>
  );
}
