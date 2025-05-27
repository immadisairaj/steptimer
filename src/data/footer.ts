import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "TODO",
    quickLinks: [
        {
            text: "Privacy Policy",
            url: "/privacy-policy"
        },
        {
            text: "Terms of Use",
            url: "/terms-of-use"
        },
        // {
        //     text: "Testimonials",
        //     url: "#testimonials"
        // }
    ],
    email: 'mail+steptimer@immadisairaj.dev',
    telephone: '',
    // telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
    }
}