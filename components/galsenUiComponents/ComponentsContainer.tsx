import React from 'react'
import ComponentCard from './ComponentCard'
import { componentsFakeData } from '@/utils/components'

const ComponentsContainer = () => {
    return <div className='sm:max-w-7xl sm:mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3'>
        {
            componentsFakeData.map((component, index) => {
                return <div key={index} className='basis-[300px] flex-grow min-w-52'>
                    <ComponentCard {...component} />
                </div>
            })
        }
    </div>
}

export default ComponentsContainer