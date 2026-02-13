import styled from "styled-components";

export const JobCardContainer = styled.div`
    width: 50%;
    min-height: 25vh;
    background-color: #202020;
    border-radius: 8px;
    list-style-type: none;
    margin-bottom: 10px;

    @media (width <= 776px) {
        width: 80%;
    }
`

export const CompanyContainer = styled.div`
    width: 90%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
`

export const CompanyDetailsText = styled.p`
    color: #ffffff;
    font-size: 28px;
    font-family: "Roboto";
    font-weight: bold;

    @media (width <= 776px) {
        font-size: 18px;
    }
`

export const EmploymentDetailsContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    border-bottom: 2px #cbd5e1 solid;
`

export const LocationContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @(width <= 776px) {
        width: 80%;
    }
`

export const LocationDetailsIconContainer = styled.div`
    min-width: 5vw;
    display: flex;
    align-items: center;

    @media (width <= 776px) {
        min-width: 12vw;
    }
`

export const LocationDetailsText = styled.p`
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 3px;

    @media (width <= 776px) {
        font-size: 10px;
    }
`

export const SalaryDetailsText = styled.p`
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 600;

    @media (width <= 776px) {
        width: 14px;
    }
`

export const JobDescriptionText = styled.p`
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding-left: 5%;
    padding-bottom: 3%;

    @media (width <= 776px) {
        font-size: 12px;
    }
`