import Avvvatars from 'avvvatars-react';
import { useState } from 'react';
import { User } from '../vite-env';

const ImageAvatar = ({ user }: { user: User }) => {
    return (
        <>
            <img
                style={{
                    backgroundColor: user.avatarBackgroundColor,
                    height: user.size,
                    objectFit: 'contain',
                    width: user.size,
                }}
                src={user.avatar}
                alt={user.id}
                className='relative rounded-full box-content'
            />
        </>
    );
};

const TextAvatar = ({ user }: { user: User }) => {
    return (
        <div className='rounded-full w-[36px] h-[36px]'>
            <Avvvatars value={user.name} style='shape' size={user.size} />
        </div>
    );
};

const Popover = ({ user, isHover }: { user: User; isHover: boolean }) => {
    return (
        <div
            className='flex flex-col items-center absolute text-[14px] text-black dark:text-white'
            style={{
                display: isHover ? '' : 'none',
                top: user.size,
                transform: `translateX(calc(-50% + ${user.size / 2}px))`,
                paddingTop: '13px',
            }}
        >
            <div className='w-[10px] h-[10px] bg-white dark:bg-[#34323E] shadow-[0px_0px_2px_0px_rgb(0_0_0_/_0.1)] rotate-[135deg] z-10'></div>
            <div className=' absolute w-[12px] h-[12px] bg-white dark:bg-[#34323E] top-[0.5px] rotate-[135deg] z-[10px]'></div>
            <span className='bg-white dark:bg-[#34323E] p-2 rounded-[6px] whitespace-nowrap shadow-[0px_1px_4px_0px_rgb(0_0_0_/_0.1)] translate-y-[5px]'>
                {user.name}
                <br />
                {user.id}
            </span>
        </div>
    );
};

export const Mask = () => <span className={`opacity-75 w-full h-full absolute top-0 left-0 rounded-full bg-white dark:bg-black`} />;

export const Avatar = ({ user, popover }: { user: User; popover: boolean }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={`relative rounded-full box-content border-2 border-green-400 w-9 h-9`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {user.avatar ? <ImageAvatar user={user} /> : <TextAvatar user={user} />}
            {popover && <Popover user={user} isHover={isHover} />}
            {!user.visibility && <Mask />}
        </div>
    );
};
