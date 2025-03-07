'use client'
import { useState } from "react"
import Image from "next/image"

export default function Page() {
  const foods = [
    { name: 'Pizza', image:'https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=1080', isSoup: false},
    { name: 'Ramen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIepz2ae9Apf9z8L0LpzrLNFT0Wcv5_nHiQ&s', isSoup: true},
    { name: 'Cereal', image: 'https://www.verywellhealth.com/thmb/HEl_K0SAzH5F81RHXCvSvGhroq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/30D7A016-ABA5-48DD-BE39-3E7A223A03BF-96f2ba9e6c724dc9b2ba638b0c0f44a2.jpeg', isSoup: true},
    { name: 'Burger', image: 'https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg', isSoup: false},
    { name: 'Tomato Soup', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg', isSoup: true},
    { name: 'Ice Cream', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4F2gZidrNWH_iPuypbfzcDFKGRuy-6CaTw&s', isSoup: true}
  ]
  const [food, setFood] = useState(selectSoup())

  function selectSoup() {
    return foods[Math.floor(Math.random() * foods.length)]
  }
  return (
    <section>
      <h1>is this soup?</h1>
      <Image height={400} width={600} alt='random food' src={food.image} />
      <h2 className={`text-xl mt-4 ${food.isSoup ? 'text-green-400': 'text-red-400'}`}>
        {food.isSoup ? 'Yes this is soup!' : 'NO, this is NOT soup!'}
        It's souP!
      </h2>
      <button onClick={() => setFood(selectSoup())}>new soup</button>
    </section>
  )
}