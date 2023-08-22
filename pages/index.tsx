// import HomePage from "@/features/pages/home";
import dynamic from 'next/dynamic'
const HomePage = dynamic(() => import('@/features/pages/home'), {
  ssr: false
})
export default function Home() {
  return <HomePage/>
}
