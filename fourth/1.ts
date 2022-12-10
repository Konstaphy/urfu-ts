type User = {
    id: number,
    registrationDate: string,
    messagesCount: number,
    warningsCount: number
}

class TrustedUser {
    user: User;
    constructor(user: User) {
        this.user = user;
    }

    private getRegistrationPeriod() {
        const currentDateTime = new Date();
        const yearsDiff = parseFloat(this.user.registrationDate.slice(6)) - currentDateTime.getFullYear();
        const monthDiff = parseFloat(this.user.registrationDate.slice(3, 5)) - currentDateTime.getMonth();
        const daysDiff = parseFloat(this.user.registrationDate.slice(0, 2)) - currentDateTime.getDay();
        return yearsDiff * 365 + monthDiff * 30 + daysDiff;
    }

    public getConfidenceRatio() {
        let registrationPeriod = this.getRegistrationPeriod();
        return this.user.messagesCount * 2 - this.user.warningsCount * 100 + registrationPeriod;
    }

}

class ConfidenceHelper {
    public static checkConfidenceRatio(user: TrustedUser) {
        return user.getConfidenceRatio() >= 0;
    }
}


let users: User[] = [
    {
        "id": 1,
        "registrationDate": "15-07-2020",
        "messagesCount": 200,
        "warningsCount": 1
    },
    {
        "id": 2,
        "registrationDate": "20-08-2022",
        "messagesCount": 1,
        "warningsCount": 6
    },
    {
        "id": 3,
        "registrationDate": "31-10-2022",
        "messagesCount": 1,
        "warningsCount": 20
    },
    {
        "id": 4,
        "registrationDate": "15-07-1999",
        "messagesCount": 200000000,
        "warningsCount": 1
    },
]


let trustedUsers: Array<TrustedUser> = new Array<TrustedUser>;
for (let i = 0; i < users.length; i++) {
    let trustedUser = new TrustedUser(users[i])
    if (ConfidenceHelper.checkConfidenceRatio(trustedUser)) {
        trustedUsers.push(trustedUser);
    }
}
