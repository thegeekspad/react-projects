import { useState } from 'react';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(2);
  const handleChange = (e) => {
    setSelected(Number(e.target.value));
    select(Number(e.target.value));
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          checked={selected === 1}
          onChange={handleChange}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          checked={selected === 2}
          onChange={handleChange}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          checked={selected === 3}
          onChange={handleChange}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          checked={selected === 4}
          onChange={handleChange}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label htmlFor="num5">5</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
