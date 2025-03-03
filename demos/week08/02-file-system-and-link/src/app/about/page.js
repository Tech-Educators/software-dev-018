import Button from "@/components/Button"
export default function Page() {
    return (
        <div>
            <h2>This is the about page!</h2>
            <Button>
                <h2>This is a big button!</h2>
            </Button>
        </div>
    )
}

// the file has to be called page.js
// the function inside doesn't have to be called Page. 

// children is useful for passing different elements to a component
// 