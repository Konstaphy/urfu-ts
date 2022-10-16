type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
}

function getHouse(): House {
    return {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: "rocks"
        }
    };
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();

/**
 * Каст тпиов через as очень опасен потому что из-за него могут возникнуть проблемы с использованием
 * упущенных свойств и методов из-за недостаточной типизации
 * */
