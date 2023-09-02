import "../blocks/Form.css";

const Form = ({
  handleCategoryChange,
  handleSelectionChange,
  handleFormSubmit,
  maxValue,
}) => {
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__inputs">
        <select
          name="category"
          id="category"
          className="form__category"
          placeholder="select"
          onChange={handleCategoryChange}
        >
          <option value="films">Films</option>
          <option value="people">People</option>
          {/* <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option> */}
        </select>
        <input
          className="form__selection"
          type="number"
          min={1}
          max={maxValue || 6}
          placeholder="1"
          onChange={handleSelectionChange}
        ></input>
      </div>
      <button type="submit" className="form__submit">
        Generate Content
      </button>
    </form>
  );
};

export default Form;
