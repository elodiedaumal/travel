import styled from 'styled-components';
import { HardCodeTravel } from '../data';
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from 'react-icons/hi';

const MainHome = () => {
  return (
    <Section className='container section'>
      <SectionTitle>
        <h3>Most visited Destinations</h3>
      </SectionTitle>
      <CardContent className='grid'>
        {HardCodeTravel.map(
          ({ id, title, location, grade, fees, description, img }) => {
            return (
              <SingleCard key={id}>
                <Image>
                  <img src={img} alt={title} />
                </Image>
                <TextCard>
                  <h4>{title}</h4>
                  <Location className='flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <p>{location}</p>
                  </Location>
                  <CardPrice className='flex'>
                    <Grade>
                      {grade} <small> +1</small>
                    </Grade>

                    <h5>{fees}</h5>
                  </CardPrice>

                  <Description>{description}</Description>

                  <Button className='btn flex'>
                    MORE INFO <HiOutlineClipboardCheck className='icon' />
                  </Button>
                </TextCard>
              </SingleCard>
            );
          }
        )}
      </CardContent>
    </Section>
  );
};

export default MainHome;

const Section = styled.section`
  width: 100%;
`;
const SectionTitle = styled.div`
  position: relative;
  width: max-content;
  color: var(--TextColor);
  margin: 1rem 0;
  &::after {
    position: absolute;
    content: '';
    background: var(--SecondColor);
    height: 5px;
    width: 120px;
    right: 1px;
    bottom: 4px;
    z-index: -10;
  }
`;

const CardContent = styled.div`
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const SingleCard = styled.div`
  height: 100%;
  display: grid;
  row-gap: 10px;
  border-radius: 10px;
  align-items: center;
  background: var(--CardBG);
  box-shadow: 0 2px 4px rgba(140, 140, 141, 0.549);
  overflow: hidden;

  &:hover {
    background: var(--CardHover);
    box-shadow: 1 4px 4px rgba(85, 85, 114, 0.549);
    transition: 0.8s ease;
  }
`;
const Image = styled.div`
  height: 180px;
  width: 100%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 3s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
const TextCard = styled.div`
  padding: 1rem;
  color: var(--TextColor);
  h4 {
    font-size: 1.25rem;
    color: var(--BlackColor);
    text-transform: capitalize;
  }
`;
const Location = styled.div`
  gap: 0.5rem;

  .icon {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
const CardPrice = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0;
  border-top: 1.5px solid var(--GreyText);
  border-bottom: 1.5px solid var(--GreyText);
  h5 {
    color: var(--BlackColor);
    font-size: 2rem;
  }
`;
const Grade = styled.p`
  text-transform: uppercase;
  max-width: 100%;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  small {
    background: var(--GradientColor);
    border-radius: 1rem;
    padding: 0px 8px;
    font-size: 10px;
    color: var(--WhiteColor);
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 13.5px;
  font-weight: 500;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Button = styled.button`
  margin-top: 1rem;
  font-weight: 600;
  justify-content: space-between;
  gap: 0.5rem;
  .icon {
    align-self: center;
    font-size: 18px;
  }
`;
