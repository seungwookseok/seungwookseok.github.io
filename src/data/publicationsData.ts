export interface RefereedJournal {
  id: string
  authors: string
  year: number
  title: string
  journal: string
  volume?: number
  articleNumber?: string
  issue?: number
  status?: string
  link?: string
}

export const refereedJournalData: RefereedJournal[] = [
  {
    id: "J19",
    authors: "Seok, S. and Lee, J.",
    year: 2024,
    title: "Bolted connection design for cold-formed steel frames for seismic application",
    journal: "Thin-Walled Structures",
    status: "under review",
    link: "" // No available link yet
  },
  {
    id: "J18",
    authors: "Seok, S. and Kim, T.",
    year: 2024,
    title: "Analytical model for cyclic behavior of cold-formed steel bolted connection frames considering local buckling",
    journal: "Thin-Walled Structures",
    status: "under review",
    link: "" // No available link yet
  },
  {
    id: "J17",
    authors: "Suh, H., Cho, S., Im, S., Moon, J., Park, J., Lim, J., Nezhad, E. Z., Seok, S., Bae, B.I., & Bae, S.",
    year: 2024,
    title: "Characterization of thermal resistance and mechanical strength recovery of carbon nanotubes incorporated Portland cement composites subjected to heating and rehydration",
    journal: "Cement and Concrete Composites",
    volume: 146,
    articleNumber: "105361",
    link: "https://doi.org/10.1016/j.cemconcomp.2023.105361"
  },
  {
    id: "J16",
    authors: "Suh, H., Kim, G., Cho, S., Li, P., Son, D. H., Koo, D., Lim, J., Choi., C., Seok, S., and Bae, S.",
    year: 2023,
    title: "Comparative analysis of the synergistic effects of hybrid nanomaterial reinforcement in cementitious Composites",
    journal: "Construction and Building Materials",
    volume: 401,
    articleNumber: "132856",
    link: "https://doi.org/10.1016/j.conbuildmat.2023.132856"
  },
  {
    id: "J15",
    authors: "Im, S., Liu, J., Cho, S., Moon, J., Park, J., Wi, K., Seok, S., Lim, S., and Bae, S.",
    year: 2023,
    title: "Quantitative characterization of the interfacial transition zone around lightweight and normal aggregates in cement mortars",
    journal: "Construction and Building Materials",
    volume: 400,
    articleNumber: "132584",
    link: "https://doi.org/10.1016/j.conbuildmat.2023.132584"
  },
  {
    id: "J14",
    authors: "Seok, S., Shahriar, A., Montoya, A., and Malla, R. B.",
    year: 2023,
    title: "A finite element approach for simplified 2D nonlinear dynamic contact/impact analysis",
    journal: "Archive of Applied Mechanics",
    volume: 1,
    articleNumber: "1-21",
    link: "https://doi.org/10.1007/s00419-023-02451-y"
  },
  {
    id: "J13",
    authors: "Seok, S., Lee, J., & Choi, C. S.",
    year: 2023,
    title: "A computational modeling approach for cold-formed steel bolted connections exhibiting bolt slip and bearing behavior",
    journal: "Structures",
    volume: 53,
    articleNumber: "460-473",
    link: "https://doi.org/10.1016/j.istruc.2023.460473"
  },
  {
    id: "J12",
    authors: "Kim, G., Suh, H., Cho, S., Im, S., Nezhad, E. Z., Seok, S., Choi., C. S., and Bae, S.",
    year: 2022,
    title: "Synergistic strengthening mechanism of Portland cement paste reinforced by a triple hybrid of graphene oxide, functionalized carbon nanotube, and nano-silica",
    journal: "Construction and Building Materials",
    volume: 352,
    articleNumber: "129017",
    link: "https://doi.org/10.1016/j.conbuildmat.2022.129017"
  },
  {
    id: "J11",
    authors: "Cho, S., Park, J., Suh, H., Kim, G., Lim, J., Seok, S., and Bae, S.",
    year: 2023,
    title: "Effects of ultrasound-assisted sulfuric acid treatment on the decontamination of Co nuclides in cement paste simulating radioactive concrete waste",
    journal: "Construction and Building Materials",
    volume: 373,
    articleNumber: "130878",
    link: "https://doi.org/10.1016/j.conbuildmat.2023.130878"
  },
  {
    id: "J10",
    authors: "Seok, S., Lee, J., Choi, C. S., and Hwang, S.",
    year: 2022,
    title: "A practical design of cold-formed steel bolted moment connection: numerical investigation with an improved bolt slip-bearing model",
    journal: "Journal of Building Engineering",
    volume: 62,
    articleNumber: "105345",
    link: "https://doi.org/10.1016/j.jobe.2022.105345"
  },
  {
    id: "J9",
    authors: "Kim, G., Suh, H., Cho, S., Im, S., Nezhad, E. Z., Seok, S., Choi, C., and Bae, S.",
    year: 2022,
    title: "Synergistic strengthening mechanism of Portland cement paste reinforced by a triple hybrid of graphene oxide, functionalized carbon nanotube, and nano-silica",
    journal: "Construction and Building Materials",
    volume: 352,
    articleNumber: "129017",
    link: "https://doi.org/10.1016/j.conbuildmat.2022.129017"
  },
  {
    id: "J8",
    authors: "Ravazdezh, F., Seok, S., Haikal, G., and Ramirez, J. A.",
    year: 2021,
    title: "Effect of nnonstructural elements on lateral load distribution and rating of slab and T-beam bridges",
    journal: "Journal of Bridge Engineering",
    volume: 26,
    issue: 9,
    articleNumber: "04021063",
    link: "https://doi.org/10.1061/(ASCE)BE.1943-5592.0001701"
  },
  {
    id: "J7",
    authors: "Seok, S., Haikal, G., Ramirez, J. A., Lowes, L. N., and Lim, J.",
    year: 2020,
    title: "Finite element simulation of pullout behavior of concrete-reinforcement bond using concrete damage-plasticity model (CDPM2)",
    journal: "Engineering Structures",
    volume: 221,
    articleNumber: "110984",
    link: "https://doi.org/10.1016/j.engstruct.2020.110984"
  },
  {
    id: "J6",
    authors: "Park, J., Suh, H., Woo, S. M., Jeong, K., Seok, S., and Bae, S.",
    year: 2019,
    title: "Assessment of neutron shielding performance of Nano-TiO2-incorporated cement paste by Monte Carlo simulation",
    journal: "Progress in Nuclear Energy",
    volume: 117,
    articleNumber: "103043",
    link: "https://doi.org/10.1016/j.pnucene.2019.103043"
  },
  {
    id: "J5",
    authors: "Jee, H., Park, J., Zalnezhad, E., Jeong, K., Woo, S. M., Seok, S., and Bae, S.",
    year: 2019,
    title: "Characterization of titanium nanotube reinforced cementitious composites: mechanical properties, microstructure, and hydration",
    journal: "Materials",
    volume: 12,
    issue: 10,
    articleNumber: "1617",
    link: "https://doi.org/10.3390/ma12101617"
  },
  {
    id: "J4",
    authors: "Seok, S., Haikal, G., Ramirez, J. A., and Lowes, L. N.",
    year: 2018,
    title: "High-resolution finite element modeling for bond in high-strength concrete beam",
    journal: "Engineering Structures",
    volume: 173,
    articleNumber: "918-932",
    link: "https://doi.org/10.1016/j.engstruct.2018.04.021"
  },
  {
    id: "J3",
    authors: "Han, S. W., Ha, S. J., and Seok, S.",
    year: 2014,
    title: "Efficient and accurate procedure for selecting ground motions matching target response spectrum",
    journal: "Nonlinear Dynamics",
    volume: 78,
    issue: 2,
    articleNumber: "889-905",
    link: "https://doi.org/10.1007/s11071-014-1467-1"
  },
  {
    id: "J2",
    authors: "Han, S. W., and Seok, S.*",
    year: 2013,
    title: "Efficient procedure for selecting and scaling ground motions for response history analysis",
    journal: "ASCE Journal of Structural Engineering",
    volume: 140,
    issue: 1,
    articleNumber: "06013004",
    link: "https://doi.org/10.1061/(ASCE)ST.1943-541X.0000823"
  },
  {
    id: "J1",
    authors: "Moon, K. H., Han, S. W., Lee, T. S., and Seok, S.",
    year: 2012,
    title: "Approximate MPA-based method for performing incremental dynamic analysis",
    journal: "Nonlinear Dynamics",
    volume: 67,
    issue: 4,
    articleNumber: "2865-2888",
    link: "https://doi.org/10.1007/s11071-011-0125-9"
  }
];

export const refereedConferenceData = [
  {
    id: "C1",
    authors: "Seok, S., Xu, B., Dyke, S. J., and Irfanoglu, A.",
    year: 2015,
    title: "Damped hysteretic resistance identification of Bouc-Wen model using data-based model-free nonlinear approach",
    journal: "Proceedings of the 6th International Conference on Advances in Experimental Structural Engineering & 11th International Workshop on Advanced Smart Materials and Smart Structures Technology, University of Illinois, Urbana-Champaign, IL, USA",
    link: "http://sstl.cee.illinois.edu/papers/aeseancrisst15/161_Seok_Damped.pdf"
  }
]

export const refereedDOIData = [
  {
    id: "D1",
    authors: "Seok, S.",
    year: 2019,
    title: "seungwookseok/ABAQUS-version-CDPM2: First release of ABAQUS-CDPM2 (Version v1.0.0)",
    journal: "Zenodo",
    link: "http://doi.org/10.5281/zenodo.3368644"
  }
]
