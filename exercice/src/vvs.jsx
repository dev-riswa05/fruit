import React from 'react';

const JuicePromo = () => {
  return (
    <div className="flex bg-[#E5F5AA] p-8 rounded-lg">
      {/* Partie gauche : image et fruits */}
      <div className="flex flex-col items-center w-1/2 relative">
        <img 
          src="/bout.jpg" 
          alt="Juice bottle" 
          className="w-48 z-10"
        />
        {/* Kiwi tranché */}
        <img 
          src="moitier.jpg" 
          alt="Kiwi" 
          className="w-24 absolute top-20 left-40 z-0 opacity-90"
        />
        {/* Fruits en bas à gauche */}
        <div className="flex space-x-4 absolute bottom-0 left-10">
          <img src="/Component 3.jpg" className="w-16" />
          
        </div>
      </div>

      {/* Partie droite : texte et boutons */}
      <div className="w-1/2 pl-12 flex flex-col justify-center">
        <h3 className="font-semibold text-black mb-1">Refresh Your Day with</h3>
        <h1 className="text-4xl font-bold mb-4">Nature's Best Juices</h1>
        <p className="mb-6 text-gray-700 max-w-md">
          Made with fresh, organic ingredients to fuel your body and nourish your soul. Taste the difference of pure, cold-pressed goodness.
        </p>

        {/* Liste des fruits */}
        <div className="flex space-x-6 mb-8">
          <div className="text-center bg-white rounded-lg p-3 shadow">
            <img src="/Component 1.jpg" alt="Orange" className="w-12 mx-auto" />
            <p className="text-xs font-bold mt-1">ORANGE</p>
          </div>
          <div className="text-center bg-white rounded-lg p-3 shadow">
            <img src="/Component 2.jpg" alt="Plum" className="w-12 mx-auto" />
            <p className="text-xs font-bold mt-1">PLUM</p>
          </div>
          <div className="text-center bg-white rounded-lg p-3 shadow">
            <img src="/Component 3.jpg" alt="Kiwi" className="w-12 mx-auto" />
            <p className="text-xs font-bold mt-1">KIWI</p>
          </div>
          <div className="text-center bg-white rounded-lg p-3 shadow">
            <img src="/Component 4.jpg" alt="Strawberry" className="w-12 mx-auto" />
            <p className="text-xs font-bold mt-1">STRAWBERRY</p>
          </div>
        </div>

        {/* Bouton d'action */}
        <button className="bg-green-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-green-700 transition">
          Browse Our Juices
        </button>
      </div>
    </div>
  );
};

export default JuicePromo;