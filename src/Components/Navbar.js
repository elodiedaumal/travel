import styled, { css } from 'styled-components';
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
        <div>
          <ul className='flex'>
            {NavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
            <button className='btn'>
              <a href='/'>BOOK NOW</a>
            </button>
          </ul>
          <div>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
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
  z-index: 1000;
`;
const Logo = styled.a`
  color: var(--BlackColor);
`;
