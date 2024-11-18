import React from 'react'
import { FaPhone, FaEnvelope, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa'
import IconWithTooltip from './IconWithTooltip'
import SnsIcons from './SnsIcons'
import investigatorImage from '../images/investigator-image-1.jpg'
import { investigatorData } from '../data/investigatorData'

export default function InvestigatorInfo() {
  const {
    title,
    department,
    university,
    phone,
    email,
    officeNumber,
    officeLocation,
    snsLinks,
  } = investigatorData

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
      <div className="w-52 h-52 md:w-52 md:h-52 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={investigatorImage}
          alt="Seungwook Seok"
          className="object-cover w-full h-full rounded-full"
        />
      </div>

      <div className="flex-grow space-y-2 text-gray-200">
        <h4 className="text-2xl font-bold text-highlight2">{title}</h4>
        <p>{department}</p>
        <p>{university}</p>

        <div className="flex items-center space-x-2">
          <IconWithTooltip
            icon={<FaPhone />}
            label="Call"
            link={`tel:${phone}`}
            iconColor="text-highlight2"
            tooltipPosition="left"
          />
          <p>{phone}</p>
        </div>

        <div className="flex items-center space-x-2">
          <IconWithTooltip
            icon={<FaEnvelope />}
            label="Email"
            link={`mailto:${email}`}
            iconColor="text-highlight2"
            tooltipPosition="left"
          />
          <p>{email}</p>
        </div>

        <div className="flex items-center space-x-2">
          <IconWithTooltip
            icon={<FaBuilding />}
            label="Room Number"
            iconColor="text-highlight2"
            tooltipPosition="left"
          />
          <p className="font-bold">{officeNumber}</p>
        </div>

        <div className="flex items-center space-x-2">
          <IconWithTooltip
            icon={<FaMapMarkerAlt />}
            label="Office Location"
            iconColor="text-highlight2"
            tooltipPosition="left"
          />
          <p>{officeLocation}</p>
        </div>

        <div className="flex justify-end"> {/* SNS 아이콘을 우측 정렬 */}
          <SnsIcons sns={snsLinks} iconColor="text-highlight2" showPlaceholder={true} />
        </div>
      </div>
    </div>
  )
}
