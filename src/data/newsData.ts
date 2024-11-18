import img_20240301 from '../images/news/20240301.jpg'
import img_20240715 from '../images/news/20240715.jpg'
import img_20240901 from '../images/news/20240901.jpg'
import img_20240913 from '../images/news/20240913.jpg'
import img_20240919 from '../images/news/20240919.jpg'
import img_20240618 from '../images/news/20240618.jpg'
import img_20241030 from '../images/news/20241030.jpg'

export interface NewsItem {
  title: string
  imageSrc: string
  date: string
  content: {
    enUS: string[]
    koKR: string[]
  }
  link?: string
}

export interface NewsData {
  news: NewsItem[]
}

export const newsData: NewsData = {
  news: [
    {
      title: 'Dr. Seok\'s Appointment',
      imageSrc: img_20240301,
      date: '2024-03-01',
      content: {
        enUS: [
          'Dr. Seok has been appointed as a tenured track assistant professor in the Department of Architectural Engineering at Gachon University, South Korea, since March 1, 2024.',
        ],
        koKR: [
          '석승욱 박사가 2024년 3월 1일부로 한국 가천대학교 건축공학과에 전임 조교수로 임용되었습니다.',
        ]
      },
      link: 'https://www.gachon.ac.kr/conen/6120/subview.do'
    },
    {
      title: 'Co-PI Award for Carbon-Sequestering Concrete Research Project',
      imageSrc: img_20240715,
      date: '2024-07-15',
      content: {
        enUS: [
          `On July 2024, Dr. Seok, as a Co-PI, was awarded the Global Basic Research Lab Research Grant (No. RS-2024-00408370) from Korea\'s Ministry of Science and ICT.`,
          `The title of the awarded research project is "Development of Carbon-Sequestering Concrete Using Biochar-Based Graphene and Its Application in Structural Components.`,
          `Our BRL team (PI: Dr. Wonchang Choi @ Gachon Univ.; Co-PIs: Dr. Soo-Yeon Seo @ KNUT Univ., Dr. Chan Ho Park @ Gachon Univ., and Dr. Seungwook Seok @ Gachon Univ.) will receive research funds of approximately 1.05 million US dollars from August 2024 to April 2027.`,
          `Congratulations!`
        ],
        koKR: [
          `2024년 7월, 석승욱 박사가 공동연구책임자로서 한국 과학기술정보통신부 주관의 글로벌 기초연구실 연구과제(No. RS-2024-00408370)에 선정되었습니다.`,
          `수여된 연구과제의 제목은 "바이오차 기반 그래핀을 활용한 탄소격리 콘크리트 개발 및 구조부재 활용"입니다.`,
          `우리 기초연구실 팀(연구책임자: 가천대 최원창 교수, 공동연구책임자: 한국교통대 서수연 교수, 가천대 박찬호 교수, 가천대 석승욱 교수)은 약 3년(2024년 8월 ~ 2027년 4월)동안 13.75억원의 연구비를 지원받을 예정입니다.`,
          `축하합니다!`
        ]
      }
    },
    {
      title: 'Welcome New Members to 3SLab',
      imageSrc: img_20240901,
      date: '2024-09-01',
      content: {
        enUS: [
          `Since September 2024, two undergraudate students, Mr. Gunwoo Jung and Ms. Yujin Kim, have joined our 3SLab. as the undergraudate researchers.`,
          `We look forward to the enthusiastic research contributions of these two undergraduate students in the future.`,
          `Welcome :)`
        ],
        koKR: [
          `2024년 9월부터, 두 명의 학부생 정건우 군과 김유진 양이 학부 연구원으로 우리 3SLab에 합류했습니다.`,
          `앞으로 이 두 학부생의 열정적인 연구 기여를 기대합니다.`,
          `환영합니다 :)`
        ]
      }
    },
    {
      title: 'KICT Researchers Visit 3SLab for Space Habitat Discussions',
      imageSrc: img_20240913,
      date: '2024-09-13',
      content: {
        enUS: [
          `On September 13, 2024, Researchers from KICT (Korea Institute of Civil Engineering and Building Technology), Dr. Joon-Soo Chung, Dr. Han-Saem Kim, and Ms. Hyun-jee Lee, visited the 3SLab to discuss the current research progress on the manned space habitat systems. `
        ],
        koKR: [
          `2024년 9월 13일, 한국건설기술연구원의 정준수 박사님, 김한샘 박사님, 그리고 이현지 전임 연구원님이 3SLab을 방문해 유인우주기지 건설에 관한 연구 진행상황에 대해 논의했습니다.`
        ]
      }
    },
    {
      title: 'BRL Team Kickoff Meeting at Gachon University',
      imageSrc: img_20240919,
      date: '2024-09-19',
      content: {
        enUS: [
          `On September 19, 2024, our BRL team held a kickoff meeting at Gachon University.`,
          `About 20 researchers, including Dr. Wonchang Choi, the team leader, attended the meeting and discussed future short-term and long-term research plans and collaboration plans.`
        ],
        koKR: [
          `2024년 9월 19일, 우리 BRL 연구 그룹의 킥오프 미팅이 가천대에서 열렸습니다.`,
          `그룹의 PI인 최원창 교수님을 포함한 약 20명의 연구진들이 미팅에 참석하여, 향후 장/단기 연구계획과 협업계획에 대한 논의를 하였습니다.`
        ]
      }
    },
    {
      title: 'Presentation at the KICT',
      imageSrc: img_20240618,
      date: '2024-06-18',
      content: {
        enUS: [
          `On June 18, 2024, Dr. Seok gave a presentation at the Korea Institute of Civil Engineering (KICT), entitled "Development of extraterrestrial habitat."`,
          `The left is a photo of Dr. Seok and KICT researchers in front of the Dusty Thermal Vacuum Chamber (DTVC) in KICT.`
        ],
        koKR: [
          `2024년 6월 18일, 석승욱 박사는 건설기술연구원에서 "외계 서식지 개발"이라는 제목으로 프레젠테이션을 했습니다.`,
          `왼쪽은 건설기술연구원의 지반열진공챔버 앞에 선 석승욱 박사와 건설기술연구원분들의 사진입니다.`
        ]
      }
    },
    {
      title: 'Vibration evaluation of Korea-4GSR',
      imageSrc: img_20241030,
      date: '2024-10-30',
      content: {
        enUS: [
          `On October 30, Dr. Seok presented the results of the vibration evaluation for the Multipurpose Synchrotron Radiation Accelerator (Korea-4GSR), which is planned to be constructed in Ochang, Cheongju, Chungcheongbuk-do, to the project team.`
        ],
        koKR: [
          `10월 30일, 석승욱 박사가 충청북도 청주시 오창에 건설될 4세대 다목적 방사광가속기 진동평가 결과를 사업단에 발표 보고하였습니다.`
        ]
      }
    },
  ]
}
