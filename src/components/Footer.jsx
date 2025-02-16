import './Global.css'

function Footer() {

    return(
        <footer className='pt-30'>
            <div className="flex justify-center">
                <div className="container footer-wrap flex justify-between">
                    <div className="logo">
                        <h1 className='text-xl font-bold pb-8'>Digital Agency</h1>
                        <p className='text-gray-600'>Building digital products, <br /> brands & experience</p>
                    </div>

                    <div className="resource">
                        <h1 className='text-xl font-bold pb-8'>Resources</h1>
                       <div className="flex flex-col gap-5 text-gray-600">
                         <a href="">Guides</a>
                         <a href="">Blog</a>
                         <a href="">Cuistomer Stories</a>
                         <a href="">Glossery</a>
                       </div>
                    </div>

                    <div className="company">
                        <h1 className='text-xl font-bold pb-8'>Company</h1>
                           <div className="flex flex-col gap-5 text-gray-600">
                           <a href="">About Us</a>
                           <a href="">Careers</a>
                           <a href="">Partners</a>
                           <a href="">Contact Us</a>
                         </div>
                    </div>

                    <div className="social-media">
                        <h1 className='text-xl font-bold pb-8'>Social Media</h1>
                         <div className="flex flex-col gap-5 text-gray-600">
                           <a href="">LinkedIn</a>
                           <a href="">Facebook</a>
                           <a href="">Instagram</a>
                           <a href="">Twitter</a>
                         </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center pt-30 pb-10 text-gray-600'>©2025, Design by Matheus | Develops by Noval, All Right Reserved</h1>
        </footer>
    )
} 

export default Footer