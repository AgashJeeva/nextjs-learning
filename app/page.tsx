import Link from "next/link";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div>
      <h1>Hello Agash! 🚀</h1>

      <Welcome />

      <Link href="/about">Go to About</Link>
    </div>
  );
}
