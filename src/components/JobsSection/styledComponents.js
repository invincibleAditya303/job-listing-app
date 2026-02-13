import styled from "styled-components";

export const JobsSectionBgContainer = styled.div`
    width: 100vw;
`

export const JobsSectionContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    background-color: #000000;
    display: flex;

    @media (width <= 776px) {
        flex-direction: column;
    }
`

export const JobsListContainer = styled.div`
    width: 80%;

    @media (width <= 776px) {
        width: 100%;
    }
`

export const SearchInputContainer = styled.div`
    width: 50%;
    height: 8vh;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 2px #cbd5e1 solid;
    margin-left: 15px;
    margin-top: 20px;
    margin-bottom: 15px;

    @media (width <= 776px) {
        height: 5vh;
    }
`

export const SearchInputText = styled.input`
    width: 90%;
    height: 100%;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";
    padding-left: 10px;
    border-width: 0px;
    outline: none;

    @media (width <= 776px) {
        width: 85%;
        font-szie: 12px;
    }
`

export const SearchIconButton = styled.button`
    width: 10%;
    height: 100%;
    background-color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 15%;
    }
`

export const JobsListDetailsContainer = styled.ul`
    padding-left: 0px;
    margin-left: 15px;
`