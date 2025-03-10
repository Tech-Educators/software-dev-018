// this is just a test compoent to immediately throw an error
export default function CausesError() {
    throw new Error('This shall not run on my watch! mwahahhahahah')
    return (
        <div>I throw an error</div>
    )
}