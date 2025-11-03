const widgets = {
  '@apostrophecms/rich-text': {},
  '@apostrophecms/image': { className: 'image-widget' },
  '@apostrophecms/video': {},
  link: {},
  card: {},
  accordion: {},
  slideshow: {
    swiper: {
      /**
       * Override the default Swiper configuration by setting any of the
       * available Swiper parameters here. Pagination and Navigation are
       * enabled by default.
       * https://swiperjs.com/swiper-api#parameters
       */
      allowTouchMove: false
    }
  }
};

export default {
  fields: {
    add: {
      content: {
        type: 'area',
        options: { widgets }
      }
    }
  }
}