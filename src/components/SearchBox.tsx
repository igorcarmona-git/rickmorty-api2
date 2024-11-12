import React from 'react';
import Image from 'next/image';

function SearchBox({ search }: { search?: string; }) {
  return (
    <header className="sticky mb-5 top-0 left-0 w-full bg-emerald-700 shadow-md z-50">
      <div className="container mx-auto p-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/person-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold text-white">CARMONA</h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md p-2 border text-black border-gray-300 rounded-md"
          value={search}
        />
      </div>
    </header>
  );
}

export default SearchBox;
