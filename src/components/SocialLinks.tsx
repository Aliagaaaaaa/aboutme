import { SocialIcon } from 'react-social-icons';

interface SocialLinksProps {
  links: {
    url: string;
    network: string;
  }[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
      {links.map((link) => (
        <SocialIcon
          key={link.url}
          url={link.url}
          network={link.network}
          target="_blank"
          className="transition-transform hover:scale-110 !h-[36px] !w-[36px] xs:!h-[40px] xs:!w-[40px] sm:!h-[44px] sm:!w-[44px] md:!h-[48px] md:!w-[48px]"
          bgColor="transparent"
          fgColor="#4B5563"
        />
      ))}
    </div>
  );
}