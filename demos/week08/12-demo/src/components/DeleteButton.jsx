'use client'
export default function DeleteButton({deleteFunction, id}) {
    return (
        <p onClick={() => {
            deleteFunction(id)
        }}>X</p>
    )
}