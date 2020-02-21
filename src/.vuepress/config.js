module.exports = {
    base: '/profile/',
    title: 'Sathik Prasertarcha',
    description: 'I, Sathik Prasertarcha, have a dream.',
    themeConfig: {
        editLinks: true,
        serviceWorker: true,
        nextLinks: true,
        prevLinks: true,
        smoothScroll: false,
        sidebar: [
            {
                title: "Introduction",
                children: [
                    "/content/introduction/about-me",
                    "/content/introduction/experience",
                    "/content/introduction/technology-stack",
                    "/content/introduction/contact",
                ]
            },
            {
                title: "Portfolio",
                children: [
                    "/content/portfolio/work-life",
                ]
            }
        ]
    }
};
