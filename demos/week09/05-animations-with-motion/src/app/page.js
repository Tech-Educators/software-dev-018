import CoolTitleCard from "@/components/CoolTitleCard";
import MotionPath from "@/components/MotionPath";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
     <div className="col-start-2 col-span-2 bg-yellow-200">
      <h2>My blog</h2>
        <p>Welcome to my website!</p>
        <MotionPath/>
     </div>
      <div className="">
        <CoolTitleCard>
          <p>Rendred on the server!</p>
        </CoolTitleCard>
      </div>
    </div>
  )
}