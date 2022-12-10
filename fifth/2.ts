type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}


type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}


type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}

type MetaTrackMessage = {
    trackId: string, // айди трекера логирования
    trackerUrl: string, // юрл трекера логирования
}


type LoadMetaMessage = {
    currentNodeId: string, // текущий сервер, с которым установлено соединение
    currentNodeLoad: number // 0-100, текущая загрузка ноды
}


type ApiResponse<T = UserResponse, K = MetaTrackMessage> = {
    data: T,
    meta: K
}


class SomeExternalApi {
    public static getUsers(): ApiResponse<UserResponse, MetaTrackMessage>[] {
        return [
            {
                data: {

                    "id": 47,
                    "name": "Stanley",
                    "registrationDate": "2020-07-12 08:11:45"
                },
                meta: {
                    trackId: "123",
                    trackerUrl: "vk.com"
                }
            }, {
                data: {
                    "id": 50,
                    "name": "Jeffrey",
                    "registrationDate": "2021-07-22 12:22:50"
                },
                meta: {
                    trackId: "123",
                    trackerUrl: "vk.com"
                }
            }, {
                data: {
                    "id": 51,
                    "name": "Sue",
                    "registrationDate": "2021-10-23 17:50:53"
                },
                meta: {
                    trackId: "123",
                    trackerUrl: "vk.com"
                }
            }, {
                data: {
                    "id": 49,
                    "name": "Kate",
                    "registrationDate": "2020-08-30 14:17:23"
                },
                meta: {
                    trackId: "123",
                    trackerUrl: "vk.com"
                }
            }, {
                data: {
                    "id": 48,
                    "name": "Donald",
                    "registrationDate": "2021-02-15 10:56:51"
                },
                meta: {
                    trackId: "123",
                    trackerUrl: "vk.com"
                }
            },
        ]
    }


    public static auth(): ApiResponse<AuthResponse, LoadMetaMessage> {
        return {
            data: {
                id: 124,
                avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>",
                name: "Johanna",
                login: "Johanna206",
                user_token: "eYEuVgUlDvRXgHR"
            }
            ,
            meta: {
                currentNodeId: "123",
                currentNodeLoad: 2
            }
        }
    }


    public static getSomeOther(): ApiResponse<SomeOtherResponse, LoadMetaMessage>[] {
        return [
            {
                data: {
                    "field1": "7pfE0oQFUZJg",
                    "field2": "rS9bzwuy8qb1U",
                    "field3": "2vLYGgE"
                },
                meta: {
                    currentNodeId: "123",
                    currentNodeLoad: 2
                }
            },
            {
                data: {
                    "field1": "vS",
                    "field2": "Dl",
                    "field3": "6JB28Del"
                },
                meta: {
                    currentNodeId: "123",
                    currentNodeLoad: 2
                }
            },
            {
                data: {
                    "field1": "WVA",
                    "field2": "9EAQk5w1sk0N8sm7j2d",
                    "field3": "BFTkEIrJFzSCfo"
                },
                meta: {
                    currentNodeId: "123",
                    currentNodeLoad: 2
                }
            },
        ]
    }
}


console.log(SomeExternalApi.getUsers());
