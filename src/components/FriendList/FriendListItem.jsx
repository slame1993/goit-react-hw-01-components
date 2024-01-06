import css from '../FriendList/FriendList.module.css'

const FriendListItem = ({ id, isOnline, name, avatar }) => {
    return (
 <li className={css.item} key={id} id={id}>
  <span className={isOnline ? css.isOnline : css.isOffline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
    )
}


export default FriendListItem;