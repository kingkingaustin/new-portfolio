import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About </p>
                </div>
                <p className='text-xl mt-20'>
                I’m a fresher who is eager to learn. I created these web applications during my study days in Besant Technology's 
                where I studied for Frontend developer, the goal is to learn more about coding and
                learn new Technology on the way and to become a full stack developer, I will work hard to improve myself.
                </p>
            </div>

        </div>

    )
}

export default About