import React from "react";

const CardTaiwind = (props) => {
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=center"
          alt=""
          className="block w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5  w-[calc(100%-36px)]">
        <div className="flex justify-between mb-8 items-center">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=center"
              alt=""
            />
            <span className="font-light text-base text-[#333]">@ahakdaj</span>
          </div>
          <div className="flex items-center gap-x-2">
            <img src="/icon-heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Cosmic Perestional</div>
          <div className="text-lg font-bold text-transparent bg-clip-text bg-primary-gradient">12,000 PLS</div>
        </div>
      </div>
    </div>
  );
};

export default CardTaiwind;
