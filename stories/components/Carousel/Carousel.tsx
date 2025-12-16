import React from 'react';
import { Button } from '../../Button';
import './carousel.css';
export const Carousel = () => {
  const data = [{
    id: 1, title: 'Item 1', description: 'Description for Item 1',url: 'https://testing-library.com/docs/react-testing-library/intro/',
  }, {
    id: 2, title: 'Item 2', description: 'Description for Item 2'
  }, {
    id: 3, title: 'Item 3', description: 'Description for Item 3'
  }, {
    id: 4, title: 'Item 4', description: 'Description for Item 4'},
   { id: 5, title: 'Item 5', description: 'Description for Item 5'}];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  }
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  }
   // Sample data for carousel items
  return (
    <div className="carousel-container">
      <Button size="large" label={"<"} primary={true} backgroundColor={"#1ea7fd"} onClick={goToPrev} />
      {data.slice(currentIndex, currentIndex + 2).map(item => {
        if(item.url){ 
          return (
            <div key={item.id} className="carousel-item" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <h3>{item.title} <a href={item?.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>*</a></h3>
              <p>{item.description} <a href={item?.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>*</a></p>
            </div>
          )
        } else {
          return (
            <div key={item.id} className="carousel-item" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )
        }
      })}
      <Button size="large" label={">"} primary={true} backgroundColor={"#1ea7fd"} onClick={goToNext} />
      <div>
        {`Item ${currentIndex + 1} of ${data.length}`}
      </div>
    </div>
  );
}