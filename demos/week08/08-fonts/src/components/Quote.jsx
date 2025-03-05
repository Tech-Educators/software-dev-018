import { libre_barcade_128 } from "@/app/layout"
import Image from "next/image"

export default function Quote() {
    return (
        <div>
            <Image src="https://i.guim.co.uk/img/media/60947a7d8467637549ecaf2de916db57664b63e9/1808_915_5195_3116/master/5195.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9af1670b78f99624bc4402bbc3977e25" height={758} width={1010} alt="A cool looking beatle on a rock!"/>
            <Image src='/beetle.jpg' alt="A cooler beetle" width={480} height={350} />
            <p style={{textAlign: 'center', fontSize: '2rem'}}>
            As Gregor Samsa awoke <span>one morning</span> from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into <span className={libre_barcade_128.className}>stiff arched segments on top of which</span> the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.
            <br />
            What has happened to me? he thought.
            </p>
        </div>
    )
}