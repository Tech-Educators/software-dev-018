import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";
import LoadingComponent from "./loadingComponent";

export default function Page() {
    return (
        <div>
            <h2>this is the fast page</h2>
            <p>This will load the entire page quickly except the slow compoennt.</p>
            <p>We'll put the slow component in something called suspense.</p>
            <Suspense fallback={<LoadingComponent />}>
                <SlowComponent />
            </Suspense>
        </div>
    )
}