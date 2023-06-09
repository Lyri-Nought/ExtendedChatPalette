export type Settings = {
    enableExDodge: boolean;
};

export type ChatPalette = {
    characterName: string | null;
    messages: string[];
    borderType: number;
    isUseRollResult: boolean;
};

export type Tab = {
    tabName: string;
    originText: string;
    chatPalettes: ChatPalette[];
};

export type Data = {
    [roomId: string]: {
        roomName: string;
        tabs: Tab[];
    };
};

export type DataModel = {
    settings?: Settings;
    data?: Data;
};