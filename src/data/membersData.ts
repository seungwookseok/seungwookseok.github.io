import yujin_kim from '../images/member/yujin_kim.jpg'
import sanghyun_park from '../images/member/sanghyun_park.jpg'

export interface SNSLinks {
  googleScholar?: string
  github?: string
  linkedin?: string
}

export interface Member {
  name: string
  course: string
  infos: string[]
  office: string
  phone: string
  email: string
  education: string[]
  imageSrc: string
  sns: SNSLinks
  topics?: string[]
}

export interface MembersData {
  members: Member[],
}

export const membersData: MembersData = {
  members: [
    {
      name: 'Sang-hyun Park',
      course: 'Graduate Student',
      infos: [
        'co-advised w/ Dr. Chang-sik Choi @ Hanyang Univ.',
        'starting in Spring 2023'
      ],
      office: '612, Science & Technology Bldg., Hanyang Univ.',
      phone: '+82-2-2220-1720',
      email: 'titifkfk@hanyang.ac.kr',
      education: [
        '(Present) master’s course in Architectural Engineering @ Hanyang Univ.',
        '(02/2023) B.Sc. in Architectural Engineering @ Seoul National Univ. of Science & Technology'
      ],
      imageSrc: sanghyun_park,
      sns: {
      },
      topics: [
       'Analysis and predictive modeling of dilation angle variations in concrete under confining pressure and volumetric changes'
      ]
    },
    {
      name: 'Yujin Kim',
      course: 'Undergraduate Researcher',
      infos: [
        'starting in Fall 2024'
      ],
      office: '408B, Engineering Building #1',
      phone: '+82-31-750-xxxx',
      email: 'qwerty526@gachon.ac.kr',
      education: [
        '(Present) bachelor’s course in Architectural Engineering @ Gachon Univ.'
      ],
      imageSrc: yujin_kim,
      sns: {
      }
    },
  ],

}
