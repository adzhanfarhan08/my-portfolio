import React from 'react'

const Skills = [
    { name: 'HTML', image: '/images/skill/html.svg' },
    { name: 'CSS', image: '/images/skill/css.svg' },
    { name: 'JavaScript', image: '/images/skill/javascript.svg' },
    { name: 'Tailwind CSS', image: '/images/skill/tailwind-css.svg' },
    { name: 'React Native', image: '/images/skill/react-native.svg' },
    { name: 'Illustrator', image: '/images/skill/illustrator.svg' },
    { name: 'Premiere Pro', image: '/images/skill/premiere-pro.svg' },
    { name: 'After Effect', image: '/images/skill/after-effects.svg' },
    { name: 'Photoshop', image: '/images/skill/photoshop.svg' },
    { name: 'Blender', image: '/images/skill/blender.svg' },
    { name: 'Autodesk Maya', image: '/images/skill/autodesk.svg' },
]

const Skill = () => {
    return (
        <div className='section bg-[#31363F]'>
            <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
                <div className='text-center mb-12'>
                    <h4 className='text-3xl font-bold text-white'>SKILL</h4>
                </div>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='w-full'>
                        <div className='grid grid-cols-2 lg:grid-cols-7 gap-4 text-center'>
                            {Skills.map((Skills, index) => (
                                <div className='w-full' key={index} data-aos='zoom-in' data-aos-duration='1000'>
                                    <div className='bg-white h-full justify-center items-center flex rounded-lg p-10'>
                                        <img src={Skills.image} />
                                        <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0'>
                                            <div className='text-center w-full text-white '>
                                                <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                    <h4>{Skills.name}</h4>
                                                </div>
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

// const Portfolios = [
//     { title: '', link: 'https://website-portfolio-v2-farhan.vercel.app/', image: '/images/portfolio/portfolio1.png', titledescription: 'Web Portfolio', description: 'asdasda' }
// ]


export default Skill;
