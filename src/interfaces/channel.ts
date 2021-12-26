interface IChannelInfo {
    id?: string,
    name: string,
    description?: string,
    members?: Object,
    createdBy?: string,
}

interface IChannels{
    channels: Array<IChannelInfo>;
}


export type { IChannelInfo, IChannels };