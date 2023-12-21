import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import earth from "/src/earth.jpg";

export default function Root() {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${earth})` }}
    >
      <nav className="absolute top-0 left-0 right-0 p-8  flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-white">
          <Link className="text-sky-100" to={"/"}>
            World Clock
          </Link>
        </h1>
      </nav>
      <main className="flex flex-col items-center justify-center h-full">
        <Outlet />
      </main>
    </div>
  );
}
