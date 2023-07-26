import React from 'react';
import "./styles.css";
const marqueeIcon = require("./assets/images/marqueeIcon.png");
const heroImg = require("./assets/images/hero-img.png");
const heroLogo = require("./assets/images/hero-logo.png");
const xlogo = require("./assets/images/xlogo.png");
const cheeseCursor = require("./assets/images/cheese.png");
const handCursor = require("./assets/images/hand.png");


const Home: React.FC = () => {

    const repeatText = 6;

    return (
        <>
            <div className='bg-[#0089c0] w-[100vw] h-[100vh]'  style={{ cursor: `url(${cheeseCursor}), auto` }}>
                <div className="h-8 xs:bg-gradient-to-r xs:from-[#533bbb] xs:to-[#882acd] xl:bg-gradient-to-r xl:from-[#533bbb] xl:via-[#c48ef0] xl:to-[#e001c9] overflow-hidden">
                    <div className="inline-flex animate-marquee whitespace-nowrap text-[#ffffff] font-VT323">
                        {Array.from({ length: repeatText }).map((_, idx) => (
                        <div key={idx} className='flex items-center justify-center gap-x-2 mr-2'>
                            <div>
                                ATTN XRP ARMY: XRATZ LAUNCH SOON!
                            </div>
                            <div>
                                <img src={marqueeIcon} className='w-4' alt="logo" />
                            </div>
                        </div>
                       ))}
                    </div>
                </div>
                <div className='relative xs:flex xs:flex-col xs:items-center xs:w-[360px] xs:h-[240px] xs:mt-[170px]  xl:w-[500px] xl:h-[230px] xl:mt-[330px] xl:flex mx-auto'>
                    <div className='absolute xs:flex xs:flex-col xs:items-center xs:gap-y-2  xl:flex xl:flex-row xl:items-end'>
                        <div>
                            <img src={heroImg} className=' xs:w-[100px] xl:w-[200px]' alt="xratz" />
                        </div>
                        <div>
                            <img src={heroLogo} className='xs:w-[280px]  xl:w-[500px]' alt="logo" />
                        </div>
                    </div>
                    <div className='absolute xs:bottom-0 xl:bottom-0 xl:right-0'>
                        <img src={xlogo} className=' xs:w-[25px] xl:w-[40px]' alt="xlogo" />
                    </div>
                </div >
            </div >
        </>
    )
}

export default Home;