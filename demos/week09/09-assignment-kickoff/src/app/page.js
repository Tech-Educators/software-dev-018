import Image from "next/image"
export default function Home() {
  return (
    <div className="">
      <h2>Home</h2>
      <Image src="/study-hour-1200.jpg" width={600} height={1200} alt="A young woman reads resting her head on her hand at a desk cluttered with books across which two roses have been thrown." />
    </div>
  )
}