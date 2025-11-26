import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4">
      <nav className="py-7">
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/experience" className="[&.active]:font-bold">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="[&.active]:font-bold">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="[&.active]:font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="[&.active]:font-bold">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
