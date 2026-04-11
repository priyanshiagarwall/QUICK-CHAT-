import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils'

const ChatContainer = ({selectedUser,setSelectedUser}) => {


  const scrollEnd=useRef()

  useEffect(()=>{
    if(scrollEnd.current){
      scrollEnd.current.scrollIntoView({behavior:"smooth"})
    }
  },[messagesDummyData])

  return selectedUser ? (
    <div className='h-full flex flex-col overflow-hidden relative backdrop-blur-lg'> 
      {/* ------------header --------- */}
       <div className='flex items-center gap-2 sm:gap-3 py-2 sm:py-3 mx-2 sm:mx-4 border-b border-stone-500 flex-shrink-0 mobile-chat-header'>
        <img src={selectedUser.profilePic || assets.avatar_icon} alt="" className="w-6 sm:w-8 rounded-full"/>
        <p className='flex-1 text-base sm:text-lg text-white flex items-center gap-2'>
            Martin Johnson
            {<span className="w-2 h-2 rounded-full bg-green-500"></span>}
        </p>
        <img onClick={()=>setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hidden max-w-6 sm:max-w-7 cursor-pointer back-button'/>
      </div>
      {/* ----chat area----- */}
       <div className='flex flex-col flex-1 overflow-y-auto p-2 sm:p-3 will-change-transform scroll-smooth mobile-chat-area' >
        {messagesDummyData.map((msg,index)=>(
          <div key={index} className={`flex items-end gap-1 sm:gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
                {msg.image ? (
                  <img src={msg.image} alt="" className='max-w-[230px] sm:max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-6 sm:mb-8'/>
                ) : (
                  <p className={`p-2 sm:p-3 max-w-[180px] sm:max-w-[200px] text-sm sm:text-base font-light rounded-lg mb-6 sm:mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
                )}
                <div className="text-center text-xs">
                  <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt="" className='w-6 sm:w-7 rounded-full' />
                  <p className='text-gray-500 text-xs'>{formatMessageTime(msg.createdAt)}</p>
                </div>
              </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

        {/* --bottom area-- */}

       <div className='flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#18162a]/90 flex-shrink-0 mobile-chat-input'>
        <div className='flex-1 flex items-center bg-[#23213a] px-3 py-2 sm:px-3 sm:py-3 rounded-full border border-violet-500 gap-2'>
            <input
                type="text" 
                placeholder="Send a message" 
                className='flex-1 text-sm p-2 sm:p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent min-w-0' />
            
            <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image" className="flex items-center justify-center cursor-pointer">
                <img src={assets.gallery_icon} alt="" className="w-6 h-6 sm:w-5 sm:h-5 mr-1 sm:mr-2"/>

            </label>
        </div>

        <img src={assets.send_button} alt="Send" className="w-6 sm:w-7" />

       </div>

    </div>
  ): (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
        <img src={assets.logo_icon} className='max-w-16' alt="" />
        <p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer
