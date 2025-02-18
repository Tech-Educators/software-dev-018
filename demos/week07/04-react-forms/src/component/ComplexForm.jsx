import { use, useState } from "react"

export default function ComplexForm() {
    const [formData, setFormData] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        // post this to some server or something
        console.log(formData)
    }

    function handleChange(e) {
        setFormData(
            {
                ...formData,
                [e.target.name] : e.target.value
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='userName' onChange={handleChange}  />
            <input name='password' onChange={handleChange}  />
            <input name='location' onChange={handleChange}  />
            <input name='age' onChange={handleChange}  />
            <input name='creditcard' onChange={handleChange} required />
            <input name='mothers_birthday' onChange={handleChange} required />
            <input name='bank' onChange={handleChange} required />
            <input name='pet_name' onChange={handleChange}  />
            <button type="submit">submit</button>
        </form>
    )
}