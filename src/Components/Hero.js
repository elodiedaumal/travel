import styled, { css } from 'styled-components';
import VideoHero from '../assets/video1.mp4';
import { ImLocation } from 'react-icons/im';
import { HiFilter } from 'react-icons/hi';

const Hero = () => {
  return (
    <Section>
      <Overlay></Overlay>
      <Video src={VideoHero} muted autoPlay loop type='video/mp4'></Video>
      <Content className='container'>
        <Text>
          <p>Our Packages</p>
          <h1>Search your Holiday</h1>
        </Text>
        <Card className='grid'>
          <div>
            <label htmlFor='city'>Search your destination:</label>
            <Input className='flex'>
              <input type='text' placeholder='Enter destination...' />
              <ImLocation className='icon' />
            </Input>
          </div>
          <div>
            <label htmlFor='dateInput'>Select date:</label>
            <Input className='flex'>
              <input type='date' placeholder='Enter destination...' />
            </Input>
          </div>
          <div>
            <Total>
              <TotalLabel className='flex'>
                <label htmlFor='price'>Max Price:</label>
                <h3>$5000</h3>
              </TotalLabel>
              <Input className='flex'>
                <input type='range' max='5000' min='1000' />
              </Input>
            </Total>
          </div>
          <Button className='flex btn'>
            <HiFilter className='icon' />
            <p>MORE FILTERS</p>
          </Button>
        </Card>
      </Content>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(47, 106, 127);
  top: 0rem;
  bottom: 0;
  mix-blend-mode: hard-light;
  z-index: 1;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
  height: max-content;
  padding: 8rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: auto;
  color: var(--WhiteColor);
  z-index: 50;
`;
const Text = styled.div`
  padding: 2rem 0;

  p {
    font-size: 13px;
    text-transform: uppercase;
  }
  h1 {
    position: relative;
    font-size: 1.8rem;
  }
`;

const Card = styled.div`
  z-index: 50;
  position: relative;
  padding: 2rem 1rem 0 1rem;
  background: var(--WhiteColor);
  border-radius: 10px;
  gap: 1rem;
  color: var(--TextColor);
  width: 80%;
  margin: auto;
  label {
    display: block;
    color: var(--TextColor);
    padding-bottom: 10px;
    font-weight: 500;
  }
`;

const Input = styled.div`
  height: 40px;
  padding: 0 1rem;
  background: var(--InputColor);
  border-radius: 3rem;

  input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 13px;
    color: var(--TextColor);
    ::placeholder {
      font-size: 13px;
    }
  }
  .icon {
    font-size: 18px;
    color: var(--PrimaryColor);
    margin-left: 10px;
  }
`;

const Total = styled.div`
  h3 {
    color: var(--TextColor);
    font-size: 18px;
  }
`;
const TotalLabel = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  justify-self: center;
  width: 70%;
  font-size: 13px;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: -15px;
  .icon {
    font-size: 13px;
  }
`;
