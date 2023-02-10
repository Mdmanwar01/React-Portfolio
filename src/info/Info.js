import self from "../img/self.png"




export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: " Md Manwar",
    lastName: "Hossain",
    initials: "Bonny", 
    position: "a Full Stack and Game Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🍟',
            text: 'Powered by French Fries'
        },
        {
            emoji: '🌎',
            text: 'Rooted in INDIA, reaching the world'
        },
        {
            emoji: "💼",
            text: "Student at Lovely Professional University"
        },
        {
            emoji: "📧",
            text: "manwar7908@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/Manwar.hossain.24",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/manwar_hossain1/?hl=en",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Mdmanwar01",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mdmanwar1/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/MdManwarHossa19",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hi, I'm Manwar, a computer science student at LPU, Jalandhar. My passion for technology and love for learning has driven me to constantly seek out new technologies and ways to improve my skills. My focus on ethical hacking and game development demonstrates my versatility and drive. My expertise in various languages makes me a competent programmer, and I am always eager to explore new languages. In my free time, I enjoy finding creative solutions by tinkering with technology. I am always looking for opportunities to learn and grow, and I am confident that my passion and dedication will help me succeed in my future career. With my technical knowledge and drive, I believe I can make a valuable contribution to any relevant role. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'c#', 'html5', 'css3', 'c++', 'unity'],
            exposedTo: ['nodejs', 'python', ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'traveling',
            emoji: '🧳'
        }

    ],
    
}