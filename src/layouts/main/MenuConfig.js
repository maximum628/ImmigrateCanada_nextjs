// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'HOME',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'SERVICES',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/services',
  },
  {
    title: 'CONTACT US',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/contact-us',
  },
  {
    title: 'ABOUT US',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/about-us',
  },
];

export default menuConfig;
