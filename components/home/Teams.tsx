interface Team {
  name: string;
  description: string;
  website?: string;
}

const teams: Array<Team> = [
  {
    name: "Myel",
    description: "Building the CDN for decentralized storage networks",
    website: "https://myel.network",
  },
  {
    name: "Ken Labs",
    description: "Cloud 2.0 of the Web 3 ecosystem",
  },
];

export default function Teams() {
  return (
    <div className="flex flex-wrap items-center justify-around border-t-2 max-w-4xl mt-6 sm:w-full">
      <div className="flex flex-wrap items-left max-w-4xl mt-6 sm:w-full">
        <h2 className="text-2xl font-bold">Teams</h2>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {teams.map((team: Team) => (
            <a
              key={team.name}
              href={team.website || ""}
              className="p-6 mt-6 text-left border w-96 h-32 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">{team.name}</h3>
              <h3 className="text-1xl">{team.description}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
