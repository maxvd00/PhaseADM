import {Navbar} from "./Navigation/Navbar";

import Head from 'next/head';
import Kas from "../components/Widgets/Kas";
import Tablehome from "../components/Widgets/Tablehomepage";

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
      <div>Hello World</div>
    </div>
  );
}


