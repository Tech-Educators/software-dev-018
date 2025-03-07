import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-raisinBlack text-nyanza text-center p-6">
            <h1 className="text-5xl font-bold mb-4 text-mindaro">Somewhat Interesting</h1>
            <p className="text-lg text-naplesYellow max-w-lg mb-6">
                A blog that might, possibly, be interesting. No guarantees. No refunds.
            </p>
            <div className="flex gap-4">
                <Link href="/posts" className="px-6 py-3 bg-auburn text-nyanza font-semibold rounded-lg shadow-md hover:bg-[#7b1d1e] transition">
                    Read the Blog
                </Link>
                <Link href="/posts/add-post" className="px-6 py-3 bg-naplesYellow text-raisinBlack font-semibold rounded-lg shadow-md hover:bg-[#d6b73e] transition">
                    Contribute Something
                </Link>
            </div>
            <div className="mt-10 text-mindaro text-sm">
                <p>Warning: Content may or may not be worth your time.</p>
                <p>Proceed with mild curiosity.</p>
            </div>
        </div>
    );
}