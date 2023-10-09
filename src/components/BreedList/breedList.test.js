import { render, fireEvent } from '@testing-library/react';
import BreedList from './BreedList';

describe('BreedList', () => {
  it('renders a list of breeds', () => {
    const breedList = ['Breed1', 'Breed2', 'Breed3'];
    const { getByText } = render(<BreedList breedList={breedList} />);
    
    breedList.forEach((breed) => {
      expect(getByText(breed)).toBeInTheDocument();
    });
  });

  it('displays a message when no breed is selected', () => {
    const breedList = ['Breed1', 'Breed2', 'Breed3'];
    const { getByText } = render(<BreedList breedList={breedList} />);
    
    const message = 'Select a breed to see the random dog image.';
    expect(getByText(message)).toBeInTheDocument();
  });

});
