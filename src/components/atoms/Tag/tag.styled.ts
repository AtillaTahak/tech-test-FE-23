import styled from "styled-components";


export const StyledTag = styled.span<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.span};
    font-family: ${props => props.theme.fonts.primary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
    background-color: ${props => props.$primary ? props.theme.colors.primary : props.color};
    border: none;
    border-radius: 0.375rem;
    padding: 0.125rem 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
    }
`;