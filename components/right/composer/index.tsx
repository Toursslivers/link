import React, { memo } from 'react'
import { BsPlusCircleFill, BsFillEmojiSmileFill, BsFillFileEarmarkFill } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import Editor from './editor'

const Composer = () => {
  return (
    <div className="editor-container flex min-h-[44px] rounded-lg" style={{ background: 'rgb(64,68,75)' }}>
      <div className="h-full min-h-[44px] w-14">
        <div className="flex h-[44px] w-14 items-center justify-center">
          <BsPlusCircleFill className="h-6 w-6 text-[#b9bbbe]" />
        </div>
      </div>
      <div className="min-h-[44px] w-full">
        <div className="py-[11px] text-base leading-[22px]" style={{ color: 'rgb(220,221,222)' }}>
          <Editor />
        </div>
      </div>
      <div className="flex h-full min-h-[44px] items-center space-x-4 pr-4">
        <div className="flex h-[44px] w-auto items-center justify-center">
          <BsFillEmojiSmileFill className="h-6 w-6 text-[#b9bbbe]" />
        </div>
        <div className="flex h-[44px] w-auto items-center justify-center">
          <BsFillFileEarmarkFill className="h-6 w-6 text-[#b9bbbe]" />
        </div>
        <div className="flex h-[44px] w-auto items-center justify-center">
          <FaMicrophone className="h-6 w-6 text-[#b9bbbe]" />
        </div>
      </div>
    </div>
  )
}

export default memo(Composer)