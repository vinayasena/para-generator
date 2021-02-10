import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) amount = 1;
    if (amount > 8) {
      amount = 8;
      alert("can only generate 8 paragraphs at the moment!");
    }
    let newData = data.slice(0, amount);

    setText(newData);
  };
  return (
    <>
      <section className="section-center">
        <h3>Loreum ipsum paragraph(s) generator</h3>
        <em>Please note: at the moment it is limited to max 8 paragraphs.</em>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs</label>

          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => {
              setCount(e.target.valueAsNumber);
            }}
          ></input>
          <button type="submit" className="btn">
            Generate{" "}
          </button>
        </form>

        <article className="lorem-text">
          {text.map((txt, id) => {
            return <p key={id}>{txt}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
