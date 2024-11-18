export const investigatorData = {
  name: "Seungwook Seok",
  title: "Assistant Professor",
  department: "Department of Architectural Engineering",
  university: "Gachon University",
  phone: "+82-31-750-5718",
  email: "sseok@gachon.ac.kr",
  officeNumber: "Room 415B, Engineering Building #1",
  officeLocation: "1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do",
  snsLinks: {
    googleScholar: "https://scholar.google.com/citations?user=lWHOGeMAAAAJ",
    github: "https://github.com/seungwookseok",
    linkedin: "https://www.linkedin.com/in/seungwook-seok-b7b83185/"
  },
}

export interface Education {
  degree: string
  institution: string
  location: string
  date: string
  thesis?: string
  dissertation?: string
  advisors?: string[]
}

export interface Employment {
  title: string
  department?: string
  institution?: string
  company?: string
  location: string
  start_date: string
  end_date: string
}

export const educationData: Education[] = [
  {
    degree: "Ph.D. Civil Engineering (Structures)",
    institution: "Purdue University",
    location: "West Lafayette, IN, USA",
    date: "2019-12",
    dissertation: "Finite Element Modeling of Bond-Zone Behavior in Reinforced Concrete",
    advisors: ["Prof. Julio A. Ramirez", "Prof. Ghadir Haikal"]
  },
  {
    degree: "M.S. Architectural Engineering (Structures)",
    institution: "Hanyang University",
    location: "Seoul, Republic of Korea",
    date: "2012-02",
    thesis: "An Efficient Procedure for Selecting and Scaling Ground Motions for Response History Analysis",
    advisors: ["Prof. Sang-Whan Han"]
  },
  {
    degree: "B.S. Architectural Engineering",
    institution: "Hanyang University",
    location: "Seoul, Republic of Korea",
    date: "2010-02"
  }
]

export const employmentData: Employment[] = [
  {
    title: "Assistant Professor",
    department: "Architectural Engineering",
    institution: "Gachon University",
    location: "Seongnam, Republic of Korea",
    start_date: "2024-03",
    end_date: "Present"
  },
  {
    title: "Research Assistant Professor",
    department: "Architectural Engineering",
    institution: "Hanyang University",
    location: "Seoul, Republic of Korea",
    start_date: "2021-09",
    end_date: "2024-02"
  },
  {
    title: "Postdoctoral Research Fellow",
    department: "Civil & Environmental Engineering",
    institution: "University of Connecticut",
    location: "Storrs, CT, USA",
    start_date: "2019-12",
    end_date: "2021-08"
  },
  {
    title: "Research Engineer / Structural Designer",
    company: "Hyundai Heavy Industries Co. Ltd. (HHI)",
    location: "Ulsan, Republic of Korea",
    start_date: "2012-07",
    end_date: "2014-05"
  }
]

export interface HonorsAndAward {
  year: string,
  title: string,
  institution: string
}

export const honorsAndAwards: HonorsAndAward[] = [
  {
    year: "2018",
    title: "Goldberg Fellowship",
    institution: "Purdue University"
  },
  {
    year: "2015",
    title: "Purdue Research Foundation (PRF) Fellowship",
    institution: "Purdue University"
  },
  {
    year: "2011",
    title: "Superior Presentation Winner",
    institution: "Architectural Institute of Korea (AIK) Autumn Conference"
  },
  {
    year: "2010-2011",
    title: "Brain-Korea 21 Fellowship",
    institution: "National Research Foundation of Korea (NRF)"
  },
  {
    year: "2010-2012",
    title: "Science Technology Scholarship",
    institution: "Hanyang University – Full tuition for graduate study"
  },
  {
    year: "2009",
    title: "Award of the Presidency: Excellence on Graduation Thesis",
    institution: "Hanyang University"
  },
  {
    year: "2003-2010",
    title: "National Science and Engineering Undergraduate Scholarship",
    institution: "Korea Student Aid Foundation (KOSAF) – Full tuition for undergraduate study"
  }
]
