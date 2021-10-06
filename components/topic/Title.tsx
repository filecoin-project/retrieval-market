interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
