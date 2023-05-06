import React, { useState } from 'react'
import {
    DataEngineeringSpecializationData,
    DataEngineeringSpecializationLabels,
    MachineLearningSpecializationData,
    MachineLearningSpecializationLabels,
    SpecializationData,
    SpecializationLabels
} from '../../api/ceritification/Ceritification'

const Specialization = () => {

    const [specIndex, setSpecIndex] = useState(0)

    return (
        <section className='w-[100%] min-h-[100vh] py-[90px] px-[24px] md:px-[48px] bg-white shadow-lg'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    3 Different Specializations You Will
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-[6px] mt-[24px]'>
                {
                    SpecializationLabels.map((label, i) => (
                        <button key={i} className={`p-[12px] duration-150 ${specIndex === i ? 'bg-[orange] text-white' : 'bg-[white] border-orange text-black'} rounded`} onClick={() => setSpecIndex(i)}>
                            {label}
                        </button>
                    ))
                }
            </div>
            <div className={`mt-[24px]`}>
                <h1 className='font-bold'>{SpecializationData[specIndex].title}</h1>
                <p className='mt-[12px]'>
                    {SpecializationData[specIndex].text}
                </p>
            </div>

            <div className='w-[100%] text-center mt-[24px]'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    Detailed Curriculum
                </h1>
            </div>

            <MachineLearningSpecialization />
            <DataScienceSpecialization />
            <DataEngineeringSpecialization />
        </section>
    )
}

function MachineLearningSpecialization() {
    const [index, setIndex] = useState(0)
    return (
        <>
            <div className='w-[100%] text-center mt-[24px]'>
                <h1 className='text-orange font-bold text-[15px] md:text-[24px] '>
                    Machine Learning Specialization
                </h1>
            </div>
            <div className='min-w-[100%] gap-[8px] mt-[24px] flex flex-nowrap overflow-auto'>
                {
                    MachineLearningSpecializationLabels.map((label, i) => (
                        <button key={i} className={`min-w-max p-[12px] duration-150 ${index === i ? 'bg-[orange] text-white' : 'bg-[white] border-orange text-black'} rounded`} onClick={() => setIndex(i)}>
                            {label}
                        </button>
                    ))
                }
            </div>
            <div className={`mt-[24px]`}>
                <h1 className='font-bold'>{MachineLearningSpecializationData[index]?.title}</h1>
                <p className='mt-[12px]'>
                    {MachineLearningSpecializationData[index]?.text}
                </p>
            </div>
        </>
    )
}
function DataScienceSpecialization() {
    const [index, setIndex] = useState(0)
    return (
        <>
            <div className='w-[100%] text-center mt-[24px]'>
                <h1 className='text-orange font-bold text-[15px] md:text-[24px] '>
                    Data Science Specialization
                </h1>
            </div>
            <div className='min-w-[100%] gap-[8px] mt-[24px] flex flex-nowrap overflow-auto'>
                {
                    MachineLearningSpecializationLabels.map((label, i) => (
                        <button key={i} className={`min-w-max p-[12px] duration-150 ${index === i ? 'bg-[orange] text-white' : 'bg-[white] border-orange text-black'} rounded`} onClick={() => setIndex(i)}>
                            {label}
                        </button>
                    ))
                }
            </div>
            <div className={`mt-[24px]`}>
                <h1 className='font-bold'>{MachineLearningSpecializationData[index]?.title}</h1>
                <p className='mt-[12px]'>
                    {MachineLearningSpecializationData[index]?.text}
                </p>
            </div>
        </>
    )
}
function DataEngineeringSpecialization() {
    const [index, setIndex] = useState(0)
    return (
        <>
            <div className='w-[100%] text-center mt-[24px]'>
                <h1 className='text-orange font-bold text-[15px] md:text-[24px] '>
                    Data Engineering Specialization
                </h1>
            </div>
            <div className='min-w-[100%] gap-[8px] mt-[24px] flex flex-nowrap overflow-auto'>
                {
                    DataEngineeringSpecializationLabels.map((label, i) => (
                        <button key={i} className={`min-w-max p-[12px] duration-150 ${index === i ? 'bg-[orange] text-white' : 'bg-[white] border-orange text-black'} rounded`} onClick={() => setIndex(i)}>
                            {label}
                        </button>
                    ))
                }
            </div>
            <div className={`mt-[24px]`}>
                <h1 className='font-bold'>{DataEngineeringSpecializationData[index]?.title}</h1>
                <p className='mt-[12px]'>
                    {DataEngineeringSpecializationData[index]?.text}
                </p>
            </div>
        </>
    )
}

export default Specialization