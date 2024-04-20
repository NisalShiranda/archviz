import './company.css'
import Amazon from '../../public/amazon.svg'
import Dribble from '../../public/dribbble.svg'
import Hub from '../../public/hubspot.svg'
import Netflix from '../../public/netflix-logo.svg'
import Zoom from '../../public/zoom.svg'
import Insta from '../../public/instagram.svg'

function Company() {
  return (
    <>

    <div className="company flex justify-center items-center min-[320px]:grid grid-cols-1 sm:grid sm:grid-cols-3 md:grid md:grid-cols-6">
        <div className="grid1">
            <img className="companyImage" src={Amazon} alt="amazonlogo"></img>

        </div>
        <div className="grid1 ">
            <img className="companyImage" src={Dribble} alt="amazonlogo"></img>

        </div>
        <div className="grid1">
            <img className="companyImage" src={Hub} alt="amazonlogo"></img>

        </div>
        <div className="grid1">
            <img className="companyImage" src={Netflix} alt="amazonlogo"></img>

        </div>
        <div className="grid1">
            <img className="companyImage" src={Zoom} alt="amazonlogo"></img>

        </div>
        <div className="grid1">
            <img className="companyImage" src={Insta} alt="amazonlogo"></img>

        </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Company