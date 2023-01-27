import { sub } from 'date-fns';
//

// ----------------------------------------------------------------------

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  image: {
    cover: (filename) => `/assets/images/home/${filename}`,
    feed: (filename) => `/assets/images/home/${filename}`,
    product: (filename) => `/assets/images/home/${filename}`,
    avatar: (filename) => `/assets/images/home/${filename}`,
  },
  video: {
    cover: (filename) => `/assets/home/${filename}`,
    feed: (filename) => `/assets/home/${filename}`,
    product: (filename) => `/assets/home/${filename}`,
    avatar: (filename) => `/assets/home/${filename}`,
  },
};

export default _mock;
