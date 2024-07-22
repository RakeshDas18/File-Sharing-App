import React, { useState } from 'react';
import { Download } from 'lucide-react';
import Image from 'next/image';

function FileItem({ file }) {
  const [password, setPassword] = useState('');
  let fileSizeInMB = ((file?.fileSize * 8) / 1000000).toFixed(2);

  return file && (
    <div className="flex items-center justify-center h-screen">
      <div className="p-14 rounded-lg bg-white shadow-lg max-w-lg w-full">
        <div className="text-center mb-2">
          <h2 className="text-xl font-semibold text-gray-600">File Shared</h2>
          <p className="text-blue-500">{file?.userName} shared the file with you.</p>
        </div>

        <div className="flex flex-col items-center mb-2">
          <Image src="/download-file.gif" height={200} width={200} alt="Download Icon" />
          <h2 className="text-gray-500 text-lg mt-4">File Name: {file.fileName}</h2>
          <h2 className="text-gray-500 text-lg mt-4">File Size: {fileSizeInMB} MB</h2>
          <h2 className="text-gray-500 text-lg mt-4">File Type: {file.fileType}</h2>
        </div>

        {file.password ? (
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-md text-sm mt-4 w-full outline-none focus:border-blue-500"
            placeholder="Enter the password to access"
          />
        ) : null}

        <div className="flex items-center justify-center mt-4">
          <button
            href="#"
            className="flex items-center justify-center py-3 px-6 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors duration-300 ease-in-out disabled:bg-gray-300"
            onClick={() => window.open(file?.fileUrl)}
            disabled={file.password !== password}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-2">*Terms and Conditions Apply</p>
      </div>
    </div>
  );
}

export default FileItem;
