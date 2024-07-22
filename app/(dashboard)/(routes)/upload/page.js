"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from './../../../../firebaseConfig.js'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { generateRandomString } from './../../../_utils/GenerateRandomString.js';
import CompletationTick from './_components/CompletationTick';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

function Upload() {

  const { user } = useUser();
  const [progress, setProgress] = useState();
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();
  const storage = getStorage(app);
  const db = getFirestore(app); 
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL);
        });
      })
  }

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString();


    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      id: docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId
    });
    setFileDocId(docId);
    setUploadCompleted(true);
  }

  useEffect(() => {
    progress == 100 && setTimeout(() => {
      setUploadCompleted(true);
    }, 2000)
  }, [progress == 100])

  useEffect(() => {
    if (uploadCompleted) {
      const timer = setTimeout(() => {
        setUploadCompleted(false);
        router.push('/file-preview/' + fileDocId);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [uploadCompleted]);


  return (

    <div className='p-5 px-8 md:px-28 text-center' >
      {!uploadCompleted ?
        <div>
          <h2 className='text-[18px] text-center m-5'>
            Start
            <strong className='text-blue-600'> Uploading </strong>
            Files and
            <strong className='text-blue-600'> Share </strong>
            it
          </h2>
          <UploadForm uploadBtnClick={(file) => uploadFile(file)}
            progress={progress}
          />
        </div> :
        <CompletationTick />}
    </div>
  )
}

export default Upload
