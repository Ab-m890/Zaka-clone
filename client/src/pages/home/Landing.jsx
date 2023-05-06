import React from 'react'

const Landing = () => {
  return (
    <section className='w-[100%] md:min-h-[100vh] py-[90px] px-[24px] md:px-[48px] bg-white flex flex-wrap justify-center items-center'>
      <div className='block w-[100%] lg:w-[50%]'>
        <article className='font-bold'>
          <h1 className="text-[36px] leading-[38px] md:text-[48px] md:leading-[50px] " >
            <span className="text-[16px] " >BECOME PROFICIENT IN AI</span><br></br>
            <span className='text-orange'>Your Artificial Intelligence Transformation</span>
          </h1>
          <p className="w-[100%] text-[16px] mt-[16px] " >
            Accelerate your career or business in Artificial Intelligence with different Machine Learning programs, taught by industry leading experts and professionals.
          </p>
          <div className='w-[100%] flex flex-col md:flex-row justify-center mt-[24px] '>
            <button className='w-[100%] sm:w-[50%] h-[50px] text-white bg-orange hover-text-orange hover:bg-white hover-border-orange duration-150 rounded'>Join Our Community</button>
            <button className='w-[100%] sm:w-[50%] h-[50px] text-orange bg-white hover:text-white hover-bg-orange border-orange duration-150 rounded mt-[10px] md:mt-[0px] md:ml-[10px]'>Discover Our Programs</button>
          </div>
        </article>
      </div>
      <div className='w-[100%] lg:w-[50%] hidden lg:flex justify-center items-center'>
        <img className='w-[50%]' src='/assets/logo-zaka-black.png' alt="image-landing" />
      </div>
    </section>
  )
}

export default Landing