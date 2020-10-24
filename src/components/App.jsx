import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";
import Friendlist from "./Friendlist/Friendlist";
import friends from "./Friendlist/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import items from "./TransactionHistory/transactions.json";

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="UPLOAD STATS" stats={statisticalData} />
    <Friendlist friends={friends} />
    <TransactionHistory items={items} />
  </div>
);

export default App;
