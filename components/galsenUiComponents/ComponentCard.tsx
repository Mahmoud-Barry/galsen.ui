import Image from 'next/image'
import React from 'react'
import { IComponent } from '@/utils/components'

const ComponentCard: React.FC<IComponent> = ({ image, name, count, alt }) => {
    return (
        <div className='w-full'>
            <div className='w-full h-40 relative'>
                <Image
                    src={image}
                    alt={alt}
                    fill={true}
                    className='rounded-md shadow-sm border object-contain'
                />
            </div>
            <h3 className='text-xl mt-3'>{name}</h3>
            <span className='text-sm text-cardDesc'>{count} composants</span>
        </div>
    )
}

export default ComponentCard