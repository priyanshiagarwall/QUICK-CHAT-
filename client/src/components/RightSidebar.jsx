import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
     <div className='bg-gradient-to-b from-[#23213a] to-[#18162a] text-white w-full relative overflow-y-scroll animate-in slide-in-from-right duration-300 ease-out flex flex-col h-full'>
        <div className='flex flex-col items-center gap-2 text-xs font-light mx-auto px-4 pt-10 pb-4'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt=""
         className='w-20 h-20 rounded-full border-4 border-[#282142] shadow-lg mb-2'  />
         <h1 className='text-xl font-semibold mx-auto flex items-center gap-2 text-center'>
                <p className='w-2 h-2 rounded-full bg-green-500 inline-block'></p>
                {selectedUser.fullName}
          </h1>
          <p className='mx-auto text-center text-sm text-gray-300'>{selectedUser.bio}</p>
      </div>

      <hr className="border-[#ffffff30] my-2 mx-4"/>

        <div className="px-4 text-xs flex-1">
          <p className="text-base font-semibold mb-2">Media</p>
            <div className='mt-1 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-3 opacity-90'>
                {imagesDummyData.map((url, index)=>(
                    <div key={index} onClick={()=> window.open(url)} className='cursor-pointer rounded'>
                        <img src={url} alt="" className='h-full w-full object-cover rounded-md'/>
                    </div>
                ))}
            </div>
        </div>

        <button onClick={()=> logout()} className='mt-6 mb-4 mx-4 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-base font-medium py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity shadow-lg'>
            Logout
        </button>

    </div>
  )
}

export default RightSidebar
