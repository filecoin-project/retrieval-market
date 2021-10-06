interface PanelWrapperProps {
  title: string;
  noTopDivider?: boolean;
  children?: any;
}

export default function PanelWrapper({
  title,
  noTopDivider,
  children,
}: PanelWrapperProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-around ${
        noTopDivider ? "" : "border-t-2"
      } max-w-4xl mt-6 sm:w-full`}
    >
      <div className="flex flex-wrap flex-col w-100% items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl text-left font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
