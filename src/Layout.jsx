import { NavLink, Outlet, Link } from "react-router";

function Layout() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col h-screen">
      <header className="font-[Quintessential]">
        <h1 className="text-4xl font-bold p-4 text-white">
          {/* <i className="fa-solid fa-bars" />
          &nbsp; */}
          <Link to="/">Kooks Toolkit</Link>
        </h1>
      </header>
      <main className="overflow-hidden flex">
        <aside className="hidden lg:flex border-r p-4 text-white flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            🏠Home
          </NavLink>
          <NavLink
            to="/currency-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            💰Currency Converter&nbsp;
            <span className="text-amber-500 font-bold bg-slate-50 px-1 rounded-md">
              ✨new
            </span>
          </NavLink>
          <NavLink
            to="/temperature-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            🌡️Temperature Converter
          </NavLink>
          <NavLink
            to="/energy-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            ⚡Energy Converter
          </NavLink>
          <NavLink
            to="/frequency-converter"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            〰️Frequency Converter
          </NavLink>
          <hr />
          <NavLink
            to="/password-generator"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            🔑Password Generator
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
