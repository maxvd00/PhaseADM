import Tablehome from "./Tablehomepage";
import Grafic from "./Grafic/Graficcard";
import Social from "./Social/Social";
import Kanye from "./Kanye/Kanye";


export default function Test() {
  return (
    <div className="test">
      <Grafic />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden">
          <Tablehome />
        </div>

        <div className="rounded overflow-hidden">
          <Social />
        </div>
        <div className="rounded overflow-hidden">
         
          <Kanye />

        </div>
      </div>
    </div>
  );
}
