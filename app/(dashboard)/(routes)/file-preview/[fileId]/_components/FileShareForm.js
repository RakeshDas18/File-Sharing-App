import GlobalApi from './../../../../../_utils/GlobalApi';
import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';

function FileShareForm({ file, onPasswordSave }) {
    const [isPasswordEnable, setIsPasswordEnable] = useState(false);
    const [password, setPassword] = useState('');
    const { user } = useUser();
    const [email, setEmail] = useState('');
    const [showPasswordSavedMessage, setShowPasswordSavedMessage] = useState(false);
    const [showEmailSentMessage, setShowEmailSentMessage] = useState(false);
    const [showCopySuccessMessage, setShowCopySuccessMessage] = useState(false); // State for copy success message

    const handlePasswordSave = () => {
        onPasswordSave(password);
        setShowPasswordSavedMessage(true);
        setTimeout(() => {
            setShowPasswordSavedMessage(false);
        }, 2000); // Hide message after 2 seconds
    };

    const handleCopyToClipboard = () => {
        if (!navigator.clipboard) {
            console.error('Clipboard API not supported');
            return;
        }
    
        navigator.clipboard.writeText(file?.shortUrl)
            .then(() => {
                console.log('Short URL copied to clipboard');
                setShowCopySuccessMessage(true); // Show copy success message
                setTimeout(() => {
                    setShowCopySuccessMessage(false); // Hide message after 2.5 seconds
                }, 2500);
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
                // Fallback for browsers that do not support navigator.clipboard
                // You can implement a custom copy mechanism here if needed
            });
    };

    const shareFile = () => {
    // Construct the share URL
    const shareUrl = file?.shortUrl;
    
    // Construct the text to share
    let shareText = `Check out this file: ${file?.fileName}`;
    
    // Append user's name if available
    if (user?.fullName) {
        shareText = `${user.fullName} wants you to check out this file: ${file?.fileName}`;
    }
    
    // Append password if enabled
    if (isPasswordEnable && password.length > 0) {
        shareText += ` Password: ${password}`;
    }

    // Check if navigator.share is supported (modern browsers)
    if (navigator.share) {
        navigator.share({
            title: `Share File: ${file?.fileName}`,
            text: shareText,
            url: shareUrl,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support navigator.share
        console.log('Share API not supported, fallback to custom implementation');
        
        // Implement custom logic here to handle sharing via other platforms like WhatsApp, Telegram, etc.
        // For simplicity, you can open a new window with the share URL
        window.open(shareUrl, '_blank');
    }
};

    const sendEmail = () => {
        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file?.fileName,
            fileSize: file?.fileSize,
            fileType: file?.fileType,
            shortUrl: file?.shortUrl
        };

        GlobalApi.SendEmail(data)
            .then(resp => {
                console.log(resp);
                setShowEmailSentMessage(true);
                setTimeout(() => {
                    setShowEmailSentMessage(false);
                }, 2000); // Hide message after 2 seconds
            })
            .catch(error => {
                console.error('Error sending email:', error);
                // Handle error if needed
            });
    };

    return file && (
        <div className='flex flex-col gap-2'>
            <div>
                <label className='text-[14px] text-gray-500'>Short Url</label>
                <div className='flex gap-5 p-2 border rounded-md justify-center'>
                    <input 
                        type='text' 
                        value={file?.shortUrl} 
                        disabled
                        className='disabled:text-gray-400 bg-transparent outline-none w-full'
                    />
                    <Copy className='text-gray-400 hover:text-gray-200 cursor-pointer'
                        onClick={handleCopyToClipboard}
                    />
                </div>
            </div>
            <div className='gap-3 flex'>
                <input 
                    type='checkbox'
                    defaultChecked={file.password !== ''}
                    onChange={(e) => setIsPasswordEnable(e.target.checked)}
                />
                <label>Enable Password?</label>
            </div>

            {isPasswordEnable && 
            <div className='flex gap-3 items-center'>
                <div className='border rounded-md w-full p-2'>
                    <input 
                        type='password' 
                        defaultValue={file.password}
                        className='disabled:text-gray-500 bg-transparent outline-none'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    className='p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-200 hover:bg-blue-100'
                    disabled={password.length < 3}
                    onClick={handlePasswordSave}
                >
                    SAVE
                </button>
            </div>}

            {showPasswordSavedMessage && (
                <div className='bg-green-100 border-green-400 text-green-700 px-4 py-2 rounded-md text-sm mt-2'>
                    Password saved successfully!
                </div>
            )}

            <div className='border rounded-md p-3 w-full'>
                <label className='text-[14px] text-gray-500'>Enter Email Address</label>
                <div className='border rounded-e-md p-2'>
                    <input 
                        type='email' 
                        placeholder='example@gmail.com' 
                        className='bg-transparent outline-none w-full' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button 
                    onClick={() => sendEmail()} 
                    className='p-2 disabled:bg-gray-300 bg-blue-500 text-white hover:bg-blue-600 w-full mt-2 rounded-md'
                >
                    Send Email
                </button>
                <button 
                    onClick={() => shareFile()} 
                    className='p-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full mt-3'
                >
                    Share
                </button>
            </div>

            {showEmailSentMessage && (
                <div className='bg-green-100 border-green-400 text-green-700 px-4 py-2 rounded-md text-sm mt-2'>
                    Email sent successfully!
                </div>
            )}

            {/* Copy success message with animation */}
            {showCopySuccessMessage && (
                <div className='bg-blue-100 border-blue-400 text-blue-700 px-4 py-2 rounded-md text-sm mt-2 opacity-100 animate-fadeOut'>
                    Link copied to clipboard!
                </div>
            )}
        </div>
    );
}

export default FileShareForm;
