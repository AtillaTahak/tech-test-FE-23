import styled from "styled-components";


export const StyledButtonSearch = styled.button<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.span};
    font-family: ${props => props.theme.fonts.primary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
    }
`;


