import { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [value, setValue] = useState('0');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value || value === '0') {
      setParagraphs([]);
    } else {
      let newParagraphs = [];
      while (newParagraphs.length < parseInt(value)) {
        newParagraphs.push(
          data.slice(0, parseInt(value)).sort(() => 0.5 - Math.random())
        );
      }
      newParagraphs = newParagraphs
        .flat()
        .slice(0, newParagraphs.flat().length / data.length);
      setParagraphs(newParagraphs);
    }
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={onSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
