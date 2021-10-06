interface FindOutMoreProps {}

export default function FindOutMore({}: FindOutMoreProps) {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap flex-col items-left w-full max-w-4xl sm:w-full">
        <h3 className="text-2xl text-left">Find Out More</h3>
        <h3 className="text-1xl text-left pt-2">Links</h3>
      </div>
    </div>
  );
}
