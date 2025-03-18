import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            name: 'Kolkata',
        },
        {
            id: 2,
            name: 'Bhubaneswar',
        },
        {
            id: 3,
            name: 'Jamshedpur',
        },
        {
            id: 4,
            name: 'Hyderabad',
        },
        {
            id: 5,
            name: 'Bangalore',
        }
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map((city) => (
                    <button 
                        key={city.id} 
                        className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded transition ease-in'
                        onClick={() => setQuery({ q: city.name })}
                    >
                        
                        {city.name}
                    </button>
                ))
            }
        </div>
    )
}

export default TopButtons