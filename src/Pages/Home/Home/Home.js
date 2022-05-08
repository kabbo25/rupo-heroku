import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (

        <>
            <Banner></Banner>
            <Services></Services>
            <div>
                <h1 className="text-primary text-center mt-5">FAQ</h1>
                <p class="text-secondary text-center mt-5">

                    1. What is the return policy? <br></br>
                    2. How to solve technical issues?<br></br>
                    3. Our location?<br></br>
                    4. Why we are the best? <br></br>
                    5. What are the advantages to become our partner? <br></br>
                    6. How contact with us?<br></br>





                </p>
            </div>

            <div>
                <h1 className="text-primary text-center mt-5">Our achievement</h1>
                <p className=" text-center mt-5">
                    Our achievements have indeed made us the brand that we are today. Some of these achievements have been rewarded to us in the form of mementos and some of these achievements have been rewarded to us in the form of personal satisfaction.  We used to feel personally satisfied from the fulfilling supply of the best product. Our achievements are an indispensable part of our life and they are the ones we will cherish forever.<br></br>


                </p>
            </div>

            <div>
                <h1 className="text-primary text-center mt-5">Blogs</h1>
                <Experts></Experts>
            </div>



        </>

    );
};

export default Home;