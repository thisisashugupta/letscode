import Image from 'next/image'
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <>
    <main className="flex w-screen h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <div className='text-black'>Letscode</div>
    </main>
    </>
  )
}
