import "./Filter.css";

type Order = "asc-price" | "desc-price" | "default" | "best-sellers";

interface FilterProps {
  handleFilter: (order: Order) => void;
}

export const Filter = ({ handleFilter }: FilterProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilter(e.target.value as Order);
  };
  return (
    <div className="filter-container">
      <label className="label" htmlFor="filter">
        Ordenar por
      </label>
      <select className="select" id="filter" onChange={handleChange}>
        <option value="highlights">Destacado</option>
        <option value="asc-price">Precio: menor a mayor</option>
        <option value="desc-price">Precio: mayor a menor</option>
        <option value="best-sellers">Lo mas vendido</option>
      </select>
    </div>
  );
};
