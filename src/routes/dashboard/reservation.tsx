import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/reservation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/reservation"!</div>
}
