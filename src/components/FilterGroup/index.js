import { EmploymentLabelHeading, EmploymentListContainer, EmploymentListInput, EmploymentListItem, EmploymentTypeContainer, EmploymentTypeText, FilterGroupContainer } from "./styledComponents"

const employmentTypeList = [
    {
        label: 'Full-time',
        employmentTypeId: 'Full-time'
    },
    {
        label: 'Part-time',
        employmentTypeId: 'Part-time'
    },
    {
        label: 'Internship',
        employmentTypeId: 'Internship'
    }
]

const locationList = [
  {
    locationId: 'Remote',
    label: 'Remote',
  },
  {
    locationId: 'Hyderabad',
    label: 'Hyderabad',
  },
  {
    locationId: 'Pune',
    label: 'Pune',
  },
  {
    locationId: 'Bengaluru',
    label: 'Bengaluru',
  },
  {
    locationId: 'Noida',
    label: 'Noida'
  }
]

const FilterGroup = props => {
    const {activeEmploymentTypeIdList, activeLocationIdList, onChangeActiveEmploymentType, onChangeLocation} = props

    const onChangeEmployment = event => {
        const activeEmploymentId = event.target.value
        onChangeActiveEmploymentType(activeEmploymentId)
    }
    const onChangeLocationId = event=> onChangeLocation(event.target.value)

    return (
        <FilterGroupContainer>
            <EmploymentTypeContainer>
                <EmploymentTypeText>Type of Employement</EmploymentTypeText>
                <EmploymentListContainer>
                    {employmentTypeList.map(eachType => (
                        <EmploymentListItem key={eachType.employmentTypeId}>
                            <EmploymentListInput 
                                type="checkbox" 
                                value={eachType.employmentTypeId}
                                checked={activeEmploymentTypeIdList.includes(eachType.employmentTypeId)}
                                onChange={onChangeEmployment} 
                            />
                            <EmploymentLabelHeading>{eachType.label}</EmploymentLabelHeading>
                        </EmploymentListItem>
                    ))}
                </EmploymentListContainer>
            </EmploymentTypeContainer>
            <EmploymentTypeContainer>
                <EmploymentTypeText>Location</EmploymentTypeText>
                <EmploymentListContainer>
                    {locationList.map(eachRange => (
                        <EmploymentListItem key={eachRange.locationId}>
                            <EmploymentListInput 
                                type="checkbox" 
                                value={eachRange.locationId} 
                                checked={activeLocationIdList.includes(eachRange.locationId)}
                                onChange={onChangeLocationId} 
                            />
                            <EmploymentLabelHeading>{eachRange.label}</EmploymentLabelHeading>
                        </EmploymentListItem>
                    ))}
                </EmploymentListContainer>
            </EmploymentTypeContainer>
        </FilterGroupContainer>
    )
}

export default FilterGroup