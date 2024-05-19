import 'animate.css';
import { redirect } from 'next/navigation'


export const revalidate = 0

export default function Home() {
  return (
    redirect('/infractor')
  )
}
