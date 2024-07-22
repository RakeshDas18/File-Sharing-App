import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FilePreview({ file, removeFile }) {
    return (
        <div className='flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-500'>
            <div className='flex items-center p-2'>
                <Image className='sm: w-[30px] sm: h-[30px] mr-5' src='/file.png' width={50} height={50} alt='file' />
                <div className='text-left overflow-hidden'>
                    <h2 className='truncate max-w-[240px]'>
                        {file.name}
                    </h2>
                    <h2 className='text-[12px] text-gray-400'>
                        {file?.type} / {(file.size / 1024 / 1024).toFixed(2)} MB
                    </h2>

                </div>

            </div>
            <X className='text-red-600 cursor-pointer sm: h-10 w-10 overflow-visible' onClick={()=>removeFile()}/>
        </div>
    )
}

export default FilePreview
