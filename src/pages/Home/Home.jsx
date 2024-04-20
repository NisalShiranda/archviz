import './Home.css'
import home from '../../../public/home.svg'
import Company from '../../components/Company'

function Home() {
  return (
    <>
    <div className="home p-2  flex flex-col justify-center items-center sm:flex sm:flex-row" >
        <div className="box1 flex flex-col justify-center items-center sm:w-[60%]">
            <div className="box1text ">
                <p className="heading text-center sm:text-left">Navigating the digital landscape for success</p>
                <p className="heading1 text-center sm:text-left">Our Digital marketing agency helps businesses grow and succeeed online through a range of services including SEO,PPC,Social media marketing, and content creation.</p>
            </div>
            <div className="box1btn ">
                <button type="button" className="btn">Book for a see a miracles</button>
            </div>
        </div>
        <div className="box2 sm:w-[40%]   ">
            <div className="box2image flex justify-center items-center">
                <img className="imageHome"src={home}></img>

            </div>
        </div>
    </div>
    <Company />

    </>
  )
}

export default Home