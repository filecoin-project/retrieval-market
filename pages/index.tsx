export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Retrieval Market Homepage
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Indexing &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about the work on indexing
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Reputation Systems &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about the work on Rep. Systems
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Payment Channels &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover the work around payment channels
            </p>
          </a>

          <a
            href=""
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Data Transfer &rarr;</h3>
            <p className="mt-4 text-xl">
              read about the latest Data Transfer work
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://protocol.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/protocol-labs-logo.svg" alt="Protocol Labs Logo" className="h-16 ml-2" />
        </a>
      </footer>
    </div>
  )
}
