import styled from 'styled-components';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';

import { NavLinks } from '../data';

const Navbar = () => {
  return (
    <nav>
      <Header className='flex'>
        <div>
          <Logo href='/' className='flex'>
            <h1>
              <MdOutlineTravelExplore className='icon' /> Travel.
            </h1>
          </Logo>
        </div>
        <FullNavLinks>
          <NavLists className='flex'>
            {NavLinks.map((link) => {
              return (
                <NavItem key={link.id}>
                  <NavLinka href={link.link}>{link.name}</NavLinka>
                </NavItem>
              );
            })}
            <Button className='btn'>
              <a href='/'>BOOK NOW</a>
            </Button>
          </NavLists>
          <CloseBtn>
            <AiFillCloseCircle className='icon' />
          </CloseBtn>
        </FullNavLinks>
        <div>
          <AiOutlineMenuFold className='icon' />
        </div>
      </Header>
    </nav>
  );
};

export default Navbar;

const Header = styled.header`
  position: fixed;
  justify-content: center;
  background: var(--WhiteColorDeam);
  width: 100%;
  padding: 1rem;
  z-index: 1;
`;
const Logo = styled.a`
  color: var(--BlackColor);
`;

const FullNavLinks = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    background: var(--WhiteColorDeam);
    height: max-content;
    width: 80%;
    border-radius: 1rem;
    top: 6rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
    transition: all 0.3s ease-in-out;
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
