import './Global.css'
import ContImg from './assets/contact-img.png'


function Contact() {

    return(
        <section className='py-30'>
            <div className="flex justify-center">
                <div className="container cont-wrap rounded-2xl justify-evenly items-center flex"> 
                    <div className="img">
                        <img src={ContImg} alt="" />
                    </div>

                    <div className="contact-detail">
                        <h1 className='xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold pb-10'>Be a part of the <br /> next big thing</h1>
                        <p className='text-xl text-gray-600 pb-10'>We work with Brans, Startups, to SMEs. <br /> Colaborate for more impact and growt</p>

                        <div className="cont-btn hero-btn flex">
                            <a href="" className='text-xl py-3 px-6 rounded-lg text-white font-medium'>CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact