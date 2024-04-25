import './Usecases.css'
import Smile from '../../../public/smile.svg'


function Usecases() {
  return (
    <>
    <div className="Usecases grid grid-cols-2 place-items-center sm:p-14">
        <div className="box1Text">
            <p className='box1text1 font-semibold'>Let`s make things happen</p>
            <p className="box1text2 font-normal">Contact us today to learn more about how our digital marketing services can help your business grow and successed online.</p>
            <p className='box1text3 font-semibold'>Let`s make things happen</p>
        </div>
        <div className="box2Image">
            <img src={Smile} alt="smile image"></img>
        </div>
    </div>



    </>
  )
}

export default Usecases