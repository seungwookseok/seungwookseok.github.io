import researchImage1 from '../images/research-image-1.jpg'
import researchImage2 from '../images/research-image-2.jpg'

export interface ResearchField {
  field: string
  topics: string[]
  imageSrc: string
  imageAlt: string
}

export interface ResearchData {
  research_interests: ResearchField[]
}

export const researchData: ResearchData = {
  research_interests: [
    {
      field: 'Computational Mechanics & Modeling',
      topics: [
        'Concrete material constitutive modeling',
        'Modeling of reinforced concrete bond',
        'Bolted joint modeling',
        'Contact/Impact discretization approach'
      ],
      imageSrc: researchImage1,
      imageAlt: 'Computational Mechanics & Modeling Image'
    },
    {
      field: 'Earthquake Engineering & Structural Engineering',
      topics: [
        'Structural performance evaluation of structures',
        'Analysis and design of steel structures for earthquake resistance',
        'Ground motions'
      ],
      imageSrc: researchImage2,
      imageAlt: 'Earthquake Engineering & Structural Engineering Image'
    }
  ]
}
