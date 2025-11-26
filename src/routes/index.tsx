import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="py-2">
      <h1 className="text-5xl font-bold">Ahmad Jafarov</h1>
    </div>
  );
}
