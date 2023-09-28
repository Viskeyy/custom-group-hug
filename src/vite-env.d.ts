/// <reference types="vite/client" />

export type GroupHugProps = {
    avatar?: string;
    avatarBackgroundColor?: string;
    avatarBorderColor?: string;
    avatarBorderWidth?: number;
    avatarTextColor?: string;
    channel: string;
    darkMode?: boolean;
    id: string;
    maxUsers?: number;
    name: string;
    placeholder?: 'shape' | 'character';
    popover?: boolean;
    presence: unknown;
    size?: number;
    transparency?: number;
};

export type User = {
    avatar: string;
    avatarBackgroundColor: string;
    avatarBorderColor: string;
    avatarBorderWidth: number;
    avatarTextColor: string;
    id: string;
    name: string;
    placeholder: 'shape' | 'character';
    size: number;
    visibility: boolean;
};
