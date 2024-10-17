export const SITE_TITLE = "Mei Hua Cup";

export const NAV_MAIN = "navMain";
export const NAV_META = "navMeta";
export const NAVIGATION = [
    // MAIN
    {
        title: "Home",
        href: "/",
        published: true,
        menu: NAV_MAIN,
        order: 10
    },
    {
        title: "News",
        href: "/news",
        published: true,
        menu: NAV_MAIN,
        order: 20
    },
    {
        title: "Regelwerk",
        href: "/regelwerk",
        published: true,
        menu: NAV_MAIN,
        order: 30
    },
    {
        title: "Partner",
        href: "/partner",
        published: true,
        menu: NAV_MAIN,
        order: 40
    },
    {
        title: "Kontakt",
        href: "/kontakt",
        published: true,
        menu: NAV_MAIN,
        order: 50
    },
    // META
    {
        title: "Impressum",
        href: "/impressum",
        published: true,
        menu: NAV_META,
        order: 100
    },
    {
        title: "Datenschutz",
        href: "/datenschutz",
        published: true,
        menu: NAV_META,
        order: 110
    }
];


// Section Contents
export const HOME_HERO_CONTENT = {
    title: "Mei Hua Cup",
    date: "24.05.2025",
    location: 'Anhaltisches Berufsschultentrum "Hugo Junkers"',
    street: "Junkersstraße 30",
    plz: "06847",
    city: "Dessau-Roßlau",
    map: "https://maps.app.goo.gl/pionS4Xjws3jRcYB9"
}