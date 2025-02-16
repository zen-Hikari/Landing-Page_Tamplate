import './Global.css'
import HeroImg from './assets/hero-img.png'
function Hero() {

    return(
        <section className='hero pt-30'>
            <div className="flex justify-center">
                <div className="container hero-wrap flex items-center justify-center">
                    <div className="hero-detail mr-auto">
                        <h1 className='xl:text-7xl lg:text-6xl md:text-5xl text-3xl font-bold xl:pb-10 lg:pb-10 md:pb-8 pb-7'>Building Digital <br /> Products, Brands <br /> & experience</h1>
                        <p className='text-gray-600 xl:text-xl lg:text-xl md:text-lg text-sm pb-10 font-semibold'>Digital Agency is your online team mangement tool that <br /> easy and prompt</p>

                        <div className="hero-btn flex">
                            <a href="" className='py-3 px-6 font-semibold xl:text-lg lg:text-lg md:text-lg text-sm text-white rounded-lg'>CONTACT US</a>
                        </div>
                    </div>

                    <div className="hero-img">
                        <img src={HeroImg} alt="" width="500px"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero