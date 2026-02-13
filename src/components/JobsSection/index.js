import { CiSearch } from "react-icons/ci";
import JobCard from '../JobCard'

import { JobsListContainer, JobsListDetailsContainer, JobsSectionBgContainer, JobsSectionContainer, SearchIconButton, SearchInputContainer, SearchInputText } from "./styledComponents"
import FilterGroup from "../FilterGroup";
import Header from "../Header";
import { useState } from "react";

const jobs = [
    {
        id: 1,
        title: 'Frontend Intern',
        company: 'ACME Corp',
        location: 'Remote',
        type: 'Internship',
        salary: '3.5LPA',
        description: 'Work closely with the frontend team to implement UI components using React and assist in testing.'
    },
    {
        id: 2,
        title: 'Web Developer',
        company: 'Tech Solutions',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '4.5LPA',
        description: 'Develop and maintain web applications using modern JavaScript frameworks. Collabrate with designers and backend Engineers.'
    },
    {
        id: 3,
        title: 'Backend Engineer',
        company: 'CodeWorks',
        location: 'Pune',
        type: 'Full-time',
        salary: '7.5LPA',
        description: 'Design and build backend APIs , implement database solutions and improve application performance.'
    },
    {
        id: 4,
        title: 'UI/UX Intern',
        company: 'DesignHub',
        location: 'Bengaluru',
        type: 'Part-time',
        salary: '3LPA',
        description: 'Assist in creating wireframes, mockups and user flows while learning from senior UI/UX designers.'
    },
    {
        id: 5,
        title: "React Developer",
        company: 'InnovateX',
        location: 'Noida',
        type: 'Full-time',
        salary: '9LPA',
        description: 'Build high performance user interfaces using React, optimize components and write clean testable code.'
    }
]

const JobsSection = () => {
    const [activeEmploymentTypeIdList, setActiveEmploymentTypeIdList] = useState([])
    const [activeLocationIdList, setActiveLocationIdList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [activeSearchValue, setActiveSearchValue] = useState('')

    const onChangeLocation = location => {
        if (activeLocationIdList.includes(location)) {
            setActiveLocationIdList(prevState => prevState.filter(eachItem =>
                eachItem !== location
            ))
        } else {
            setActiveLocationIdList(prevState => [...prevState, location])
        }
    }

    const onChangeSearchInput = event => setSearchInput(event.target.value)

    const onClickSearchButton = () => setActiveSearchValue(searchInput)

    const onChangeActiveEmploymentType = employmentId => {
        if (activeEmploymentTypeIdList.includes(employmentId)) {
            setActiveEmploymentTypeIdList(prevState => prevState.filter(eachItem =>
                eachItem !== employmentId
            ))
        } else {
            setActiveEmploymentTypeIdList(prevState => [...prevState, employmentId])
        }
    }

    const getFilteredJobs = () => {
        return jobs.filter(eachJob => {
            const matchEmploymentTypes = 
            activeEmploymentTypeIdList.length === 0 ||
            activeEmploymentTypeIdList.includes(eachJob.type)

            const matchesLocation = 
            activeLocationIdList.length === 0 ||
            activeLocationIdList.includes(eachJob.location)

            const searchText = activeSearchValue.toLowerCase()
            const matchesSearch = searchText === "" ||
            eachJob.title.toLowerCase().includes(searchText)

            return matchEmploymentTypes && matchesLocation && matchesSearch
        })
        .sort((a, b) => {
            const titleA = a.title.toLowerCase()
            const titleB = a.title.toLowerCase()

            if (titleA < titleB) return -1
            if (titleA > titleB) return 1
            return 0
        })
    }

    const filteredJobs = getFilteredJobs()


    const highlightText = (text, highlight) => {
        if (!highlight) return text

        const search = highlight.trim()
        if (search === "") return text

        const regex = new RegExp(`(${search})`, 'gi')
        const parts = text.split(regex)

        return parts.map((part, index) => 
            regex.test(part) ? (
                <span key={index} style={{backgroundColor: '#ee4848'}}>
                    {part}
                </span>
            ) : (
                part
            )
        )
    }

    return (
        <JobsSectionBgContainer>
            <Header />
            <JobsSectionContainer>
                <FilterGroup 
                    activeEmploymentTypeIdList={activeEmploymentTypeIdList}
                    activeLocationIdList={activeLocationIdList} 
                    onChangeActiveEmploymentType={onChangeActiveEmploymentType}
                    onChangeLocation={onChangeLocation}
                />
                <JobsListContainer>
                    <SearchInputContainer>
                        <SearchInputText type="search" placeholder="Search" value={searchInput} onChange={onChangeSearchInput} />
                        <SearchIconButton type="button" onClick={onClickSearchButton}>
                            <CiSearch size={30} />
                        </SearchIconButton>
                    </SearchInputContainer>
                    <JobsListDetailsContainer>
                        {filteredJobs.map(eachJob => 
                            <JobCard jobDetails={eachJob} highlightText={highlightText} activeSearchValue={activeSearchValue} key={eachJob.id} />
                        )}
                    </JobsListDetailsContainer>
                </JobsListContainer>
            </JobsSectionContainer>
        </JobsSectionBgContainer>
    )
}

export default JobsSection