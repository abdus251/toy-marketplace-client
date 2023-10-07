import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory";
import WSPGallery from "../WSPGallery/WSPGallery";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>This is home. Alhamdolillah for everything</h2>
            <WSPGallery></WSPGallery>
            <ShopByCategory></ShopByCategory>
            
        </div>
    );
};

export default Home;