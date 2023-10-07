import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import cardImg from '../../assets/banner/child-learning-use-abacus-home_23-2148524544.jpg';
import cardImg2 from '../../assets/banner/kids-home-playing-with-toys_23-2148630637.jpg';
import cardImg3 from '../../assets/banner/kid-with-colorful-alphabets_53876-165173.jpg';
import cooking1 from '../../assets/cooking/spaghetti-with-tomato-table_140725-9985.jpg';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import cooking2 from '../../assets/cooking/flat-lay-easter-eggs-plate-with-bunny-shape_23-2148826597.jpg';
import electric1 from '../../assets/cooking/adorable-girl-being-passionate-about-robotics_23-2149106252.jpg';
import electric2 from '../../assets/cooking/robot-style-car-with-joystick_140725-9003.jpg';


const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <h2 className="text-3xl py-8 text-center font-semibold">Shop By Category</h2>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Educational and Learning</Tab>
                    <Tab>Cooking Toy</Tab>
                    <Tab>Electronic Toy</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-3 place-items-center">
                        <div className="card w-96 bg-base-100 shadow-xl py-4">
                            <img style={{ height: '285px' }} src={cardImg} className="border-4 border-sky-300" />
                            <div className="card-body">
                                <h2 className="card-title">Number Toy- Abacus</h2>
                                <p> Price: $ 40<br />
                                    Rating: 4.3 </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl py-4">
                            <img src={cardImg2} className="border-4 border-sky-300" />
                            <div className="card-body">
                                <h2 className="card-title">Engineering Learning Toy!</h2>
                                <p> Price: $ 35<br />
                                    Rating: 4.5 </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl py-4">
                            <img style={{ height: '285px' }} src={cardImg3} className="border-4 border-sky-300" />
                            <div className="card-body">
                                <h2 className="card-title">Alphabet Toy</h2>
                                <p> Price: $ 45<br />
                                    Rating: 4.8 </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="hero min-h-screen bg-green-100">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={cooking1} alt="" className="rounded-xl" />
                            <div className="pl-10">
                                <h1 className="text-5xl font-bold">Spaghetti-with-tomato-table</h1>
                                <h3 className="text-orange-400 flex pt-8"> <FaStar /><FaStar /><FaStar /><FaStar /> <FaStarHalf /> </h3>
                                <p className="py-6">Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social...</p>
                                <p className="pb-4"> <span className="text-orange-400 font-bold">Price:</span> $ 100</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="hero min-h-screen bg-gradient-to-r from-purple-400 to-sky-400 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={cooking2} alt="" className="rounded-xl" />
                            <div className="pl-10">
                                <h1 className="text-5xl font-bold">Flat-lay-easter-eggs-plate-with-bunny-shape</h1>
                                <h3 className="text-orange-400 flex pt-8"> <FaStar /><FaStar /><FaStar /> <FaStarHalf /> </h3>
                                <p className="py-6">Every child's childhood includes toys inextricably. Toys are learning tools that assist kids in understanding a scale model of social...</p>
                                <p className="pb-4"> <span className="text-orange-400 font-bold">Price:</span> $ 90</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <h1 className="text-4xl font-bold text-center py-8"> It's never been easier to <br /> invest in your kid's toys</h1>
                    <div className="flex">
                    <div className="box-content h-68 w-5/12 p-4 mt-10 ml-10 bg-base-100 shadow-xl rounded-xl ">
                    <h3 className="text-4xl font-bold p-4">Robotics toy remote controlled</h3>
                    <p className="pl-4">Electric toys can provide hours of entertainment and engagement. Whether it's a remote-controlled car, a video game, or a robotic toy, these items can keep children occupied, especially during indoor 
                    <h3 className="text-orange-400 flex pt-8"> <FaStar /><FaStar /><FaStar /> <FaStarHalf /> </h3>
                    <p>Price: $ 200</p>
                    <button className="btn btn-primary">View Details</button></p>
                    </div>
                    <div className="">
                        <img style={{}} src={electric1} alt="" className="rounded-xl"  />
                    </div>
                    </div>
                    <div className="flex">
                    <img style={{}} src={electric2} alt="" className="rounded-xl ml-8"  />
                    <div className="left-5">
                        <div className="box-content h-52 w-11/12 mt-20 bg-base-100 shadow-xl rounded-xl ">
                    <h3 className="text-4xl font-bold p-4">Creative modern electric toys for kids development</h3>
                    <p className="p-4 ml-0">Electric toys often require fine motor skills to operate buttons, switches, or controllers. Playing with these toys can help children develop their hand-eye coordination and fine motor skills.
                    <h3 className="text-orange-400 flex pt-8"> <FaStar /><FaStar /><FaStar /> <FaStarHalf /> </h3>
                    <p>Price: $ 200</p>
                    <button className="btn btn-primary">View Details</button></p>
                  
                    </div>
                    </div>
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ShopByCategory;