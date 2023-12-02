import { FriendListItem } from "components/FriendListItem/FriendListItem";
import s from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
  {friends.map(friend => (
<FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
  ))
  }
</ul>
    )
}