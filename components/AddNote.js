"use client";

import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/navigation'
import { motion } from 'framer-motion';


const AddNote = () => {

    const router = useRouter();


    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("/api/post", {title,description})
          .then((res) => {
            console.log({title,description});
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            router.refresh();
            setDescription("")
            setTitle("")
          });
      };


  return (
    <motion.section className="text-[#18122B] mt-6 p-4 rounded-lg bg-[#443C68]"
    initial={{ y: -350}}
    animate={{ y: -10 }}
    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    > 
     
          <form className="flex flex-col gap-4  " onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3 text-center text-[#635985]">Add New Note</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input input-bordered input-sm w-full max-w-md m-auto"
            value={title || ""}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            className="input input-bordered input-sm w-full max-w-md m-auto "
            value={description || ""}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <motion.button type="submit" 
          className="btn  p-3 max-w-md m-auto bg-[#393053] text-[#635985] rounded-lg"
          whileHover={{ x: [0, -100, 100, -100, 100, -100, 0] }} 

          >
            Submit
          </motion.button>
        </form>
    </motion.section>
  )
}

export default AddNote