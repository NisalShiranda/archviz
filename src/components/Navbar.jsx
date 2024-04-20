import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="navbar max-[375px]:flex max-[500px]:flex-col min-[375px]:flex min[375px]:flex-row">
        <div className="logo ">
            <p className="logostyle">WIZARDZ</p>

        </div>
        <div className="items min-[375px]:flex min[375px]:flex-col text-center justify-center items-center ">
        <div className="link ">
            <a  href="#home" alt="">Home</a>
        </div>
        <div>
            <a href="#home" alt="">About</a>
        </div>
        <div>
            <a href="#home" alt="">Contact</a>
        </div>
            
            

        </div>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar