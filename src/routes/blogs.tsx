import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
});

function Blogs() {
  return <div className="p-2">Blogs Page</div>;
}
