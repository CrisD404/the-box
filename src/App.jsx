import Header from "./components/Header";
import Specs from "./components/Spec";
import Subtitle from "./components/Subtitle";
import SpecsList from "./Assets/specs/specs.json";
import lgImgUrl from "./Assets/header/Image/background.png";
import smImgUrl from "./Assets/header/Image/background-mobile.png";
import React, { useState } from 'react';

const App = () => {
  const [firstScreen, setfirstScreen] = useState(true);

  const handleChangeScreen = () => {
      setfirstScreen(!firstScreen);
    }

  return (
    <>
      {/* <Icons iconName="faro-helmet"/> */}
      <header id="header" className={"mt-12 text-center element md:max-w-[810px] lg:max-w-[1140px] mx-auto md:" + (!firstScreen ? "hidden" : "")}>
        <Header cgScreen={()=> handleChangeScreen()} icons={SpecsList.icons} imgUrl={[smImgUrl, lgImgUrl]} alt="Imagen de portada"/>
      </header>
      <main className="mx-8 text-center">
        <section className="px-4 mt-6 mb-8 md:hidden">
          <Subtitle /> 
        </section>
        <section className={"md:max-w-[810px] lg:max-w-[1140px] mx-auto md:" + (firstScreen ? "hidden" : "")} id="specs">
          <Specs cgScreen={()=> handleChangeScreen()} specs={SpecsList.specs}/>
        </section>
      </main>
    </>
  );
}

export default App;
