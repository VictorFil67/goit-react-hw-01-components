import { Profile } from 'components/Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
// import {FriendListItem} from 'components/FriendListItem/FriendListItem.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
