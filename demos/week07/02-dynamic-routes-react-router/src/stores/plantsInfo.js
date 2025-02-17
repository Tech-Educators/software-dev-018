export const plants = [
    {
      id: 1,
      name: "Corpse Flower",
      description: "A rare plant known for its massive size and foul odor when blooming.",
      funFact: "It emits a scent similar to rotting flesh to attract pollinators.",
      seasons: ["Summer"],
      location: "Southeast Asia",
      image: "https://arboretum.harvard.edu/wp-content/uploads/2024/06/Dame-Judi-Stench-Bloom-01.jpg"
    },
    {
      id: 2,
      name: "Rafflesia arnoldii",
      description: "The largest individual flower in the world, this parasitic plant lacks leaves, stems, and roots.",
      funFact: "It only appears during its bloom, making it an elusive natural phenomenon.",
      seasons: ["Rainy", "Dry"],
      location: "Sumatra, Indonesia",
      image: "https://images.squarespace-cdn.com/content/v1/5fb1d1ff0402302bcf7f40fe/5213ea6d-895d-415c-8385-4fc52fb3b48b/ma17_page_061_image_0002sm-1.jpg"
    },
    {
      id: 3,
      name: "Dragon Blood Tree",
      description: "Notable for its umbrella-like canopy and red resin, this tree stands out in arid landscapes.",
      funFact: "Its red sap, known as dragon's blood, has been used in traditional medicine and as a dye.",
      seasons: ["Spring", "Summer"],
      location: "Socotra Island, Yemen",
      image: "https://therevelator.org/wp-content/uploads/2020/03/Dragons-blood-trees-Rod-Waddington.jpg"
    },
    {
      id: 4,
      name: "Welwitschia mirabilis",
      description: "A bizarre desert plant with only two ever-growing leaves that can live for over a thousand years.",
      funFact: "It thrives in one of the harshest environments on Earth—the Namib Desert.",
      seasons: ["Year-round"],
      location: "Namibia, Angola",
      image: "https://www.kew.org/sites/default/files/styles/image_gallery/public/2023-07/welwitschia%20circle.jpg.webp?itok=8vx6uUZ_"
    },
    {
      id: 5,
      name: "Buddha's Hand",
      description: "A striking citrus fruit that resembles multiple fingers extending from a palm, often used for ornamental purposes.",
      funFact: "Its unique shape makes it a favorite in perfumes and decorative rituals, though it isn’t typically eaten.",
      seasons: ["Winter"],
      location: "Eastern Asia",
      image: "https://www.thespruceeats.com/thmb/OiCZi6G-zXSWGMunSJHh29bNTGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/buddhahand4zoom4-0bad28c783d44325bc56e4cb913c9840.jpg"
    }
  ];
  

  // id = 3
  export function findPlant(id) {
    // we loop through the plants array and find the first object that has an id property that is the same as the id we passed as an argument to findPlant.
    return plants.find((plant) => plant.id == id)
  }