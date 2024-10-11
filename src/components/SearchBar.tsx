import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/eventsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search events"
        onChange={handleSearch}
        className="px-4 py-2 border rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
