import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <SContainer>
            <Stitle>-Styled Components-</Stitle>
            <SButton>FIGHT!!!</SButton>
        </SContainer>
    )
}

const SContainer = styled.div`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
`

const Stitle = styled.p`
        margin: 0;
        color: #3d84a8;
`

const SButton = styled.button`
        background-color: green;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover {
                background-color: #c6ffe2;
                color: #fff;
                cursor: pointer;
        }
`;
