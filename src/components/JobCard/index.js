import { IoLocation } from "react-icons/io5";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { CompanyContainer, CompanyDetailsText, EmploymentDetailsContainer, JobCardContainer, JobDescriptionText, LocationContainer, LocationDetailsIconContainer, LocationDetailsText, SalaryDetailsText } from "./styledComponents";

const JobCard = props => {
    const {jobDetails, highlightText, activeSearchValue} = props
    const {title, company, location, type, salary, description} = jobDetails

    return (
        <JobCardContainer>
            <CompanyContainer>
                <CompanyDetailsText>{highlightText(title, activeSearchValue)}</CompanyDetailsText>
                <CompanyDetailsText>{company}</CompanyDetailsText>
            </CompanyContainer>
            <EmploymentDetailsContainer>
                <LocationContainer>
                    <LocationDetailsIconContainer>
                        <IoLocation color="#ffffff" size={20} />
                        <LocationDetailsText>{location}</LocationDetailsText>
                    </LocationDetailsIconContainer>
                    <LocationDetailsIconContainer>
                        <BsFillBriefcaseFill color="#ffffff" size={20} />
                        <LocationDetailsText>{type}</LocationDetailsText>
                    </LocationDetailsIconContainer>
                </LocationContainer>
                <SalaryDetailsText>{salary}</SalaryDetailsText>
            </EmploymentDetailsContainer>
            <JobDescriptionText>{description}</JobDescriptionText>
        </JobCardContainer>
    )
}

export default JobCard