import './Global.css'
import CustomImg from './assets/about-img-2.png'


function Custom() {

    return(
        <section className='py-20'>
        <div className="flex justify-center">
            <div className="container service-wrap flex flex-row-reverse items-center justify-around">
                <div className="img-about ">
                    <img src={CustomImg} alt="" />
                </div>

                <div className="about-detail">
                    <h1 className='xl:text-6xl text-4xl  font-bold pb-10'>Custome & Plugin <br /> Development</h1>
                    <p className='text-gray-600 text-xl pb-10'>Commonly used in the graphic, print & publishing <br /> industris for previewing visual layout and <br /> mockups</p>
                    <i className="ai-arrow-right up flex text-3xl"></i>
                    <i className="ai-arrow-down down flex text-3xl"></i>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Custom