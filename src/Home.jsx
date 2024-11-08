import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import FeatureCards from './FeaturedCards';
import { motion } from "framer-motion";

const Home = () => {


  return (
    <div className='overflow-hidden'>
      <NavBar />

      <div className='sm:px-32 sm:py-10'>
        <div
          className='relative h-[80vh] w-[100%]'
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                transparent 0 100px,
                #25283b22 100px 101px
              ),
              repeating-linear-gradient(
                to bottom,
                transparent 0 100px,
                #25283b22 100px 101px
              )
            `,
          }}
        >
          <div className='absolute inset-0'>
            <div className='w-full h-[80vh] flex flex-col xl:flex-row items-center justify-center xl:gap-20'>
            <motion.div
              initial={{ opacity: 0,  y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className='flex flex-col items-center xl:items-start justify-center bg-gradient-to-t from-gray-700 via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-5xl sm:text-4xl md:text-6xl'
            >
              <h2>Your Personal</h2>
              <h2>Guide To Fitness</h2>
              <p className='text-black text-sm font-extralight p-2 hidden xl:inline-block'>
                  Discover exercises tailored to your goals <br />
                  Track your journey to a healthier, stronger you.
              </p>
             
            </motion.div>
            <motion.div 
              initial={{opacity: 0,  y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='w-80 xl:w-96 flex items-center'>
              <img src="https://i.imgur.com/NeL0K4N.pnghttps://i.imgur.com/NeL0K4N.png" alt="" />
            </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full flex flex-col items-center justify-center sm:h-screen bg-white pt-20'>
        <motion.div
          initial={{ opacity: 0,  y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-2xl lg:text-6xl sm:text-4xl'
        >
          <h2>Train Hard. Track Results.</h2>
          <h2>Transform Your Fitness Journey.</h2>
        </motion.div>
        <div>
          <FeatureCards />
        </div>
      </div>

      <div className='sm:px-32 sm:py-20'>
        <div className='h-full py-16  xl:h-[80vh] w-[100%] flex flex-col items-center justify-center gap-16 bg-white px-20'
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    to right,
                    transparent 0 100px,
                    #25283b22 100px 101px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    transparent 0 100px,
                    #25283b22 100px 101px
                  )
                `,
              }}
        >
          <motion.div
            initial={{ opacity: 0,  y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col items-center justify-center bg-gradient-to-t from-gray-700 via-gray-600 to-gray-400 bg-clip-text text-transparent font-extrabold text-5xl lg:text-7xl sm:text-6xl'
          >
            <h2 className='flex justify-start items-start'>Explore</h2>
          </motion.div>

          <div className="flex xl:flex-row flex-col gap-10">
            <div className="w-96 h-80 bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-between text-center">
              <div className=" w-12 h-12">
                <img src="https://i.imgur.com/OTz79ZM.gif" alt="" />
              </div>
              <h2 className="text-3xl font-bold mt-4">Browse Exercises</h2>
              <p className="text-gray-600 mt-2">Discover exercises tailored to all fitness levels and muscle groups. Perfect for beginners to pros.</p>
              <Link to="/muscle" className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">Explore Now</Link>
            </div>

            <div className="w-96 h-80 bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-between text-center">
            <div className=" w-12 h-12">
              <img src="https://i.imgur.com/zjMIj9i.gif" alt="" />
              </div>
              <div className='flex gap-4'>
                <img className='h-6 w-6 ' src="https://i.imgur.com/AcI7mp0.png" alt="" />
                <h2 className="text-3xl font-bold text-gray-400">Workout Plans</h2>
              </div>
              <p className="text-gray-600 mt-2">Choose from expertly designed workout plans to achieve your fitness goals, whether building strength or endurance.</p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg   transition">Comming Soon</button>
            </div>

            <div className="w-96 h-80 bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-between text-center">
            <div className=" w-12 h-12">
              <img src="https://i.imgur.com/0qgxPQ8.gif" alt="" />  
              </div>
              <div className='flex gap-4'>
                <img className='h-6 w-6' src="https://i.imgur.com/AcI7mp0.png" alt="" />
                <h2 className="text-3xl font-bold text-gray-400">Custom Plans</h2>
              </div>
              <p className="text-gray-600 mt-2">Build personalized workout plans tailored to your fitness level, goals, and schedule.</p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded-lg   transition">Coming Soon</button>
            </div>
          </div>

        </div>
      </div>

      <footer className="w-full xl:h-[40vh] h-full bg-gray-900 text-white py-10 px-8 xl:px-32">
        <div className="flex flex-col xl:flex-row justify-between gap-10">

          <div className="flex flex-col items-start xl:items-start xl:pb-32">
            <div className="flex items-center gap-4 mb-4 ">
              <div>
                <i className="fi fi-ss-gym text-white "></i>
              </div>
              <h1 className="font-bold text-3xl">FitTrack</h1>
            </div>
            <p className="text-gray-400">Created by Karan Kendre</p>
          </div>


          <div className="flex flex-col items-start xl:items-center">
            <h2 className="font-bold text-lg mb-2">Socials</h2>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Twitter</a>
          </div>


          <div className="flex flex-col items-start xl:items-center">
            <h2 className="font-bold text-lg mb-2">Support</h2>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">FAQs</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Contact Us</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Help Center</a>
          </div>


          <div className="flex flex-col items-start xl:items-center">
            <h2 className="font-bold text-lg mb-2">Company</h2>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">About Us</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Careers</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition">Press</a>
          </div>
        </div>

        <div className="text-center mt-1 text-gray-400">
          © 2024 Mentorix. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Home;
