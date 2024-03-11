"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const list = [
    {
        name: "Lauréat 2022",
        subname: "Mélanie Léger",
        detail: "pour son œuvre Tsunami",
        image: "/image1.png"
    },
    {
        name: "finaliste 2022",
        subname: "Carl Philippe Gionet",
        detail: "pour son œuvre Icare",
        image: "/image2.png"
    },
    {
        name: "finaliste 2022",
        subname: "Pierre-André Doucet",
        detail: "pour son œuvre Des dick pics sous les étoiles",
        image: "/image3.png"
    },
    {
        name: "Lauréat 2022",
        subname: "Marc",
        detail: "pour son œuvre Tsunami",
        image: "/image4.png"
    }
]
export default function ProfileSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
       
    };
    return (
        <div className="text-white mt-12">
            <Slider {...settings}>
                
                    {list?.map((val)=>{
                        return(
                            <div className="flex-important flex-col justify-center items-center">
                                <img style={{minWidth:"260px", maxHeight:"390px", minHeight:"390px"}} src={val.image}/>
                                <div className="card-main-text mt-3 ">{val.name}</div>
                                <div className="card-name ">{val.subname}</div>
                                <div className="card-name ">{val.detail}</div>
                            </div>
                        )
                    })}
                
               

            </Slider>
        </div>
    )
}