import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function FileInfo({ file }) {
    const [fileType, setFileType] = useState();

    useEffect(() => {
        if (file) {
            // Determine file type (e.g., 'image/jpeg', 'application/pdf')
            const type = file.fileType.split('/')[0];
            setFileType(type);
        }
    }, [file]);

    return file && (
        <div className='text-center border flex justify-center m-4 flex-col items-center rounded-lg border-blue-400'>
            {fileType === 'image' ? (
                <Image
                    src={file.fileUrl}
                    alt={file.fileName}
                    width={200}
                    height={300}
                    className='m-10 rounded-md object-contain'
                />
            ) : (
                <img
                    src='/file.png' // Default image path
                    alt={file.fileName}
                    className='h-[300px] rounded-md object-contain'
                />
            )}
            <div>
                <h2>{file.fileName}</h2>
                <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
            </div>
        </div>
    );
}

export default FileInfo;
