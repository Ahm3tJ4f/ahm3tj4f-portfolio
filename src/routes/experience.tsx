import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experience')({
  component: Experience,
})

function Experience() {
  return <div className="p-2">Experience Page</div>
}
