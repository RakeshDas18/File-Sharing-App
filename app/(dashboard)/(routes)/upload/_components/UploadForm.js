import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({ uploadBtnClick, progress }) {
    const [errorMsg, setErrorMsg] = useState();
    const [file, setFile] = useState();
    const onFileSelect = (file) => {
        if (file && file.size > 100000000) {
            console.log("The file size is greater than 100MB");
            setErrorMsg('Maximum file upload size is 100 MB');
            return;
        }
        setErrorMsg(null);
        setFile(file);
    }
    return (
        <div className='text-center'>

            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-10 h-10 mb-4 text-blue-600 dark:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm md:text-2xl text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or
                            <strong className='text-blue-600'> drag</strong>  and <strong className='text-blue-600'> drop</strong></p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX SIZE: 100 MB)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden"
                        onChange={(event) => onFileSelect(event.target.files[0])} />
                </label>
            </div>

            {errorMsg ? <AlertMsg msg={errorMsg} /> : null}

            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}

            {progress > 0 ? <ProgressBar progress={progress} /> : 
            <button disabled={!file} className='p-2 bg-blue-600 text-white w-[30%] rounded-full mt-5 disabled:bg-gray-500'
                onClick={() => uploadBtnClick(file)}>
                Upload
            </button>}

        </div>
    )
}

export default UploadForm
