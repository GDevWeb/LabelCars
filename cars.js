export const AUTOMATIC = "automatique";
export const MANUAL = "manuel";

const cars = [
    {
        id: "MER-CLC",
        name: "Mercedes-Benz Classe C",
        options: {
            aircondition: true,
            navigation: true,
            transmission: AUTOMATIC,
            person: 5
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/mb-c-klasse-4d-grau-2020.png",
        price: 199,
        reservations: 3
    },
    {
        id: "BMW-X1",
        name: "BMW X1",
        options: {
            aircondition: true,
            navigation: true,
            transmission: AUTOMATIC,
            person: 5
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/bmw-x1-5d-weiss-2019.png",
        price: 179,
        reservations: 7
    },
    {
        id: "AUD-A1-SB",
        name: "Audi A1 Sportback",
        options: {
            aircondition: true,
            navigation: true,
            transmission: MANUAL,
            person: 4
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png",
        price: 129,
        reservations: 5
    },
    {
        id: "VW-TROC",
        name: "VW T-Roc",
        options: {
            aircondition: true,
            navigation: true,
            transmission: MANUAL,
            person: 5
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/vw-t-roc-suv-schwarz-2019.png",
        price: 139,
        reservations: 30
    },
    {
        id: "AUD-Q3",
        name: "Audi Q3",
        options: {
            aircondition: true,
            navigation: true,
            transmission: AUTOMATIC,
            person: 5
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-q3-5d-silber-2019.png",
        price: 189,
        reservations: 10
    },
    {
        id: "MER-CLV",
        name: "Mercedes Classe V",
        options: {
            aircondition: true,
            navigation: true,
            transmission: AUTOMATIC,
            person: 8
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/mb-v-klasse-van-grau-2014.png",
        price: 249,
        reservations: 15
    },
    {
        id: "MAS-GHI",
        name: "Maserati Ghibli",
        options: {
            aircondition: true,
            navigation: true,
            transmission: AUTOMATIC,
            person: 5
        },
        image: "https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/maserati-ghibli-4d-grau-2018.png",
        price: 499,
        reservations: 2
    },
    {
        id: "REN-5",
        name: "Renault 5 Turbo",
        options: {
            aircondition: false,
            navigation: false,
            transmission: MANUAL,
            person: 4
        },
        image: "https://vignette.wikia.nocookie.net/forzamotorsport/images/c/c0/HOR_XB1_Renault_5.png/revision/latest?cb=20191101135352",
        price: 199,
        reservations: 0
    }
];

export default cars;