import {Navbar} from "./Navigation/Navbar";

import Head from 'next/head';
import Kas from "../components/Widgets/kas";
// import Kas from "../components/Widgets/Kas";
import Tablehome from "../components/Widgets/Tablehomepage";
// import Cards from "../components/Widgets/Cards";
import Test from "../components/Widgets/test";

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      < Navbar /> 
      {/* < Kas /> */}
      < Test />
      {/* < Tablehome /> */}
      {/* < Cards /> */}
      
      
      
      <div>Hello World</div>
    </div>
  );
}


