
  import React from 'react';
  import Swiper from 'react-id-swiper';
  import Card from '../Card/Card';

  const CoverflowEffect = (props) => {
    const {news} = props;

    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    return (
      <Swiper {...params}>
         {news.map((article,idx) => {
        return <div className='swiper-slide'><Card key={idx} article={article} /></div>;
    })}
        {/* <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/1)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/2)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/3)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/4)"></div>
        <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/5)"></div> */}
      </Swiper>
    )
  };

  export default CoverflowEffect;
    