export default function NavBar() {

    return (
        <nav className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My cool app!</h1>
          {/* <button
            className="px-4 py-2 rounded bg-emerald-500 dark:bg-emerald-700 text-white"
          >
            Switch to mode
          </button> */}
        </div>
      </nav>
    )
}