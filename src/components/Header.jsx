const Header = (props) => {
  const { imgUrl, alt, icons, cgScreen } = props;

  const handleShowIcon = (e, boolean) => {
    if(boolean){
      document.getElementsByClassName(e.target.id)[0].classList.remove("hidden")
    } else {
      document.getElementsByClassName(e.target.id)[0].classList.add("hidden")
    }
  }

  return (
    <>
      <h1 className="mx-8 mb-5 text-[2rem] font-bold md:hidden">What's in the box</h1>
      <figure className="w-full relative">
        <div className="hidden md:flex items-center text-left absolute top-5 w-full">
            <h1 className="mr-5 font-bold text-[1.75rem]">What's in the box</h1>
            <h1 className="font-bold text-[1.75rem] text-gray-400">Tech Specs</h1>
            <img className="absolute right-0 z-20 cursor-pointer" src="./assets/switch/arrow-double.svg" onClick={() => cgScreen()} alt="arrow-icon" />
        </div>
        <div className="relative">
          <img className="md:hidden w-full" src={imgUrl[0]} alt={alt}></img>
          <img className="hidden md:block w-full" src={imgUrl[1]} alt={alt}></img>
          <ul className="absolute bottom-0 justify-center mb-5 h-full pt-24 lg:pt-32 left-20 hidden md:flex md:flex-col">
            <li><button id="icon-1" onMouseEnter={(e)=> handleShowIcon(e, true)} onMouseLeave={(e)=> handleShowIcon(e, false)} onClick={() => cgScreen()} className="flex p-1 lg:p-2 items-center lg:mb-3"><img className="p-2 border rounded-full border-black hover:bg-white active:bg-white hover:border-none active:border-none mr-4" src={icons["faro-helmet"]} alt="boton-faro"></img>FARO Helmet</button></li>
            <li><button id="icon-2" onMouseEnter={(e)=> handleShowIcon(e, true)} onMouseLeave={(e)=> handleShowIcon(e, false)} onClick={() => cgScreen()} className="flex p-1 lg:p-2 items-center lg:mb-3"><img className="p-2 border rounded-full border-black hover:bg-white active:bg-white hover:border-none active:border-none mr-4" src={icons["user-manual"]} alt="boton-user"></img>User manual</button></li>
            <li><button id="icon-3" onMouseEnter={(e)=> handleShowIcon(e, true)} onMouseLeave={(e)=> handleShowIcon(e, false)} onClick={() => cgScreen()} className="flex p-1 lg:p-2 items-center lg:mb-3"><img className="p-2 border rounded-full border-black hover:bg-white active:bg-white hover:border-none active:border-none mr-4" src={icons["nav-remote"]} alt="boton-nav"></img>Navigation Remote</button></li>
            <li><button id="icon-4" onMouseEnter={(e)=> handleShowIcon(e, true)} onMouseLeave={(e)=> handleShowIcon(e, false)} onClick={() => cgScreen()} className="flex p-1 lg:p-2 items-center lg:mb-3"><img className="p-2 border rounded-full border-black hover:bg-white active:bg-white hover:border-none active:border-none mr-4" src={icons["rubb-band"]} alt="boton-rubber"></img>Rubber bands</button></li>
            <li><button id="icon-5" onMouseEnter={(e)=> handleShowIcon(e, true)} onMouseLeave={(e)=> handleShowIcon(e, false)} onClick={() => cgScreen()} className="flex p-1 lg:p-2 items-center lg:mb-3"><img className="p-2 border rounded-full border-black hover:bg-white active:bg-white hover:border-none active:border-none mr-4" src={icons["usb"]} alt="boton-usb"></img>USB Type-C Charging Cable</button></li>
          </ul>
          <ul className="absolute bottom-0 right-0 z-10 w-1/2 h-full">
            <li><img className="p-2 border rounded-full bg-orange-600 absolute right-40 lg:right-64 hidden icon-1" src={icons["check"]} alt="faro-helmet" /></li>
            <li><img className="p-2 border rounded-full bg-orange-600 absolute right-24 bottom-10 lg:right-36 lg:bottom-20 hidden icon-2" src={icons["check"]} alt="faro-helmet" /></li>
            <li><img className="p-2 border rounded-full bg-orange-600 absolute left-24 bottom-20 lg:left-36 lg:bottom-24 lg:right-64 hidden icon-3" src={icons["check"]} alt="faro-helmet" /></li>
            <li><img className="p-2 border rounded-full bg-orange-600 absolute left-36 bottom-12 lg:bottom-20 lg:left-48 hidden icon-4" src={icons["check"]} alt="faro-helmet" /></li>
            <li><img className="p-2 border rounded-full bg-orange-600 absolute right-40 bottom-4 left-20 lg:bottom-4 lg:left-24 hidden icon-5" src={icons["check"]} alt="faro-helmet" /></li>
          </ul>
        </div>
      </figure>
    </>
  );
};

export default Header;
