
// doesn't affect the original argument

function addParagraph(paragraph) {
    let firstWord = paragraph.split(' ')[0]
    let rest = paragraph.substring(firstWord.length)

    const span = document.createElement('span')
    span.innerText = firstWord
    span.classList.add('add-indent')

    const p = document.createElement('p')

    p.appendChild(span)
    p.appendChild(document.createTextNode(' ' + rest))
    document.body.appendChild(p)
}

// addParagraph('It was love at first sight. The first time Yossarian saw the chaplain he fell madly in love with him. Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.')



//* PRAMS: paragraph - string
//* RETURNS: Undefined


function addParagraph(paragraph) {
    // create an element for the ptag to go on
    const pTag = document.createElement('p')

    // set the p tag to have the inner text of our paragraph
    pTag.textContent = paragraph

        // all the lines below are just adding our indent
    // pTag.style.textIndent = '30px'
    // pTag.classList.add('add-indent-2')
    pTag.setAttribute('class', 'add-indent-2')

    document.body.appendChild(pTag)
}


addParagraph('It was love at first sight. The first time Yossarian saw the chaplain he fell madly in love with him. Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.')

function addParagraph(paragraph) {
    // i need to find out some way to find out what the first word is
    // split turns a string into an array
    const arrayOfWords = paragraph.split(' ') // ['It', 'was', 'love']
    
    const firstWord = arrayOfWords.shift()
    
    const p = document.createElement('p')
    const span = document.createElement('span')


    
    span.innerText = firstWord
    span.setAttribute('class', 'add-indent')
    
    p.appendChild(span)
    // createTextNode makes a HTML DOM TextNode - it's different to just making a string
    p.appendChild(document.createTextNode(' ' + arrayOfWords.join(' ')))
    // appendChild only accepts html nodes
    // p.appendChild(arrayOfWords)s
    

    document.body.appendChild(p)
}
