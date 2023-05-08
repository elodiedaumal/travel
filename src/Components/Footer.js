import styled from 'styled-components';
import video2 from '../assets/video2.mp4';
import { BsSendFill } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTripadvisor,
  FaChevronRight,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <SectionFooter className='flex'>
      <Video>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </Video>
      <Content className='container flex'>
        <Contact className='flex'>
          <Text>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </Text>
          <Input className='flex'>
            <input type='text' placeholder='Enter Email Address' />
            <Button className='btn flex' type='submit'>
              SEND <BsSendFill className='icon' />
            </Button>
          </Input>
        </Contact>
        <FooterCard className='flex'>
          <FooterIntro className='flex'>
            <Logo>
              <a href='/' className='flex'>
                <MdOutlineTravelExplore className='icon' />
                <h3> Travel.</h3>
              </a>
            </Logo>

            <FooterDesc>
              Traveling is not only visiting a new place or seeing new spots you
              never see before, it's also a chance to know other people's
              culture and history! It gives you the chance to accept the other's
              culture and traditions and gives you the ability to adapt to the
              circumstances you live in this city with those people.
            </FooterDesc>

            <FooterSocial className='flex'>
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </FooterSocial>
          </FooterIntro>
          <FooterLinks className='grid'>
            {/* 1st group */}
            <div>
              <p>OUR AGENCY</p>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Services
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Insurance
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Tourism
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Agency
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Payment
              </FooterList>
            </div>
            {/* 2nd group */}
            <div>
              <p>PARTNERS</p>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Booking
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Tripadvisor
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Rentacar
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Hotel.com
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Trivago
              </FooterList>
            </div>
            {/* 3rd group */}
            <div>
              <p>LAST MINUTE</p>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                London
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Paris
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                San Francisco
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Sydney
              </FooterList>
              <FooterList className='flex'>
                <FaChevronRight className='icon' />
                Siem Rep
              </FooterList>
            </div>
          </FooterLinks>
        </FooterCard>
      </Content>
    </SectionFooter>
  );
};

export default Footer;

const SectionFooter = styled.footer`
  width: 100%;
  position: relative;
  padding: 2rem 0;
  justify-content: center;
  margin: auto;
`;
const Video = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  video {
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    background: rgba(10, 84, 107, 0.307);
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }
`;

const Content = styled.div`
  width: 100%;
  height: max-content;
  padding: 2rem initial;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  row-gap: 2rem;
  z-index: 10;
`;

const Contact = styled.div`
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const Text = styled.div`
  color: var(--WhiteColor);
  font-size: 1.8rem;
  small {
    font-size: 13px;
    font-weight: 400;
  }
`;
const Input = styled.div`
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  input {
    width: 100%;
    padding: 0.5rem 0.6rem;
    border-radius: 3rem;
    border: 1px solid var(--WhiteColor);
    backdrop-filter: blur(5px);
    outline: none;
    background: transparent;
    color: var(--PrimaryColor);
    &::placeholder {
      color: var(--WhiteColor);
      opacity: 0.8;
    }
  }
`;

const Button = styled.button`
  gap: 0.5rem;
  font-weight: 600;
  max-width: 200px;
  margin: auto;
  .icon {
    font-size: 18px;
  }
`;

const Logo = styled.div`
  .icon {
    font-size: 25px;
    color: var(--PrimaryColor);
    margin-right: 10px;
  }
  a {
    color: var(--BlackColor);
    font-weight: 600;
  }
`;
const FooterCard = styled.div`
  position: relative;
  padding: 1rem 1rem 4rem;
  gap: 2rem;
  border-radius: 1rem;
  background: var(--BodyColor);
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
const FooterIntro = styled.div`
  flex-basis: 50%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;
`;
const FooterDesc = styled.p`
  font-size: 13px;
  color: var(--TextColor);
`;
const FooterSocial = styled.div`
  column-gap: 0.5rem;
  margin: auto;
  color: var(--TextColor);
  .icon {
    font-size: 20px;
    &:hover {
      color: var(--PrimaryColor);
    }
  }
`;
const FooterLinks = styled.div`
  flex-basis: 50%;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  p {
    font-size: 15px;
    color: var(--BlackColor);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  li {
    font-size: 15px;
    color: var(--TextColor);
    transition: 0.3s ease-in-out;
  }
  .icon {
    font-size: 10px;
    color: var(--GreyText);
    margin-right: 3px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterList = styled.li`
  &:hover {
    color: var(--PrimaryColor);
    transform: translateX(7px);
    .icon {
      color: var(--SecondColor);
    }
  }
`;
