import { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const reloadQuote = async () => {
    const response = await fetch("https://api.kanye.rest/");
    const json = await response.json();
    setQuote(json.quote);
  };

  useEffect(() => {
    reloadQuote();
  }, []);

  return (
    <div className="dark container mx-auto max-w-2xl">
      <header className="text-center mt-10">
        <h1 className="text-3xl font-bold">
          <a href="">🌊 kanye.rest</a>
        </h1>
        <p className="text-black/60 pt-8">
          Umas frases aleatorias do Kanye West.
        </p>
      </header>
      <main className="pt-10 px-3 ">
        <div className="flex justify-end px-4 pb-2">
          <button onClick={reloadQuote}>🔄 refresh</button>
        </div>
        <div className="bg-neutral-300 relative rounded-xl px-5 pt-6">
          <p className="text-xl font-medium pb-6 leading-6">“{quote}“</p>
          <p className="absolute right-0  bottom-0 pr-3 text-sm text-black/60 pb-1">
            - Kanye West
          </p>
        </div>
        <div className="flex justify-center mt-72">
          👋{" "}
          <a
            className="text-blue-600 pl-2"
            href="https://twitter.com/victormtlindo"
            target="_blank"
          >
            @vitinhomtlindo
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
