import { NavLink, Outlet, Link } from "react-router";

function Layout() {
  return (
    <div className=" bg-slate-900 flex flex-col h-screen">
      <header className="">
        <Link to="/">
          <h1 className="text-4xl font-bold p-4 text-white">
            🔧&nbsp; Kook Toolkit
          </h1>
        </Link>
      </header>
      <main className="overflow-hidden flex">
        <aside className="hidden lg:block border-r p-4 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/temperature-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Temperature Converter
          </NavLink>
          <NavLink
            to="/energy-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Energy Converter
          </NavLink>
          <NavLink
            to="/frequency-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Frequency Converter
          </NavLink>
          <NavLink
            to="/password-generator"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Password Generator
          </NavLink>
        </aside>
        <article className="overflow-scroll flex-1">
          <Outlet />
        </article>
      </main>
    </div>
  );
}

export default Layout;
