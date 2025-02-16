import './Global.css'
import Tes1 from './assets/testimonial-1.png'
import Tes2 from './assets/testimonial-2.png'
import Tes3 from './assets/testimonial-3.png'

function Testimonial() {

    return(
        <section className='py-30'>
            <h3 className='text-gray-600 text-xl font-medium text-center'>TESTIMONIALS</h3>
            <h1 className='xl:text-6xl lg:text-6xl md:text-5xl text-3xl font-bold text-center'>Read What Other <br /> have to Say</h1>
            <div className="flex justify-center">
                <div className="container testi-wrap flex justify-center gap-5 pt-20 card-wrap">

                    <div className="card-tes rounded-2xl px-10 py-15">
                        <div className="profile  flex justify-center">
                            <img src={Tes1} alt="" width="150px" className='rounded-full border-1'/>
                        </div>

                        <div className="card-detail text-center">
                            <h1 className='text-xl pb-10 pt-5'>Andrew Rathore</h1>
                            <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
                        </div>
                    </div>

                    <div className="card-tes rounded-2xl px-10 py-15">
                        <div className="profile  flex justify-center">
                            <img src={Tes2} alt="" width="150px" className='rounded-full border-1'/>
                        </div>

                        <div className="card-detail text-center">
                            <h1 className='text-xl pb-10 pt-5'>Vera Duncan</h1>
                            <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
                        </div>
                    </div>

                    <div className="card-tes rounded-2xl px-10 py-15">
                        <div className="profile  flex justify-center">
                            <img src={Tes3} alt="" width="150px" className='rounded-full border-1'/>
                        </div>

                        <div className="card-detail text-center">
                            <h1 className='text-xl pb-10 pt-5'>Mark Smith</h1>
                            <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial