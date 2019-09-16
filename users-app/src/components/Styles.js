import styled from 'styled-components'

export const UserGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    margin: 40px 80px;
`;

export const UserCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 2px solid black;
    border-radius: 6px;
`;