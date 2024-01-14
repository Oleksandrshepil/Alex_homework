"use strickt"
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, currentCompany) {
    if (currentCompany.name.toLowerCase() === companyName.toLowerCase()) {
        return currentCompany;
    } else if (currentCompany.clients) {
        for (const client of currentCompany.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    } else if (currentCompany.partners) {
        for (const partner of currentCompany.partners) {
            const result = findValueByKey(companyName, partner);
            if (result) {
                return result;
            }
        }
    }
}

const companyNameToFind = 'Клієнт 1.2.3';
const foundCompany = findValueByKey(companyNameToFind, company);

if (foundCompany) {
    console.log(`Інформація про компанію ${companyNameToFind}:`, foundCompany);
} else {
    console.log(`Компанію ${companyNameToFind} не знайдено.`);
}