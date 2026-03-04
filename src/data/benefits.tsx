import { FiClock, FiArchive, FiRotateCcw, FiDownload, FiSettings, FiBell, FiStar } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Features",
        description: "Powerful multi-step timers built for workouts, study sessions, and workflows.",
        bullets: [
            {
                title: "Create Complex Timers",
                description: "Build multi-step timers with custom names and durations for each step — perfect for interval training, cooking, and studying.",
                icon: <FiClock size={26} />
            },
            // {
            //     title: "Archive Timers",
            //     description: "Archive timers you no longer use, keep configurations safely stored for later without cluttering your main list.",
            //     icon: <FiArchive size={26} />
            // },
            {
                title: "Timer History",
                description: "View past runs with timestamps and basic stats to track progress and repeat successful sessions.",
                icon: <FiRotateCcw size={26} />
            },
            {
                title: "Export & Restore",
                description: "Export and import your timer configurations to keep your data safe and restore them at any time.",
                icon: <FiDownload size={26} />
            },
            {
                title: "Custom Settings",
                description: "Personalize Step Timer: mute audio, themes, and other preferences.",
                icon: <FiSettings size={26} />
            },
            // {
            //     title: "Notifications",
            //     description: "Enable notifications to be notified when steps complete.",
            //     icon: <FiBell size={26} />
            // },
            // {
            //     title: "Step Timer Pro",
            //     description: "Subscribe for unlimited timers, advanced features, and priority support. Download on Play Store: https://play.google.com/store/apps/details?id=dev.immadisairaj.step_timer",
            //     icon: <FiStar size={26} />
            // }
        ],
        imageSrc: "/images/mockup-2.png"
    }
]