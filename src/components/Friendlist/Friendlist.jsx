import React from "react";
import PropTypes from "prop-types";
import FriendlistItem from "./FriendlistItem";

const Friendlist = ({ friends }) => (
  <ul>
    <FriendlistItem friends={friends} />
  </ul>
);

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Friendlist;
