"use client"
import React from 'react'
import Note from './Note'
import { motion } from 'framer-motion';

const NoteList = ({notes}) => {
  return (
    <motion.ul className='flex flex-wrap gap-4 mt-8 justify-center bg-[#18122B] p-4 rounded-lg'
    initial={{ y: 900}}
    animate={{ y: 10 }}
    transition={{ delay: 0.2, type: 'spring', stiffness: 40 }}
    >
          {
        notes.map(note => (
            <Note key={note.id} note={note} />
        ))
    }
</motion.ul>
  )
}

export default NoteList