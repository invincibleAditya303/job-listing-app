import styled from "styled-components";

export const FilterGroupContainer = styled.div`
    width: 20%;

    @media (width <= 776px) {
        width: 95%;
        display: flex;
        align-items: center;
        margin-left: 2.5%;
        border-bottom: 2px #64748b solid;
    }
`

export const EmploymentTypeContainer = styled.div`
    width: 95%;
    border-bottom: 2px #64748b solid;
    margin-left: 5%;

    @media (width <= 776px) {
        width: 30%;
        margin-top: 3%;
        border-width: 0px;
    }
`

export const EmploymentTypeText = styled.p`
    color: #ffffff;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500;

    @media (width <= 776px) {
        font-size: 12px;
    }
`

export const EmploymentListContainer = styled.ul`
    padding-left: 0px;
`

export const EmploymentListItem = styled.li`
    width: 95%;
    display: flex;
    align-items: center
    margin-left: 5%;
    margin-bottom: 5%;
    list-style-type: none;
`

export const EmploymentListInput = styled.input`
    background-color: transparent;
`

export const EmploymentLabelHeading = styled.label`
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";

    @media (width <= 776px) {
        font-size: 10px;
    }
`