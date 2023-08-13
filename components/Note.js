"use client";
import { motion } from 'framer-motion';

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const Note = ({note}) => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false)

    const [titleUP, setTitle] = useState(note.title);
    const [DescriptionUP, setDescription] = useState(note.description);


  const editForm = () => {setVisibility(visibility => !visibility)}
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
 axios
      .patch(`/api/post/${note.id}`, {titleUP,DescriptionUP})
      .then((res) => {
        console.log({titleUP,DescriptionUP});
      })
      .catch((err) => {
        console.log(err);
      })

      ,setTimeout(()=>{window.location.reload()},1000)

  };



  const handleDeleteNote = (id) => {
    axios
    .delete(`/api/post/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      router.refresh();
    });
  }

  const buttonVariants = {
    hover: {
      scale: [1.1,1,1.1,1,1.1,1,1.1,1,1.1],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

  
  return (
    <div className=''>
          <li className="card sm:w-80  max-w-[300px] text-[#635985] bg-[#393053]" key={note.id}>
          <div className="card-body ">
    <h2 className="card-title">{note.title}</h2>
    <p >{note.description}</p>
  </div>
      <div className="pt-5">
        <motion.button
          className="mr-3 btn btn-sm ml-3 rounded-md text-center bg-[#393053] text-[#635985] "
          onClick={(e)=>editForm()}

          whileHover={{ y: [0, -80, 80, -80, 80, -80, 0] }} // Move left and right repeatedly

        >
          Edit
        </motion.button>
        <motion.button 
         whileHover={{ y: [0, -80, 80, -80, 80, -80, 0] }} // Move left and right repeatedly
        onClick={() => handleDeleteNote(note.id)} className="mr-3 btn btn-sm mb-3  rounded-md text-center bg-[#393053] text-[#635985] ">Delete</motion.button>
        
     
        {visibility && <div>
            <h2 className="text-center">Update Note</h2>
            <form 
            onSubmit={handleEditSubmit}
            className="p-4 bg-warning mt-1 rounded-lg flex-col">
              <div>
                <input 
                 value={titleUP || ""}
                 onChange={(e)=>setTitle(e.target.value)}
                className="p-4 w-full outline-none" type="text" id="title"  />
              </div>
              <div>
                <input 
                  value={DescriptionUP || ""}
                  onChange={(e)=>setDescription(e.target.value)}
                  name="description"
                className="p-4 w-full mt-3 outline-none" type="text" id="description"  />
              </div>
              <button type="submit" className="btn btn-sm mr-3 bg-lime-700 mt-2 p-2 rounded-md">Update</button>
              <button onClick={() => setVisibility(visibility => !visibility)} className="btn btn-sm mr-3 bg-rose-600 mt-2 p-2 rounded-md">Cancel</button>
            </form>
          </div>

          }        
      </div>
    </li>
    </div>
  )
}

export default Note