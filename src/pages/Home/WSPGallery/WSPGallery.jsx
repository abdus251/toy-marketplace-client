import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";




const images = [
    'https://img.freepik.com/free-photo/little-boy-playing_23-2148836275.jpg?size=626&ext=jpg&uid=R98122162&ga=GA1.2.1809967876.1680257889&semt=ais',
    'https://img.freepik.com/free-photo/boy-learning-more-about-chemistry-class_23-2149068381.jpg?w=900&t=st=1695999732~exp=1696000332~hmac=cb911c8b6e499c967d332ef04ecd99bf5b9e9cc9c0683424d5c8dd420da1995f',
    'https://i.ibb.co/gJsLGP3/father-son-making-robot-23-2148863404.jpg',
    'https://i.ibb.co/TgC6S0C/kid-with-colorful-alphabets-53876-165173.jpg',
    
    'https://i.ibb.co/3h5J18w/set-kid-toys-white-shelf-53876-144954.jpg',
    
    'https://img.freepik.com/free-photo/boy-playing-with-colorful-atoms-game-table_23-2148518044.jpg?w=900&t=st=1695999942~exp=1696000542~hmac=2e7ac7e08c0ef0adf580d8ab5024fb3a7fe906dde6fcbbe09bebe7fc46e25d50',
    'https://i.ibb.co/vV6XFww/kids-home-playing-with-toys-23-2148630637.jpg',
    'https://i.ibb.co/kcVPNjQ/child-learning-use-abacus-home-23-2148524544.jpg',
    'https://i.ibb.co/YLTK5kQ/3d-cartoon-background-children-23-2150473169.jpg',
    'https://img.freepik.com/free-photo/little-boy-playing-with-colorful-block-game-floor_23-2148518118.jpg?size=626&ext=jpg&uid=R98122162&ga=GA1.2.1809967876.1680257889&semt=ais',
    'https://img.freepik.com/free-photo/little-boy-playing-with-wooden-car_23-2148518124.jpg?w=900&t=st=1696000328~exp=1696000928~hmac=d735d6325fa6f189f19a89ec35446f7bbde40649aad7b9046390e6141e9fda0d',

    'https://img.freepik.com/free-photo/little-boy-playing-with-colorful-game_23-2148518108.jpg?size=626&ext=jpg&uid=R98122162&ga=GA1.1.1809967876.1680257889&semt=ais',
    
]

const WSPGallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i) =>{
        setData({img, i})
    }
    return (
        <div className="bg-gradient-to-r from-sky-400 to-pink-400">
         <h2 className="text-3xl text-center py-8 font-semibold">See Toy Gallery</h2>
        {data.img && 
        <div style={{
            width: '100%',
            height:'100vh',
            background: 'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        }}>
            <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />

        </div>
        }
        <div style={{padding: '10px'}}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block", cursor: 'pointer' }}
                            alt=""
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
            </div>
        
        
    );
};

export default WSPGallery;