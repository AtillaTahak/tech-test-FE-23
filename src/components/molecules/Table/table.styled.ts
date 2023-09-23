import styled from "styled-components";

export const StyledTable = styled.table`
   border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    & th, td {
        text-align: left;
        padding: 8px;
    }
    & tr:nth-child(even) {
        background-color: ${props => props.theme.colors.primary};
    }
    & th {
        background-color: ${props => props.theme.colors.primaryDark};
        color: white;
    }
`;
