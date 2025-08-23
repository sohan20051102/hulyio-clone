import Image from 'next/image';
import type { SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path d="M12.912.875H15.4L9.81 7.218 16 15.125h-5.02L6.39 9.53 1.25 15.125H-1.25l5.88-6.62L-.875.875h5.18l4.24 5.62zM7.64 8.52l-.6-1.5L2.25 1.875h3.04l4.97 7.03.6 1.5 4.93 6.62h-3.04z" />
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" {...props}>
    <path d="M15.995 15.125V1.75c0-.475-.4-.875-.875-.875h-14.25c-.475 0-.875.4-.875.875v13.375c0 .475.4.875.875.875h14.25c.475 0 .875-.4-.875-.875zM5.337 6H2.83V13.5h2.507V6zm-1.25-1.75c-.825 0-1.483-.675-1.483-1.492s.658-1.491 1.483-1.491c.817 0 1.484.675 1.484 1.49.008.826-.667 1.492-1.484 1.492zm9.158 9.25H10.74V9.8c0-.9-.025-2.05-1.25-2.05s-1.442 1-1.442 2v3.75h-2.5V6h2.4V7.1h.033a2.642 2.642 0 0 1 2.384-1.317c2.558 0 3.025 1.716 3.025 3.941v4.776z" />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path d="M8 .125a8 8 0 0 0-2.525 15.592c.4.075.542-.175.542-.383 0-.192-.008-1-.017-1.783-2.225.483-2.692-.95-2.692-.95-.367-.925-.892-1.175-.892-1.175-.725-.5.058-.492.058-.492.8.058 1.225.825 1.225.825.717 1.225 1.875.875 2.333.667.075-.516.283-.875.508-1.075-1.783-.2-3.65-.892-3.65-3.95 0-.875.317-1.592.825-2.15-.083-.2-.358-1.025.075-2.125 0 0 .675-.217 2.208.825.642-.175 1.325-.267 2-.267.675 0 1.358.092 2 .267 1.533-1.042 2.208-.825 2.208-.825.433 1.1.158 1.925.075 2.125.508.558.825 1.275.825 2.15 0 3.067-1.875 3.75-3.658 3.95.292.25.542.742.542 1.5v2.208c0 .208.142.467.55.383A8 8 0 0 0 8 .125z" />
  </svg>
);

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 14" {...props}>
    <path d="M18.12.875A2.2 2.2 0 0 0 16.556 0H2.444A2.2 2.2 0 0 0 .88.875 23.46 23.46 0 0 0 0 7a23.46 23.46 0 0 0 .88 6.125c.212.925.992 1.467 1.564 1.5h14.112c.572-.033 1.352-.575 1.565-1.5A23.46 23.46 0 0 0 19 7a23.46 23.46 0 0 0-.88-6.125zM12.56 7.438l-4.444 2.5a.519.519 0 0 1-.778-.438V4.5c0-.4.408-.667.778-.438l4.444 2.5c.35.196.35.704 0 .876z" />
  </svg>
);

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16" {...props}>
    <path d="M17.846 1.133a18.33 18.33 0 0 0-4.63-1.008c-.283.475-.542.975-.775 1.483-1.633-.425-3.3-.425-4.933 0-.25-.508-.509-1.008-.784-1.483a18.35 18.35 0 0 0-4.621 1.008S.292 6.558 0 11.233c1.55.933 3.016 1.433 4.416 1.567.65-.55.909-1.008 1.167-1.567-1.083-.267-2.09-.65-3-1.067.242-.141.475-.291.692-.45.4-.3.759-.608 1.059-.925-.017.008-.033.017-.05.025a17.398 17.398 0 0 0 4.14 1.366V10.1c0 0 .041-.017.075-.025.133.017.275.025.417.025.791 0 1.558-.15 2.241-.425.2.292.35.592.45.892.45.85.742 1.633.867 2.341.259-.05.517-.1.767-.175.75-.242 1.475-.575 2.158-1 .158-.291.291-.583.408-.883a9.49 9.49 0 0 0-1.858-1.025c.025-.017.05-.033.067-.05.3.317.659.625 1.059.925.217.159.45.309.691.45-1.125.492-2.15.85-3.084 1.067.258.559.516 1.017 1.166 1.567 1.4-.134 2.867-.634 4.417-1.567-.32-5.466-2.083-10.1-2.083-10.1zm-10.74 7.642c-.991 0-1.791-.9-1.791-2s.8-2 1.791-2c1 0 1.792.9 1.792 2s-.792 2-1.792 2zm6.758 0c-.992 0-1.792-.9-1.792-2s.8-2 1.792-2c.991 0 1.791.9 1.791 2s-.8 2-1.791 2z" />
  </svg>
);

const socialLinks = [
  { name: 'X', href: 'https://x.com/huly_io', icon: XIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/hardcoreeng/', icon: LinkedInIcon },
  { name: 'GitHub', href: 'https://github.com/hcengineering/platform', icon: GithubIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@huly_io', icon: YoutubeIcon },
  { name: 'Discord', href: 'https://huly.link/slack', icon: DiscordIcon },
];

const legalLinks = [
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const Footer = () => {
    return (
        <footer className="bg-[#090A0C] py-14 px-6 md:py-12 sm:pb-9">
            <div className="container relative grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 text-[13px] text-muted-foreground md:grid-cols-2 md:grid-rows-[auto_auto] md:gap-y-8 sm:grid-cols-1 sm:gap-y-9 sm:text-[12px]">
                <div className="flex items-center gap-x-5 md:col-start-1">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            aria-label={name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Icon className="h-4 w-4 fill-muted-foreground transition-colors duration-200 group-hover:fill-foreground" />
                        </a>
                    ))}
                </div>

                <div className="md:col-start-2 md:row-start-1 md:text-right">
                    <ul className="flex gap-x-6 sm:gap-x-5">
                        {legalLinks.map(({ name, href }) => (
                            <li key={name}>
                                <a href={href} className="transition-colors duration-200 hover:text-foreground">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="pt-px font-light md:col-span-2 md:col-start-1 md:row-start-2 md:pt-0 sm:order-1 sm:text-center">
                    Copyright © 2025 Huly Labs. All rights reserved.
                </p>

                <div className="flex items-center justify-end gap-x-1.5 pt-px md:col-start-2 md:row-start-2 sm:col-start-1 sm:justify-center sm:pt-0">
                    <span className="font-light">Made with passion and</span>
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/assets/svgs/451c327bbe05656f879fee8b8cac7a62-26.svg?"
                        alt="Huly"
                        width={37}
                        height={12}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;