import React from 'react';
import './header.css';
import GamingChart from '../images/gaming chart.png'
import Evo17 from '../images/EVO17.png'
import Evo14 from '../images/EVO14.png'
import Evo15 from '../images/EVO15.png'
import Eon17 from '../images/EON17.png'
import Genji from '../images/Genji.png'

const Header = ({ siteTitle }) => {
    return (
      <>
        <nav id='Nav' class="justify-between flex-wrap p-5">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto place-content-end">
            <div class="text-lg text-white pl-5 text-center hover:underline absolute inset-y-7 left-5 my-auto"><a href="/main">
              NVIDIA Back to School </a>
            </div>
            <div>
                <div class="text-lg float-left text-white pr-5 pl-5 hover:underline"><a href="/about">
                  Gaming </a>
                </div>
                <div class="text-lg float-left text-white pl-5 pr-5 hover:underline"><a href="/work">
                  Studying</a>
                </div>
                <div class="text-lg float-left text-white pl-5 pr-5 hover:underline"><a href='https://docs.google.com/document/d/1cOa3AEHMLL4jzGMNZ6LkonB92edaxRcw3Ra_LSKNNjs/edit?usp=sharing'>
                  Creating</a>
                </div>
            </div>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"><a href='https://www.originpc.com/gaming/laptops/'>
                    Shop All</a>
                </button>
            </div>
      </nav>

      <div class='bg-black flex'>
         <div id='Banner' class='bg-black flex flex-col place-content-center pt-10'>
            <div class='ml-96 mt-52 pt-9 pl-80'>
                <h3 class='text-white text-3xl tracking-tight'>CUSTOMIZE AN ORIGIN PC LAPTOP POWERED BY NVIDIA GEFORCE TODAY</h3>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"><a href='https://www.originpc.com/gaming/laptops/'>
                    Shop All</a>
                </button>
            </div>
         </div>
        </div>

        <div class="bg-black pt-5 pb-5">
            <h1 class='m-10  text-3xl text-white'>The Undisputed Choice for Class and Play</h1>
            <h1 class='m-10  text-lg text-white'>Upgrade to ORIGIN PC laptops powered by NVIDIA GeForce, for students who need thin, light, and powerful computers. Powered by the award-winning NVIDIA Turing™ GPUs , ORIGIN PC laptops can tackle the most challenging coursework and play the most demanding games. From data science and AI to content creation, design, and gaming, get an ORIGIN PC GeForce-powered laptop that works and plays as hard as you do.</h1>
        </div>

        <div class='bg-black'>
            <img src={GamingChart} alt="..." class="ml-40 pt-10"></img>
        </div>

        <div id='Gaming' class="bg-black pt-5 pb-5">
            <h1 class='m-10  text-3xl text-left text-white ml-23 pt-50'>Gaming</h1>
            <h1 class='m-10  text-lg text-white pr-96 mr-96'>ORIGIN PC GeForce-powered laptops work hard and play hard. When class work is done, enjoy blazing-fast performance and the most realistic graphics. ORIGIN PC GeForce-powered  rival high-end desktops, allowing you to play popular games that average laptops can’t.</h1>
        </div>

        <div id='Creative' class="bg-black pt-5 pb-5">
            <h1 class='m-10  text-3xl text-right text-white'>Creative & Digital Arts</h1>
            <h1 class='m-10  text-right ml-96 pl-44 text-lg text-white'>When creativity strikes, nothing should get between you and your vision. Crafted with precision to deliver dramatic improvements in productivity and over 10X the performance in creative applications such as the Adobe Creative Suite. ORIGIN PC GeForce-powered are made for student creatives who need power and flexibility.</h1>
        </div>

        <div id='DataScience' class="bg-black pt-5 pb-5">
            <h1 class='m-10  text-3xl text-left text-white'>Data Science and AI</h1>
            <h1 class='m-10  text-lg pr-96 mr-96 text-white'>GeForce GPUs deliver desktop-level performance, large memory capacity, and advanced features in thin and light form factors. ORIGIN PC GeForce-powered laptops speed up workloads for data science and AI applications in engineering, computer science, and mathematics fields of study.</h1>
        </div>

        <div class="bg-black pt-5 pb-5">
            <h1 class='m-10  text-3xl text-white'>GeForce GTX Laptops</h1>
            <h1 class='m-10  text-lg text-white'>Upgrade to RTX for faster performance, dedicated ray tracing and Tensor AI cores, and bigger memory.</h1>
        </div>

        <div class="bg-black pt-5 pb-5 flex place-content-center">
            <div>
                <img src={Eon17} alt="..." class="h-64 w-30 ml-24"></img>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold border-green-700 rounded mt-14 ml-24 h-10">
                        <a href='https://www.originpc.com/gaming/laptops/new-eon17-x/'>Shop EON17-X</a>
                    </button>
            </div>
            <div>
                <img src={Evo14} alt="..." class="h-80 w-30"></img>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold border-green-700 rounded h-10">
                        <a href='https://www.originpc.com/gaming/laptops/evo14-s/'>Shop EVO14-S</a>
                    </button>
            </div>
        </div> 

        <div class="bg-black pt-5 pb-5 flex place-content-center">
        <div>
                <img src={Evo15} alt="..." class="h-64 w-30 ml-72"></img>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold border-green-700 rounded ml-80 h-10">
                        <a href='https://www.originpc.com/gaming/laptops/evo15-s/'>Shop EVO15-S</a>
                    </button>
            </div>
            <div>
                <img src={Evo17} alt="..." class="h-64 w-30 mr-60"></img>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold border-green-700 mr-52 rounded h-10">
                        <a href='https://www.originpc.com/gaming/laptops/evo17-s/'>Shop EVO17-S</a>
                    </button>
            </div>
        </div> 
      </>
    )
  }
  
  export default Header
  