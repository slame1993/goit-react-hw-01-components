import FriendListItem from './FriendListItem';
import css from '../FriendList/FriendList.module.css';
import PropTypes from "prop-types";


const FriendList = ({friends}) => {
    const element = friends.map(({ avatar, id, name, isOnline }) =>
        <FriendListItem
            key={id}
            id={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
    />)
     return <ul className={css.friendList}>{element}</ul>;
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


export default FriendList;