import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

let projectData = [
    {
        image: "aircloud_go.png",
        title: "Air Cloud Go",
        description: "IoT based app, performed POC to migrate from Native to React Native implmenting push notification, smart-fence, stomp etc.",
        stack: ['React Native', 'STOMP', 'Firebase', 'Notifee'],
        buttons: [
            {
                title: "Link",
                link: "https://www.hitachiaircon.com/ranges/iot-apps-controllers/aircloud-go-app",
                Icon: <FaExternalLinkAlt />
            }
        ]
    },
    {
        image: "upsc_ai_webapp.png",
        title: "UPSC AI Ruby On Rails App",
        description: "Ruby On Rails project that use Active Admin, Sidekiq, Ajax etc to demonstrate my abilites and hands on experience I gained",
        stack: ['Ruby On Rails', 'Postgress', 'Sidekiq', 'Ajax'],
        buttons: [
            {
                title: "Link",
                link: "https://www.hitachiaircon.com/ranges/iot-apps-controllers/aircloud-go-app",
                Icon: <FaExternalLinkAlt />
            }
        ]
    },
    {
        image: "inviscan.png",
        title: "Invi Sann App",
        description: "Rewrote legacy app to make it modularize, making it scalable and maintainable.",
        stack: ['React Native', 'Barcode Scanner', 'Media', 'S3 bucket upload'],
        buttons: [
            {
                title: "Repo",
                link: "https://github.com/kapil-khursade/Upsc-Ai",
                Icon: <FaGithub />
            }
        ]
    },
    {
        image: "upsc_ai_mobile_app.jpg",
        title: "UPSC AI React Native Mobile App",
        description: "React Native project with implementaton of Navigation Stack, Api data fetching, authentication, Flatlist, Redux State management.",
        stack: ['React Native', 'Redis', 'Keychain'],
        buttons: [
            {
                title: "Repo",
                link: "https://github.com/kapil-khursade/UPSCAI-Mobile-App",
                Icon: <FaGithub />
            }
        ]
    },
    {
        image: "portfolio.png",
        title: "Personal Portfolio In React Js",
        description: "A portfolio website made in React Js and deployed on Github pages.",
        stack: ['React Js', 'Vite', 'Github Pages'],
        buttons: [
            {
                title: "Repo",
                link: "https://github.com/kapil-khursade/kapil-khursade.github.io",
                Icon: <FaGithub />
            },
            {
                title: "Link",
                link: "https://kapil-khursade.github.io/",
                Icon: <FaExternalLinkAlt />
            }
        ]
    },
];

export default projectData;