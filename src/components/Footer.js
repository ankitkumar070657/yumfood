import React from "react";
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" m-auto px-4 py-2 bg-orange-500"></div>
    <div className=" m-auto px-4 py-2 bg-[#24262b]">
      
        <div className="max-w-[1520px] m-auto  py-10 px-4 grid lg:grid-cols-5 gap-8 text-gray-300">
          <div>
            <h1 className=" w-full text-3xl font-bold text-orange-500 ">
              YumEat
            </h1>
            <p>
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food.
            </p>
            <div className=" flex justify-between md:w-[75%] mt-4 ">
              <FaInstagram size={30} />
              <FaFacebookSquare size={30} />
              <FaTwitterSquare size={30} />
              <FaDribbbleSquare size={30} /> 
              <FaGithubSquare size={30} />
            </div>
          </div>

          <div className=" flex justify-between "></div>

       
          
          <div>
            <h6 className="font-bold text-[#ffffff] mt-[20px]">Contact Us</h6>
            <ul>
            <li className="py-2 text-sm">mail us</li>
              <li className="py-2 text-sm">give us a call</li>
              <li className="py-2 text-sm">message us on watsapp</li>
              
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-[#ffffff]  mt-[20px]">LEARN MORE</h6>
            <ul>
              <li className="py-2 text-sm"> Terms</li>
              <li className="py-2 text-sm">Privacy</li>
              <li className="py-2 text-sm">Security</li>
            
            </ul>
          </div>

          <div>
          <h6 className="font-bold text-[#ffffff] mt-[20px]">Location</h6>
          <ul>
            <li className="py-2 text-sm">India</li>
            <li className="py-2 text-sm">Nepal</li>
            <li className="py-2 text-sm">Sri Lanka</li>
         
          </ul>
        </div>
        
        </div>
      </div>
      </>
  );
};

export default Footer;
