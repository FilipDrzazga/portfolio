import styled from 'styled-components';

const SectionNavigation = styled.section`
    width:100%;
    height:7vh;
    padding:${({theme})=>theme.padding.small};
    `
const HeaderNavigation = styled.header`
    width:100%;
    height:100%;
    display:flex;
    `
const TitleNavigation = styled.h1`
    width:50%;
    height:100%;
    font-family:${({theme})=>theme.fontFamily.latoLight};
    font-weight:${({theme})=>theme.fontWeight.regular};
    font-size:0.7rem;
    letter-spacing:0.1rem;
    `
const NavNavigation = styled.nav`
    width:50%;
    height:100%;
    `
const UlNavigation = styled.ul`
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    gap:1rem;
    list-style:none;
    `
const LiNavigation = styled.ul`
    font-family:${({theme})=>theme.fontFamily.latoLight};
    font-weight:${({theme})=>theme.fontWeight.light};
    font-size:${({theme})=>theme.fontSize.small};
    `



export 
{   SectionNavigation,
    HeaderNavigation,
    TitleNavigation,
    NavNavigation,
    UlNavigation,
    LiNavigation
};