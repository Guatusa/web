import Slider from "react-slick";
import { testimonials } from "../assets/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

const Testimonial = () => {

  const { t } = useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplayspeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <div id="testimonials" className="lg:px-40 my-20 px-[20px]">
          <div className="flex justify-center">
            <h2 className="text-4x1 title mb-20">{t('Testimonial')}</h2>
          </div>
          <div>
            <Slider {...settings}>
            {
              testimonials.map((testimonials) => {
                return <div key={testimonials.id}>
                    <div className="flex flex-col justify-center items-center gap-6 -z-10">
                      <h2 className="">{t(testimonials.title)}</h2>
                      <p className="text-center">{t(testimonials.details)}</p>
                      <img className="w-20 h-20 rounded-full p-[20px] border border-yellow-600" src={testimonials.img} alt="" />
                    </div>
                </div>
              })
            }
            </Slider>
          </div>  
      </div>
    );
  };
  
  export default Testimonial;