import Painting from "./Painting"

export default function Gallery() {
    return (
        <div>
            <p>Look at this beautiful art:</p>
            <Painting img_src="https://upload.wikimedia.org/wikipedia/commons/3/33/The_Roses_of_Heliogabalus.jpg" />
            <Painting theUserName = 'Sam' img_src="https://www.nationalgallery.org.uk/media/34212/n-4240-00-000027-hd.jpg?rmode=max&width=1920&height=1080&v=1d6544562de70f0" />
            <Painting img_src='https://images.squarespace-cdn.com/content/v1/5caa57b7e8ba44f0a1ce6bb3/1555008937634-14180VXTA46NHER7H2B2/A01.jpg?format=2500w' painterName="Hello"/>
            <Painting img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" />
        </div>
    )
}