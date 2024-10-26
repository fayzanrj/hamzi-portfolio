const Videos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 min-h-screen p-4">
      {/* First Set */}
      <div className="col-span-2 sm:col-span-1 lg:row-span-3 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/KbNzcnTJ2pE"
          title="YouTube video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-1 lg:col-span-2 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/FxdTingjaIU"
          title="YouTube video 5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-1 lg:col-span-2 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/SgGunHp4Q0o"
          title="YouTube video 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Second Set */}
      <div className="col-span-2 sm:col-span-1 lg:row-span-3 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/4oWmzbZy-r4"
          title="YouTube video 4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-1 lg:col-span-2 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LSc63rKxN8g"
          title="YouTube video 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-1 lg:col-span-2 p-2 flex items-center justify-center">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/zKFrsydFMjo"
          title="YouTube video 6"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
