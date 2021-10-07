import PanelWrapper from "../PanelWrapper";

interface FindOutMoreProps {
  links: Array<string>;
}

export default function FindOutMore({ links }: FindOutMoreProps) {
  return (
    <PanelWrapper title="Resources">
      <ul className="list-disc px-8">
        {links.map((link: string) => (
          <li key={link} className="text-1xl text-left pt-2">
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </PanelWrapper>
  );
}
