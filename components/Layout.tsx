import Link from "next/link";

const Layout = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen">
    <Link href="/">
      <div className="flex w-full p-8 justify-between items-center bg-gradient-to-r from-pl-blue to-pl-green cursor-pointer">
        <h1 className="text-3xl text-white text-center">Retrieval.Market</h1>
        <img
          src="/protocol-labs-logo.svg"
          alt="Protocol Labs Logo"
          className="h-16 ml-2"
        />
      </div>
    </Link>
    <main className="flex flex-col items-center w-full flex-1 text-center pb-16 px-2">
      {children}
    </main>
    <footer className="flex items-center justify-center w-full h-24 bg-gray-100">
      <a
        className="flex items-center justify-center"
        href="https://protocol.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img
          src="/protocol-labs-logo.svg"
          alt="Protocol Labs Logo"
          className="h-8 ml-1"
        />
      </a>
    </footer>
  </div>
);

export default Layout;
