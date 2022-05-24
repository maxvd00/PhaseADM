import {Navbar} from "./Navigation/Navbar";

import Head from 'next/head';
import Kas from "../components/Widgets/kas";
import Tablehome from "../components/Widgets/Tablehomepage";
import Cards from "../components/Widgets/Cards";

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      < Navbar />
      < Kas />
      < Tablehome />
      < Cards />
      
      
      <div>Hello World</div>
    </div>
  );
}


