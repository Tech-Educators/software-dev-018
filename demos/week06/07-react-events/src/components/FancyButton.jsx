export default function FancyButton({theFunctionToRun, text}) {
    console.log(theFunctionToRun)
    return (
        <button onClick={() => theFunctionToRun()}>{text}</button>
    )
}
