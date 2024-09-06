import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'
import {IoSearchSharp} from 'react-icons/io5'


function SearchInput() {
  const [search, setsearch] = useState("")
  const {setSelectedConversation} = useConversation()
 const {conversations}= useGetConversations()
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(search.length<3){
     return toast.error ("search term must be atleat 3 characters long")
    }
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setsearch("")
    }
    else{
      toast.error("No such user found!")
    }
  }
  return (
<form className='flex items-center gap-2' onSubmit={handleSubmit} >
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e)=> setsearch(e.target.value)}/>
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none'/>
    </button>
</form>
  )
}

export default SearchInput