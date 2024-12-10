import React from 'react'

const Card = () => {
  return (
    <div className="rounded-[20px] hover:transform hover:transition hover:duration-150 hover:border-[1px] hover:border-violet-700 bg-[#272727] p-3 2xl:p-4 text-gray-100 md:w-11/12 max-w-2xl">
    <div className="flex gap-3 items-center">
      <img
        className=" rounded-xl w-[98px] h-[98px]"
        src="/token6.fb861f02bac9936c40e3.png"
      ></img>

      <div className="flex flex-col gap-3 items-start">
        <div className="flex justify-between items-center  w-full">
          <div className="text-lg md:text-2xl font-medium text-gray-100">
            BRED
          </div>
          <div className="text-[#993ec7] text-xs">
            by{" "}
            <span className="underline underline-offset-1 ">unknownme</span>
          </div>
        </div>
        <div className="description">
          <p className="line-clamp-2 md:line-clamp-3 text-sm">
            Merged with a vision to be fun and engaging meme coin.Merged with
            a vision to be fun and engaging meme coin.
          </p>
        </div>
        <div className="  w-full text-md">
          <div className="">Market cap: 18.29 K</div>
          <div className="h-[8px] my-1 bg-[#333333] w-full relative rounded-full overflow-hidden">
            <div className="absolute h-[8px] w-1/5 z-10 bg-[#9945ff] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
