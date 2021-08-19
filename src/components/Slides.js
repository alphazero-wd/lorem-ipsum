import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Slides = ({ people, currentIndex, nextSlide, prevSlide }) => {
  return (
    <div className="section-center">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        let className = 'next-slide';
        if (currentIndex === index) {
          className = 'active-slide';
        }
        if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === people.length - 1)
        ) {
          className = 'last-slide';
        }
        return (
          <article key={id} className={className}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <div className="next" onClick={nextSlide}>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Slides;