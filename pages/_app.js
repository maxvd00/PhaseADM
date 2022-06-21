import '../styles/globals.css'
import '../dist/output.css'
import ReactDOM from "react-dom"; 
import { SessionProvider } from "next-auth/react"


function MyApp({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
} // TO INSPECT THE PAGE BEFORE 1ST RENDER

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default MyApp
