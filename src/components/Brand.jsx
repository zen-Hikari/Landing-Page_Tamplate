
import './Global.css'
import Spotify from './assets/spotify.png'
import Slack from './assets/slack.png'
import Dropbox from './assets/drop-box.png'
import Zoom from './assets/zoom.png'
function Brand() {

    return(
        <section className='py-20'>
            <h1 className='text-xl text-gray-600 font-normal pb-5 text-center'>Trusted by 4,000+ companies</h1>
            <div className="flex justify-center">
               <div className="container brand-wrap flex justify-center xl:gap-25 lg:gap-20"> 
                   <img src={Spotify} alt="" className='py-6 px-6 w-[150px] h-auto' />
                   <img src={Slack} alt="" className='py-6 px-6 w-[150px] h-auto' />
                   <img src={Dropbox} alt="" className='py-6 px-6 w-[150px] h-auto' />
                   <img src={Zoom} alt="" className='py-6 px-6 w-[150px] h-auto' />
               </div>
            </div>
        </section>
    )
}

export default Brand