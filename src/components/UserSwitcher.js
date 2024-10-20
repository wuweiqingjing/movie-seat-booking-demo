'use client';
import { observer } from "mobx-react-lite";
import seatStore from "../stores/SeatStores";

const UserSwitcher = observer(() => {
  return (
    <div className="user-switcher flex mb-[8px] mt-[8px]">
      {seatStore.currentUser}
      <div className="pr-[6px]">user: </div>
      {seatStore.users.map((user, index) => (
        <button key={index} className={`rounded-sm mr-[4px] p-[2px] 
          ${seatStore.isCurrentUser(index) ? 'bg-[#70eaf7] text-[white]' : 'bg-[#ffffff] text-[black]'}`}
          onClick={() => seatStore.switchUser(index)}>
          {user.name}
        </button>
      ))}
    </div>
  );
});

export default UserSwitcher;