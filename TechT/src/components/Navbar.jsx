const NavbarItem = ({text,key}) => {
    console.log(text)
    return (
        <div className="h-full flex align-center justify-center transition-all hover:bg-slate-200 hover:text-slate-800 ml-10 p-5 rounded-xl cursor-pointer">
            <p className="mt-auto mb-auto">{text}</p>
        </div>
    )
}

const Navbar = ({categoryNames}) => {
    return (
        <div className="w-full flex flex-row align-center text-white bg-[#482ff7] pt-1 pb-1 nav shadow-lg">
            <img src="cpu.png" className="h-[40px] ml-3 mt-auto mb-auto"></img>
            <p className="text-4xl font-[Audiowide] ml-5 mt-auto mb-auto cursor-default">TechT</p>
            <div className="ml-auto mr-10 flex flex-row h-fill align-center">
                {categoryNames.map((item,index) => {
                    return(
                        <NavbarItem text={item} key={index}></NavbarItem>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar