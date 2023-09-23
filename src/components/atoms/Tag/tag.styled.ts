import styled from "styled-components";


export const StyledTag = styled.span<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.span};
    font-family: ${props => props.theme.fonts.primary};
    min-height: 32px;
    min-width: 16px;
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
    background-color: ${props => props.$primary ? props.theme.colors.primary : props.color};
    border: none;
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    cursor: ${props => props.$primary ? "pointer" : "default"};
    &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
    }
`;