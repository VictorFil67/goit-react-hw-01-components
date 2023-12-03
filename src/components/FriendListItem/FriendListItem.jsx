import s from './FriendListItem.module.css'
export const FriendListItem = ({avatar, name, isOnline, id}) => {
return (
    <li className={s.item} key={id}>
 <span className={`${s.status} ${s[isOnline]}`}>{isOnline}</span>
 <img className={s.avatar} src={avatar} alt={name} width="48" />
 <p className={s.name}>{name}</p>
</li>
)
};