interface AboutProps {
  description: string;
}

export default function About({ description }: AboutProps) {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h3 className="text-1xl">{description}</h3>
      </div>
    </div>
  );
}
