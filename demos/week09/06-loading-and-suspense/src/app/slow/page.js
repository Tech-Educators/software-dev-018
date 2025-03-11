import SlowComponent from "@/components/SlowComponent";

export default function Page() {
    return (
        <div>
            <p>This whole page is being slowed down by the slow component. If only the user could see something was happening.....</p>
            <SlowComponent />
        </div>
    )
}