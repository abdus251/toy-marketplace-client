import img1 from '../../../assets/banner/front-view-girl-doing-experiments-with-microscope-test-tubes_23-2148799266.jpg'
import img2 from '../../../assets/banner/kid-with-colorful-alphabets_53876-165173.jpg'
import img3 from '../../../assets/banner/child-learning-use-abacus-home_23-2148524544.jpg'
import img4 from '../../../assets/banner/kids-home-playing-with-toys_23-2148630637.jpg'
import img5 from '../../../assets/banner/set-kid-toys-white-shelf_53876-144954.jpg'
import img6 from '../../../assets/banner/3d-cartoon-background-children_23-2150473169.jpg'

const Banner = () => {
    return (
        <div className="carousel py-8">
            <div id="slide1" className="carousel-item relative ">
               <img style={{width: '1280px', height:'55%' }} src={img1} alt="" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-black-700 font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80 text-green-500'>Big funs for kids</p> 
                        <h2 className='text-7xl font-bold text-white'>
                            A world  <br />To Explore
                        </h2>
                        <p className='text-green-500'>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>   
            </div>



            <div id="slide2" className="carousel-item relative w-full">
               <img style={{width: '1280px', height:'55%'}} src={img2} alt="" />
               <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-black font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80'>Big funs for kids</p> <h2 className='text-7xl font-bold text-white'>
                            A world  <br />To Explore
                        </h2>
                        <p>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div> 
            </div>


            <div id="slide3" className="carousel-item relative w-full">
            <img style={{width: '1280px', height:'55%'}} src={img3} alt="" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-purple-500 font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80'>Big funs for kids</p> <h2 className='text-7xl font-bold text-white'>
                            A world  <br />To Explore
                        </h2>
                        <p>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div> 
            </div>


            <div id="slide4" className="carousel-item relative w-full">
            <img style={{width: '1280px', height:'55%'}} src={img4} alt="" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-red-600 font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80'>Big funs for kids</p> <h2 className='text-7xl font-bold text-black'>
                            A world  <br />To Explore
                        </h2>
                        <p>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div> 
            </div>


            <div id="slide5" className="carousel-item relative w-full">
            <img style={{width: '1280px', height:'55%'}} src={img5} alt="" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-green-500 font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80'>Big funs for kids</p> <h2 className='text-7xl font-bold text-black'>
                            A world  <br />To Explore
                        </h2>
                        <p>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div> 
            </div>


            <div id="slide6" className="carousel-item relative w-full">
            <img style={{width: '1280px', height: '55%'}} src={img6} alt="" />
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-90 mt-72 place-items-end ">
                    <div className="mt-20 text-black font-bold space-y-7 pr-10">
                        <p className=' text-xl font-bold mt-80'>Big funs for kids</p> <h2 className='text-7xl font-bold text-black-600'>
                            A world  <br />To Explore
                        </h2>
                        <p>Active toys for smart and active kids. Britng fun and non-stop learning <br />for your little ones</p>
                        <div className="">
                    <button className="btn w-64 rounded-full bg-yellow-500">Read More</button>
                    </div>
                    <div className="ml-96">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;