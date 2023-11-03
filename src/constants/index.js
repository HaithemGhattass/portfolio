import {
    mobile,
    backend,
    web,
    javascript,
    swiftui,
    html,
    css,
    reactjs,
    dart,
    kotlin,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    artie,
    core,
    threejs,
    vectors,
    spectrum,
    clothy
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "iOS Developer",
        icon: mobile,
    },
    {
        title: "Android Developer",
        icon: mobile,
    },
    {
        title: "React Native Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "swiftui",
        icon: swiftui,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "kotlin",
        icon: kotlin,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Engineering intern",
        company_name: "Vectors",
        icon: vectors,
        iconBg: "#383E56",
        date: "June 2022 - August 2022",
        points: [

            "worked on an Atlassian plugin for jira service management that integrates seamlessly with Atlassian Marketplace to provide an automated customer identification system.",
            "When creating the ticket, the app instantly retrieves relevant customer information.",
            "Using custom fields, the app will display critical customer data directly in the ticket,",
            "allowing service agents to quickly identify the customer and understand their particular requirements.",
        ],
    },
    {
        title: "Developper intern",
        company_name: "Spectrum",
        icon: spectrum,
        iconBg: "#E6DEDD",
        date: "June 2021 - August 2021",
        points: [
            "I worked on a project to develop an Atlassian application that connects Confluence and Freshdesk using Forge.",
            "During these two months, I gained hands-on experience with these tools and developed valuable software development skills .",
            "I successfully completed the project, demonstrating my ability to work effectively in a professional setting.",
        ],
    },

];


const projects = [
    {
        name: "Clothyy",
        description:
            " Clothyy is a two-version application, developed in Swift for iOS and in Kotlin for Android, that allows users to detect and categorize their clothing items. Users can also exchange their clothes with other app users. Additionally, the application provides recommendations to users on what outerwear they should wear based on the event they are attending and the weather conditions.",
        tags: [
            {
                name: "swiftUI",
                color: "blue-text-gradient",
            },
            {
                name: "kotlin",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },

        ],
        image: clothy,
        source_code_link: "https://github.com/HaithemGhattass/clothy",
    },
    {
        name: "Artie",
        description:
            " Artie is a groundbreaking project that combines art, technology, and interaction to provide children with a unique interactive artistic experience. A robot for children is powered by a Raspberry Pi board, connecting to a Flutter application . Children can interact with Artie by selecting images published from a Node.js server. By clicking on their chosen image in the Flutter application, children can witness Artie reproducing the draws .",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "RaspberryPi",
                color: "pink-text-gradient",
            },
        ],
        image: artie,
        source_code_link: "https://github.com/HaithemGhattass/ArtieFlutter",
    },
    {
        name: "Core",
        description:
            "Core is a connected watch, developed using React ,Flutter and ESP32. This watch measures your cardiac rhythm and monitors your sleeping patterns. The collected data is then transmitted to a Flutter application, ensuring users have access to their health insights. In addition, a React application, powered by a Node.js backend, enables doctors to access and analyze your health information.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "esp32",
                color: "pink-text-gradient",
            },
        ],
        image: core,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };