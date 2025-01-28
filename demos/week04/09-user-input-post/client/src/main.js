const form = document.getElementById('form')

 async function handleSubmitBook(event) {
  // stop page from refreshing
  event.preventDefault()
  // create a fancy 'FormData' object and store it in formData variable
  const formData = new FormData(form)
  // plain js object sotred in bookData
  const bookData = Object.fromEntries(formData)

  // we're going to use fetch to send overo our post request

  // fetch on its own sends a GET request
  // we can give fetch a second argument of an 'options' objects
  fetch(`http://localhost:6060/books`, {
    // hey im sending a post request
    method: "POST",
    // meta info about my request - telling my server its gonna get JSON
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(bookData)
  })

}

form.addEventListener('submit', handleSubmitBook)