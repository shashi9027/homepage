"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="text-white mt-8">
            <Slider {...settings}>
                <div className="flex-important justify-between">
                    <div className="self-center">
                        <div className='md:text-5xl text-3xl' style={{fontFamily:"Massenet Bold", textTransform:"capitalize"}}>Gorem ipsum <br/>dolor sit amet.</div>
                        <div className="flex gap-8 mt-5 items-center">
                        <button className="ins-btn md:p-5">
                            Inscription
                        </button>
                        <div>Voir le règlement</div>
                        </div>
                       
                    </div>
                    <div className='sm:block hidden'>
                        <img  style={{width: "100%", maxHeight: "816px"}} src="/main-slider1.png"/>
                    </div>
                </div>
                <div className="flex-important justify-between">
                    <div className="self-center">
                        <div style={{fontSize: "50px", fontFamily:"Massenet Bold", textTransform:"capitalize", lineHeight:"50px"}}>2orem ipsum <br/>dolor sit amet.</div>
                        <div className="flex gap-8 mt-5 items-center">
                        <button className="ins-btn">
                            Inscription
                        </button>
                        <div>Voir le règlement</div>
                        </div>
                    </div>
                    <div className='sm:block hidden'>
                        <img  style={{width: "100%", maxHeight: "816px"}} src="/main-slider1.png"/>
                    </div>
                </div>
               

            </Slider>
        </div>
    )
}