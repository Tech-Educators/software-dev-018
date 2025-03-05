import CoolText from "@/components/CoolText";

export default function Page() {
  return (
    <section className="flex flex-row gap-4 max-w-s min-h-svh bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <CoolText>
        This is some -cool- text!
      </CoolText>
      <h2 className="animate-spin">Lets play with tailwind!</h2>
      <p className="text-red-500 hover:text-purple-400 text-center text-8xl shadow-xl max-h-fit">This is being styled with tailwind!</p>
    </section>
  )
}