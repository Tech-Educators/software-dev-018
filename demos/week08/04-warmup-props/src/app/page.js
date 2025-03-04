
import styles from "./page.module.css";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
   <section>
    <h2>my cool app!</h2>
    <ProfileCard name='sam' location='liverpool' age={25}/>
    <ProfileCard name='tom' location={'cape town'}/>
    <ProfileCard name='peter' age={19 + 2}/>
    <ProfileCard age={19 + 2} location={'hull'}/>
   </section>
  );
}
