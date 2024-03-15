import React from 'react'

const Collection = [
    { name: 'Website' },
    { name: '3D' },
    { name: 'Motion Graphics' }
]

const WebsitePortfolio = [
    {
        titledescription: 'Web Portfolio',
        techdescription: 'Technology : ReactJS, Tailwind CSS, AOS',
        image: './images/portfolio/website/portfolio1.png',
        description: 'This website was created for the reason of accommodating your portfolio and introducing yourself to other people in web form',
        link: 'https://website-portfolio-v2-farhan.vercel.app/'
    },
    {
        titledescription: 'Web Portfolio',
        techdescription: 'Technology : ReactJS, Tailwind CSS, AOS',
        image: './images/portfolio/website/portfolio2.png',
        description: 'The website is built to introduce myself to you. It includes information about my work, experiences, and portfolio',
        link: 'https://adzhan-farhan-portfolio.vercel.app/'
    }
]

const DesignGraphic = [
    {
        titledescription: 'The Forest',
        techdescription: 'Software : Adobe Illustrator',
        image: './images/portfolio/desgin-graphics/forest.png',
        description: 'This design is created based on the beautiful and lush green natural surroundings',
        link: ''
    },
    {
        titledescription: 'The Mountain',
        techdescription: 'Software : Adobe Illustrator',
        image: './images/portfolio/desgin-graphics/mountain.png',
        description: 'I love mountains, and this idea emerged from the intro of Paramount Pictures',
        link: ''
    },
    {
        titledescription: 'Sun Rise',
        techdescription: 'Software : Adobe Illustrator',
        image: './images/portfolio/desgin-graphics/sun-rise.png',
        description: 'The beauty of the forest in the morning, with its lush and cool environment.',
        link: ''
    }
]
export default function Portfolio() {
    return (
        <div>
            <div className='section'>
                <div className='container mx-auto max-w-[1200px] px-3 pt-3 pb-20'>
                    <div className='text-center mb-12'>
                        <h4 className='text-3xl font-bold'>PORTFOLIO</h4>
                    </div>
                    <div className='pt-3'>
                        <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[10px]'>
                            <div className='order-2 lg:order-1'>
                                <h4 className='text-xl font-extrabold'>Website</h4>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                            {WebsitePortfolio.map((WebsitePortfolio, index) => (
                                <div className="w-full" key={index} data-aos='fade-right' data-aos-duration='2000'>
                                    <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group'>
                                        <img src={WebsitePortfolio.image} />
                                        <div className='absolute p-5 bg-primary h-full flex items-center opacity-0 group-hover:opacity-100 transition'>
                                            <div className='text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all'>
                                                <a href={WebsitePortfolio.link} target='_blank'>
                                                    <div className='bg-red-500 rounded-full px-5 inline-block mb-2'>
                                                        <h4>{WebsitePortfolio.titledescription}</h4>
                                                    </div>
                                                    <p>{WebsitePortfolio.techdescription}</p>
                                                    <p>{WebsitePortfolio.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pt-3'>
                        <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[10px]'>
                            <div className='order-2 lg:order-1'>
                                <h4 className='text-xl font-extrabold'>Design Graphics</h4>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                            {DesignGraphic.map((DesignGraphic, index) => (
                                <div className="w-full" key={index} data-aos='fade-right' data-aos-duration='2000'>
                                    <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group'>
                                        <img src={DesignGraphic.image} />
                                        <div className='absolute p-5 bg-primary h-full flex items-center opacity-0 group-hover:opacity-100 transition'>
                                            <div className='text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all'>
                                                <a href={DesignGraphic.link} target='_blank'>
                                                    <div className='bg-red-500 rounded-full px-5 inline-block mb-2'>
                                                        <h4>{DesignGraphic.titledescription}</h4>
                                                    </div>
                                                    <p>{DesignGraphic.techdescription}</p>
                                                    <p>{DesignGraphic.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
