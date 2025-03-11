import CoolTitleCard from "@/components/CoolTitleCard";
import MotionPath from "@/components/MotionPath";

export default function Home() {
  return (
    <div>
      <h2>My blog</h2>
      <p>Welcome to my website!</p>
      <MotionPath />
      <CoolTitleCard>
        <p>Rendred on the server!</p>
      </CoolTitleCard>
    </div>
  )
}