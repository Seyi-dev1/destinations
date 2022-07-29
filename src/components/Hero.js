 import paris from './images/marc-lamy-qF_pqc9lZKo-unsplash.jpg'
 import fuji from './images/abyan-athif-prsGKZ93F1A-unsplash.jpg'
 import solomonIslands from './images/andrew-svk-FT7uhP_jtOo-unsplash.jpg'
 import hawaii from './images/christian-joudrey-DuD5D3lWC3c-unsplash.jpg'
 import hobbiton from './images/mike-swigunski-CppuxXh6nxE-unsplash.jpg'
 import grandCanyon from './images/tom-gainor-ICXB0_EV0KY-unsplash.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
var menu = ['PARIS', 'FUJI', ' ISLANDS', 'HAWAII', 'HOBBITON', 'GRAND CANYON']
const Hero =()=>{
  return(
    <div className='hero'>
    <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
        bulletClass:'swiper-bullet',
        bulletActiveClass:'swiper-bullet-active'
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={paris} alt='tile'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={fuji} alt='tile'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={solomonIslands} alt='tile'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hawaii} alt='tile'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hobbiton} alt='tile'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={grandCanyon} alt='tile'></img>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}
export default Hero