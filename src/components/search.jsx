import React from "react";

const search = () => {
  return (
    <div className='text-center'>
        <input type="text" placeholder='search by name' className='rounded-md p-2 mr-3 mt-4 bg-[#bdbdbd] text-[#191919] placeholder-[#191919d5] decoration-0' size={30}/>
        {/* <button type='submit' className='text-[#bdbdbd] rounded-md'>search</button> */}
    </div>
  );
};

export default search;
