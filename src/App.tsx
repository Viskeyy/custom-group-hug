import { IChannel, IPresence } from '@yomo/presence';
import { useEffect, useState } from 'react';
import './App.css';
import { GroupHug } from './components/GroupHug';
import { GroupHugProps, User } from './vite-env';

const colors = ['#FF38D1', '#8263FF', '#0095FF', '#00B874', '#FF3168', '#FFAB03', '#AABBCC'];
const idx = Math.floor(Math.random() * colors.length);

function App({
    avatar = '',
    avatarBackgroundColor = colors[idx],
    avatarBorderColor = colors[idx],
    avatarBorderWidth = 2,
    avatarTextColor = '#000',
    channel,
    darkMode = false,
    id,
    maxUsers = 5,
    name,
    placeholder = 'shape',
    popover = true,
    presence,
    size = 36,
    transparency = 0.5,
}: GroupHugProps) {
    const [ch, setCh] = useState<IChannel>();
    const [users, setUsers] = useState<User[]>([]);
    const [self, setSelf] = useState<User>({
        avatar,
        avatarBackgroundColor,
        avatarBorderColor,
        avatarBorderWidth,
        avatarTextColor,
        id,
        name,
        placeholder,
        size,
        visibility: !document.hidden,
    });

    useEffect(() => {
        (async () => {
            try {
                const yomo: IPresence = await presence;
                const tempCh = await yomo.joinChannel(channel, self);
                setCh(() => tempCh);
            } catch (error) {
                console.log(error);
            }
        })();
        return () => ch?.leave();
    }, []);

    useEffect(() => {
        ch?.subscribePeers((peers: User[]) => setUsers(() => peers));

        ch?.subscribe('change-state', (user: User) => {
            setUsers((users) => {
                const temp = users.filter((u) => u.id !== user.id);
                temp.push(user);
                return temp;
            });
        });

        const selfVisibilityChange = () =>
            setSelf((self) => {
                return { ...self, visibility: !document.hidden };
            });
        document.addEventListener('visibilitychange', selfVisibilityChange);

        return () => document.removeEventListener('visibilitychange', selfVisibilityChange);
    }, [ch]);

    useEffect(() => {
        ch?.broadcast('change-state', self);
    }, [self]);

    return <GroupHug users={users} />;
}

export default App;
