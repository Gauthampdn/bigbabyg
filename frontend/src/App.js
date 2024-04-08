
import React from 'react';
import './App.css'; // Ensure the CSS file with animations is imported

const App = () => {
  return (
    <div className='bg-slate-900 fade-in'>
      <div className="relative h-screen w-screen">
        <div
          className="absolute top-0 left-0 h-full w-full bg-center bg-cover fade-in"
          style={{ backgroundImage: `url(frame.jpg)` }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute top-2/3 left-0 h-1/3 w-full bg-gradient-to-b from-transparent to-slate-900"></div>

        <img className="absolute top-0 m-2 mt-8 w-28 h-28 fade-in" src="initial.png" alt="" />

        <div className="absolute bottom-0 left-0 p-8 ">
          <h1 className="text-white text-3xl font-extrabold">Gautham<br />Pandian</h1>
          <h1 className="pt-4 text-white text-md font-semibold"> Hey! I'm Gautham, documenting my journey through fitness and
            stuff I read to keep me accountable - so philosophical ponderings with a side push-ups.</h1>
        </div>
      </div>

      <div className="p-8 ">
        <h1 className="text-white text-3xl font-extrabold">Links:</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 pr-8 pl-8 pb-20">
        <a href="https://www.instagram.com/gauthampdn" target="_blank" rel="noopener noreferrer" className="w-full border-2 rounded-3xl p-2">
          <div className="w-full h-50 bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center">
            <img
              src="/insta.png"
              alt="Instagram"
              className="w-1/5" // This sets the image height to 75% of the container height
            />
          </div>
          <h1 className='pt-2 text-white text-sm font-semibold flex justify-center'>@gauthampdn</h1>

        </a>

        <a href="https://www.tiktok.com/@gauthampdn" target="_blank" rel="noopener noreferrer" className="w-full border-2 rounded-3xl p-2">
          <div className="w-full h-50 bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center">
            <img
              src="/tiktok.png"
              alt="TikTok"
              className="w-1/5" // This sets the image height to 75% of the container height
            />
          </div>
          <h1 className='pt-2 text-white text-sm font-semibold flex justify-center'>gauthampdn</h1>

        </a>
      </div>    </div>
  );
}

export default App;
