import React from 'react'

function ProgressBar({ progress }) {
    return (
        <div className='mt-3'>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="relative block rounded-full bg-gray-200"
  >
    <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
      <span className="font-bold text-white"> {`${Number(progress).toFixed(0)}%`} </span>
    </span>

    <span className="block h-5 rounded-full bg-indigo-600 text-center" style={{width: `${progress}%`}}> </span>
  </span>
</div>
        // <div className='bg-gray-400 w-full h-5 mt-3 rounded-full'>
        //     <div className='bg-blue-500 rounded-full h-5 text-[15px] text-white' style={{ width: `${progress}%` }}>
        //         {`${Number(progress).toFixed(0)}%`}
        //     </div>

        // </div>
    )
}

export default ProgressBar
