"use client"
import { app } from './../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import FileItem from './_components/FileItem';
import Link from 'next/link';
import Image from 'next/image';


function FileView({params}) {
    const db = getFirestore(app);
    const [file, setFile] = useState();
    useEffect(() => {
        params.fileId && getFileInfo()
        console.log(params.fileId)
    })
    const getFileInfo = async () => {
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setFile(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col'>
      <Link href='/upload'>
        <Image src='/logo.svg' width={120} height={120} className='md:pt-20 pb-5'/>
      </Link>
      <FileItem file={ file }/>
    </div>
  )
}

export default FileView
