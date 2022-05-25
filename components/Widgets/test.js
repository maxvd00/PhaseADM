import Tablehome from "./Tablehomepage";
import Grafic from "./Grafic/Graficcard";
import Social from "./Social/Social";

export default function Test() {
    return (

       
      <div className="test"> 
      <Grafic/>
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
   
    <div class="rounded overflow-hidden">
        <Tablehome/>
    </div>
    

    <div class="rounded overflow-hidden">
        <Social/>
    </div>
      <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/forest.jpg" alt="Forest" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Forest</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div>
    </div>

    
   


        
    );
  }
  