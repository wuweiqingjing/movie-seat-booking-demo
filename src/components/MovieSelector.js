'use client';
import { observer } from "mobx-react-lite";
import seatStore from "../stores/SeatStores";

const MovieSelector = observer(() => {
  function onChange(event) {
    seatStore.switchMovie(event.target.value)
  };

  return (
    <>
      <div className="flex">
        <div className="mr-[8px]">Pick a movie:</div>
        <div className="movie-selector text-[#000]">
          <select onChange={onChange}>
            {seatStore.movieList.map(item => <option value={item.id} key={item.id}>{item.name} (${item.price})</option>)}
          </select>
        </div>
      </div>

    </>
  );
});

export default MovieSelector;