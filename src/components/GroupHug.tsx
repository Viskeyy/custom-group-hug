import { Avatar } from './Avatar';
import { User } from '../vite-env';

export const GroupHug = ({ users }: { users: User[] }) => {
    return (
        <div className=''>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                    <Avatar user={user} popover={true} />
                </div>
            ))}
        </div>
    );
};
