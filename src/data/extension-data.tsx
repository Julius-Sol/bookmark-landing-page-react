import chromeImage from '../assets/logo-chrome.svg'
import fireFoxImage from '../assets/logo-firefox.svg'
import operaImage from '../assets/logo-opera.svg'

const extension = [
  {
    title: 'Add to Chrome',
    subTitle:'Minimum version 62',
    buttonText: 'Add & Install Extension',
    image:chromeImage,
  },
  {
    title: 'Add to Firefox',
    subTitle:'Minimum version 55',
    buttonText: 'Add & Install Extension',
    image: fireFoxImage,
  },
  {
    title: 'Add to Opera',
    subTitle:'Minimum version 46',
    buttonText: 'Add & Install Extension',
    image: operaImage,
  },
]

export default extension;