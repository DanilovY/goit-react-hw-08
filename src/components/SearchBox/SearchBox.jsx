import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.box}>
        <div>Find contacts by name</div>
        <input
          className={s.input}
          id="filter"
          type="text"
          value={search}
          placeholder="Your name..."
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
