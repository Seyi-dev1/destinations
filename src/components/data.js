import paris from './images/marc-lamy-qF_pqc9lZKo-unsplash.jpg'
import fuji from './images/abyan-athif-prsGKZ93F1A-unsplash.jpg'
import solomonIslands from './images/andrew-svk-FT7uhP_jtOo-unsplash.jpg'
import hawaii from './images/christian-joudrey-DuD5D3lWC3c-unsplash.jpg'
import hobbiton from './images/mike-swigunski-CppuxXh6nxE-unsplash.jpg'
import grandCanyon from './images/tom-gainor-ICXB0_EV0KY-unsplash.jpg'

const data = [
    {
        title: 'Eiffle Tower',
        location: 'PARIS',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '12 Jan, 2021',
        endDate: '24 Jan, 2021',
        description: `Each of the 18,000 pieces used to build the tower was calculated specifically for the project and prepared in Eiffel's factory on the outskirts of Paris. The wrought-iron structure is composed of four immense arched legs, set on masonry piers that curve inward until joining in a single, tapered tower.
        Building the tower required 2.5 million thermally.`,
        coverImg: paris,
        id: 1,
    },
    {
        title: 'Fuji',
        location: 'JAPAN',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '12 Feb, 2021',
        endDate: '20 Feb, 2021',
        description: `Mount Fuji, Japanese Fuji-san, also spelled Fujisan, also called Fujiyama or Fuji no Yama, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area. It is a volcano.`,
        coverImg: fuji,
        id: 2,
    },
    {
        title: 'Solomon Islands',
        location: 'VIETNAM',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '14 March, 2021',
        endDate: '20 March, 2021',
        description: `Solomon Islands (Pijin: Solomon Aelan) is a sovereign country[8][9] consisting of six major islands and over 900 smaller islands in Oceania, to the east of Papua New Guinea and northwest of Vanuatu. It has a land area of 28,400 square kilometres (11,000 sq mi), and a population of 652,858.[10] Its capital, Honiara.`,
        coverImg: solomonIslands,
        id: 3,
    },
    {
        title: 'Hawaii',
        location: 'USA',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '10 June, 2021',
        endDate: '15 June, 2021',
        description: `Hawaii (/həˈwaɪi/ (listen) hə-WY-ee; Hawaiian: Hawaiʻi [həˈvɐjʔi] or [həˈwɐjʔi]) is a state in the Western United States, located in the Pacific Ocean about 2,000 miles from the U.S. mainland. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.

        Hawaii comprises nearly the entire Hawaiian archipelago, 137 volcanic island.`,
        coverImg: hawaii,
        id: 4,
    },
    {
        title: 'Hobbiton',
        location: 'THE SHIRE ',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '15 June, 2021',
        endDate: '19 June, 2021',
        description: `The Shire is a region of J. R. R. Tolkien's fictional Middle-earth, described in The Lord of the Rings and other works. The Shire is an inland area settled exclusively by hobbits, the Shire-folk, largely sheltered from the goings-on in the rest of Middle-earth. It is in the northwest of the continent, in the region of Eriador and the Kingdom of Arnor.`,
        coverImg: hobbiton,
        id: 5,
    },
    {
        title: 'Grand Canyon',
        location: 'USA',
        mapsLink: 'https://www.google.com/maps/@48.8276007,2.3129428,3a,90y,263.32h,84.31t/data=!3m6!1e1!3m4!1sbMx30yxQMVyknMW7-zjVfA!2e0!7i16384!8i8192',
        startDate: '12 July, 2021',
        endDate: '18 July, 2021',
        description: `The Grand Canyon (Hopi: Öngtupqa,[2] Yavapai: Wi:kaʼi:la, Navajo: Bidááʼ Haʼaztʼiʼ Tsékooh,[3][4] Southern Paiute language: Paxa’uipi,[5] Spanish: Gran Cañón or Gran Cañón del Colorado ) is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon.`,
        coverImg: grandCanyon,
        id: 6,
    },
]
export default data