import { useState } from 'react';
import styled, { css } from 'styled-components';

import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';

import { NavLinks } from '../data';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav>
      <Header className='flex'>
        <div>
          <Logo href='/' className='flex'>
            <h1>
              <MdOutlineTravelExplore className='icon iconLogo' />
              Travel.
            </h1>
          </Logo>
        </div>
        {!sidebar ? (
          <FullNavLinks>
            <NavLists className='flex'>
              {NavLinks.map((link) => {
                return (
                  <NavItem key={link.id}>
                    <NavLinka href={link.link} onClick={handleSidebar}>
                      {link.name}
                    </NavLinka>
                  </NavItem>
                );
              })}
              <Button className='btn'>
                <a href='/'>BOOK NOW</a>
              </Button>
            </NavLists>
            <CloseBtn>
              <AiFillCloseCircle className='icon' onClick={handleSidebar} />
            </CloseBtn>
          </FullNavLinks>
        ) : (
          <FullNavLinks $show>
            <NavLists className='flex'>
              {NavLinks.map((link) => {
                return (
                  <NavItem key={link.id}>
                    <NavLinka href={link.link} onClick={handleSidebar}>
                      {link.name}
                    </NavLinka>
                  </NavItem>
                );
              })}
              <Button className='btn'>
                <a href='/'>BOOK NOW</a>
              </Button>
            </NavLists>
            <CloseBtn>
              <AiFillCloseCircle className='icon' onClick={handleSidebar} />
            </CloseBtn>
          </FullNavLinks>
        )}

        <div>
          <AiOutlineMenuFold
            className='icon menuIcon'
            onClick={handleSidebar}
          />
        </div>
      </Header>
    </nav>
  );
};

export default Navbar;

const Header = styled.header`
  position: fixed;
  justify-content: space-between;
  background: var(--WhiteColorDeam);
  width: 100%;
  padding: 1rem;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
`;
const Logo = styled.a`
  color: var(--BlackColor);
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const FullNavLinks = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    background: var(--WhiteColorDeam);
    height: max-content;
    width: 80%;
    border-radius: 1rem;
    top: -100rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 2099;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
    transition: all 1s ease-in-out;
    ${(props) =>
      props.$show &&
      css`
        top: 7rem;
      `}
  }
`;

const NavLists = styled.ul`
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: auto;
    gap: 0.5rem;
    margin-top: 3rem;
  }
`;
const NavItem = styled.li`
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;
const NavLinka = styled.a`
  @media (max-width: 768px) {
    color: var(--TextColor);
    font-size: 0.9rem;
    font-weight: 600;
    &:hover {
      color: var(--PrimaryColor);
    }
  }
`;
const CloseBtn = styled.div`
  @media (max-width: 768px) {
    color: var(--PrimaryColor);
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
  &:hover {
    color: var(--SecondaryColor);
  }
`;
const Button = styled.button`
  @media (max-width: 768px) {
    margin: 1rem 0;
    font-weight: 600;
  }
  a {
    @media (max-width: 768px) {
      font-weight: 600;
      color: var(--WhiteColor);
    }
  }
`;
