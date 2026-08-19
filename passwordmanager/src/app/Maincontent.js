import React from 'react'

function Maincontent() {
    return (
        <div className="w-screen items-center text-center bg-mist-900 h-fit flex flex-col border-2 border-white gap-4">
            <div className='flex flex-col items-center w-full gap-2 border-2 border-white'>
                <div className='flex flex-col gap-2 pt-2  w-full'>
                    <span>icon</span>
                    <span>Your own Password Manager</span>
                </div>
                <div className='flex flex-col gap-4 pt-2 items-center  w-full'>
                    <span className='w-1/2'>
                        <input type='text' placeholder='Enter website URL' className='w-full rounded-lg p-2' />
                    </span>
                    <span className='w-1/2 flex justify-between gap-4'>
                        <input type='text' placeholder='Enter User Name' className='w-3/4 border-2 border-white rounded-lg p-2' />
                        <input type='password' placeholder='Enter Your Password' className='border-2 border-red-800 w-3/8 rounded-lg p-2' />
                    </span>
                </div>
                <button className='border-2 border-white p-2 mt-4 rounded-lg'>Save</button>
            </div>
            <div className=' w-full flex flex-col items-center gap-5 pt-4'>
                <div className='text-left w-1/2 '>Your Passwords</div>
                <div className=' w-1/2'>
                    <div className='flex justify-between'>
                        <div className='flex  w-full'>
                            <span className='text-center w-full '>Site</span>
                        </div>
                        <div className='flex justify-between  w-full'>
                            <span>Username</span>
                            <span>Password</span>
                            <span>Actions</span>
                        </div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div className='flex w-full'>
                            <span className='text-center w-full '>https://www.youtube.com/</span>
                        </div>
                        <div className='flex justify-between w-full'>
                            <span>Tarun Singh</span>
                            <span>12345</span>
                            <span>icon icon</span>
                        </div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div className='flex w-full'>
                            <span className='text-center w-full '>https://www.youtube.com/</span>
                        </div>
                        <div className='flex justify-between w-full'>
                            <span>Tarun Singh</span>
                            <span>12345</span>
                            <span>icon icon</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Maincontent
