// Section
import Home from "./section/Home";
import Sevices from "./section/Sevices";
import Blog from "./section/Blog";
import Download from "./section/Download";
import Footer from "./section/Footer";

import Favicon from './assets/img/favicon.svg'

document.title = 'Interior';
const favicon = document.getElementById('favicon');
favicon.setAttribute("href", Favicon);

function App() {
  return (
    <>
      <Home />
      <Sevices />
      <Blog />
      <Download />
      {/* <Footer /> */}
    </>
  );
}

export default App;
