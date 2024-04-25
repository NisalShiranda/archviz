import './Services.css'
import Search from '../../../public/search.svg'
import { BsArrowUpRightCircleFill } from "react-icons/bs";


function Services() {
  return (
    <>
        <div className="services">
            <div className="heading flex flex-row justify-start items-center ">
                <div>
                    <p className="heading2">Services</p>
                </div>
                <div>
                    <p className="heading3 font-normal">At our digital marketing agency, we offer a range of services to<br></br> help businesses grow and successed online. Thsese servides are included. </p>
                    
                    
                </div>
            </div>

            <div className="gridContainer min-[320px]:grid grid-cols-1 sm:grids sm:grid-cols-2">
                <div className="gridList flex flex-row justify-center items-center">
                    <div className="box1">
                    <p className="heading3 font-bold ]">Search engine optimization</p>
                    <div>
                    <BsArrowUpRightCircleFill />

                    </div>
                    </div>
                    <div className="box2">
                    <img className="search"src={Search}></img>
                    </div>
                </div>
                <div className="gridList">2</div>
                <div className="gridList">3</div>
                <div className="gridList">4</div>
            </div>

           
        </div>
    </>
  )
}

export default Services