import WaveText from '@/components/WaveText'

export const marqueeCollection = [
  <span key='wow' className='uppercase text-black mr-[2rem] white-stroke '>
    Wow,
  </span>,

  <WaveText key='now' text='Now,' className='mr-[2rem]' />,

  <span
    key='how'
    className='uppercase text-black mr-[2rem] white-stroke thin-stroke'
  >
    How,
  </span>,

  <WaveText key='now' text='Now,' className='mr-[2rem]' colorType='black' />
]

export const creativeCollection = ['Immersive', 'Creative']

export const videoCollection = [
  'https://videos.pexels.com/video-files/5008748/5008748-uhd_3840_2160_25fps.mp4',
  'https://videos.pexels.com/video-files/5008851/5008851-uhd_3840_2160_25fps.mp4',
  'https://videos.pexels.com/video-files/5009010/5009010-uhd_2160_3840_25fps.mp4',
  'https://videos.pexels.com/video-files/5009064/5009064-uhd_2160_3840_25fps.mp4',
  'https://videos.pexels.com/video-files/7686726/7686726-uhd_3840_2160_24fps.mp4'
]

export const contactTitleCollection = ['HOW DO', 'WE WORK', 'TOGETHER?']

const contactLeftCollection = [
  {
    caption: '(Connect)',
    list: [
      {
        label: 'LinkedIn',
        path: 'https://www.linkedin.com/in/dmytro-opryshkin-762463162/'
      }
    ]
  }
]

const contactRightCollection = [
  {
    caption: '(Meet up)',
    list: [
      {
        label: 'Kharkiv, UA',
        path: 'https://maps.app.goo.gl/GK5qr2VJkQtyJZU1A'
      }
    ]
  }
]

export const contactItemsCollection = [
  contactLeftCollection,
  contactRightCollection
]
