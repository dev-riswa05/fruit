import React from "react";
import Navbar from "./components/navbar";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen max-w-screen bg-[#E5F5AA] relative">
      
      <Navbar />

     
  <div className="flex space-x-8">
    {/* Partie gauche : images */}
    <div className="w-1/2 relative h-80 ">
      


      <span className="text-5xl font-['Inspiration'] w- mb-2 absolute top-48 -left-8 ml-60 "> Kiwi</span>
      <img
        src="/Frame 1 (1).png"
        alt="Bouteille"
        className="absolute bottom-0 left-2/4 top-0 transform -translate-x-2/4 h-[680px] "
      />
      <img 
      src="/Vector 4.png" alt="" 
      className="absolute right-60 mr-60 bottom-1 -mb-8 w-[100px] h-[100px]"
      />
      {/* Image au bas de la bouteille */}
      <img
        src="/pngwing.com (27) 1 (1).png"
        alt="Bas de la bouteille"
        className="absolute bottom-[-350px] left-60  transform -translate-x-1/2 w-[300px] h-[200px]"
      />

      {/* Image à droite de la bouteille */}
      <img
        src="/pngwing.com (33) 1.png"
        alt="À droite de la bouteille"
        className="absolute left-1/2 top-40 w-[300px] ml-2 h-[200px]"
      />
      <img 
      src="/Vector 6.png" alt="" 
      className="absolute left-1/2 bottom-0 -mb-40 w-[120px] ml-24 h-[180px]"
      />
    </div>

    {/* Partie droite : contenu */}
    <div className="py-40 w-1/2 flex flex-col justify-center items-start">
    <h1 className="font-bold text-2xl">Refresh Your Day with</h1>
    <br />
      <h1 className="text-9xl font-['Just_Another_Hand'] w- mb-2 ">Nature’s Best Juices</h1>
      <img src="/Vector 3.png" alt="" className="relative h-7 -top-8  " /> <br />
      <h3>Made with fresh, organic ingredients to fuel your body and nourish <br />
       your soul. Taste the difference of pure, cold-pressed goodness.</h3>

       <div className="flex justify-between items-center p-4 bg-[#E5F5AA]">
  <img src="/Component 1 (1).png" alt="Image 1" className=" h-20 m-0 p-0  top-0 left-0 object-cover" />
  <img src="/Component 2.png" alt="Image 2" className=" h-20  m-0 p-0  top-0 left-0 object-cover" />
  <img src="/Component 3.png" alt="Image 3" className=" h-20  m-0 p-0   top-0 left-0 object-cover" />
  <img src="/Component 4.png" alt="Image 4" className=" h-20  m-0 p-0   top-0 left-0 object-cover" />
</div>
<br />

<div className="bg-green-600 text-center  text-white font-bold w-60 ml-20 py-5 px-2 rounded-full hover:bg-green-600">
  Browse Our Juices
</div>
<footer>
  <img src="/pngwing.com (28) 1.png" alt=""className="absolute top-20 right-0 w-100 flex justify-between opacity-50"/>
</footer>
       
    </div>
  </div>


    </div>
  );
}

export default App;
