import React from "react";
import PropTypes from "prop-types";
import styles from "./Friendlist.module.css";

const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={styles.item}>
        <span
          className={isOnline ? styles.status : styles.statusOffline}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="user avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </>
);
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendListItem;
