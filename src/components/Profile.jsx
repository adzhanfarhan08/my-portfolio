import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Profile() {
    return (
        <div className='section'>
            <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
                <div className='flex flex-col lg:flex-row items-center justify-start'>
                    <div className='w-full' data-aos='fade-right' data-aos-duration='2000'>
                        <h1 className='text-5xl'>
                            Hello...
                        </h1>
                        <h2 className='text-xl'>
                            My full name is Adzhan Farhan P<br />
                            Other people usually call me Farhan
                        </h2>
                        <div className='text-xl'>
                            <TypeAnimation
                                sequence={[
                                    'I work as a React Developer',
                                    1500,
                                    'I work as a 3D Artist',
                                    1500,
                                    'I work as a Graphic Designer',
                                    1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity} />
                        </div>
                    </div>
                    <div className='text-center w-[400px] lg:w-[1200px] mx-auto mb-0' data-aos='fade-left' data-aos-duration='2000'>
                        <div className='bg-gradient pt-[20px] rounded-full overflow-hidden'>
                            <img src="/images/sapiens.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}