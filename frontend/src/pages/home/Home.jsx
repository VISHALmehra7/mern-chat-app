import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

function Home() {
  return (
    <div className=" flex sm:h-[450px] md:h-[550px] rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home