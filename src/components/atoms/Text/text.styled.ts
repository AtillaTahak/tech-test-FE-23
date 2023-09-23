import styled from "styled-components"


const StyledTextP = styled.p<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.body};
    font-family: ${props => props.theme.fonts.primary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
`;
const StyledTextH1 = styled.h1<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h1};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primaryText : props.color};
`;

const StyledTextH2 = styled.h2<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h2};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;

const StyledTextH3 = styled.h3<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h3};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.8px;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;

const StyledTextH4 = styled.h4<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h4};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;


const StyledTextH5 = styled.h5<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h5};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;


const StyledTextH6 = styled.h6<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.h6};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;


const StyledTextHSpan = styled.span<{ $primary?: boolean }>`
    font-size: ${props => props.theme.sizes.span};
    font-family: ${props => props.$primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
    margin: 0;
    color: ${props => props.$primary ? props.theme.colors.primary : props.color};
`;




export {StyledTextP ,StyledTextH1 ,StyledTextH2 ,StyledTextH3 ,StyledTextH4 ,StyledTextH5 ,StyledTextH6, StyledTextHSpan };