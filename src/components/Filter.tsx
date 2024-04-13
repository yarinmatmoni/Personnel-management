import SortIcon from "../assets/sort.svg";

export const Filter = () => {
  return (
    <div className="filter">
      <input type="text" placeholder="Search..." />
      <div className="sort-container">
        <img src={SortIcon} alt="sort" />
      </div>
    </div>
  );
};
