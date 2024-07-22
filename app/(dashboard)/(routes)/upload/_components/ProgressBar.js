import React from 'react'

function ProgressBar({ progress }) {
    return (
        <div className='bg-gray-400 w-full h-5 mt-3 rounded-full'>
            <div className='bg-blue-500 rounded-full h-5 text-[15px] text-white' style={{ width: `${progress}%` }}>
                {`${Number(progress).toFixed(0)}%`}
            </div>

        </div>
    )
}

export default ProgressBar
