import React, { useEffect, useState } from "react";
import axios from "axios";
const GetRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// https://picsum.photos/v2/list?page=2&limit=100
// https://picsum.photos/v2/list
const Photo = () => {
  //useEffect(callback, [dependencies])
  // useEffect(function callback () {
  //     // side effects
  // }, []);
  const [Randomphotos, setRandomPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const handleLoadMore = async () => {
    const images = await GetRandomPhotos(page);
    const newPhotos = [...Randomphotos, ...images];
    setRandomPhotos(newPhotos);
    setPage(page + 1);
  };

  useEffect(() => {
    // side-effects
    // document.title = "Photos";
    handleLoadMore();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {Randomphotos.length > 0 &&
          Randomphotos.map((item, index) => (
            <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-4 bg-purple-600 text-white  "
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photo;
