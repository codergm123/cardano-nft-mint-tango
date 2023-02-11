import React, { useState, useEffect } from "react";

const Mint = () => {

  const [salePhase, setSalePhase] = useState("");
  const [saleText, setSaleText] = useState("");

  useEffect(() => {
    const today = new Date();
    const freeStartday = new Date("2023-02-10");
    const halfStartday = new Date("2023-02-11");
    const fullStartday = new Date("2023-02-13");

    const currentTime = today.getTime();
    const freeTime = freeStartday.getTime();
    const halfTime = halfStartday.getTime();
    const fullTime = fullStartday.getTime();

    if (currentTime >= freeTime && currentTime < halfTime) {
        setSalePhase("free");
        setSaleText("Minting price tier: 6 ADA per NFT");
    } else if (currentTime >= halfTime && currentTime < fullTime) {
        setSalePhase("half");
        setSaleText("Minting price tier: 52 ADA per NFT, 200 ADA per 5 NFT");
    } else if (currentTime >= fullTime) {
        setSalePhase("full");
        setSaleText("Minting price tier: 102 ADA per NFT, 400 ADA per 5 NFT");
    } else {
        setSalePhase("notTime"); 
        setSaleText("Minting is not started yet.");
    }
  }, []);

  const onMint1 = (event: any) => {
    event.preventDefault();
    Mint(1);
  };

  const onMint5 = (event: any) => {
    event.preventDefault();
    Mint(5);
  };

  const Mint = async (number: any) => {
    if (salePhase == "free") {
        //
        location.replace("https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncnliNTlyYnZ2djJzY3lqYTFudDRmYjgiLCJwaGFzZV9pZCI6IjAxZ3J5ZXFmcWZtNTV0c2FzYWQyMDZkbnB3IiwicHJpY2VfaWQiOiIwMWdyeWVxZnFlandhemZrMWY5d3lyODU5cSIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrSytxaEJLcC9Wbm9kbUdLaTE3VFYySnZDSkFHTDh6MDZzdTBsQVhrN2FhM1FKUVBHekhVVXZvQXRHT21NbmVFVWUzV1VhQks1aUVZMGJ4Zit1OC82RFpBdjF1d2V5WHQza0JqZEF3UFZBZz09In0");
    } else if (salePhase == "half") {
      if (number == 1) {
        //
        location.replace("https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncnliNTlyYnZ2djJzY3lqYTFudDRmYjgiLCJwaGFzZV9pZCI6IjAxZ3J5ZXN2eXdobnJlOWhhMG5iYzJhY2dnIiwicHJpY2VfaWQiOiIwMWdyeWVzdnh2Zjc1YWV6ZzZyajlyZWZidyIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrSytxaEJLcC9Wbm9kbUdLaTE3VFYySnZDSkFHTDh6MDZzdTBsQVhrN2FhM1FKUVBHekhVVXZvQXRHT21NbmVFVWUzV1VhQks1aUVZMGJ4Zit1OC82RFpBdjF1d2V5WHQza0JqZEF3UFZBZz09In0");
      } else {
        //
        location.replace("https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncnliNTlyYnZ2djJzY3lqYTFudDRmYjgiLCJwaGFzZV9pZCI6IjAxZ3J5ZXN2eXdobnJlOWhhMG5iYzJhY2dnIiwicHJpY2VfaWQiOiIwMWdyeWVzdnh2ZGpzYXlwZXN4Z2tmbTdkOSIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrSytxaEJLcC9Wbm9kbUdLaTE3VFYySnZDSkFHTDh6MDZzdTBsQVhrN2FhM1FKUVBHekhVVXZvQXRHT21NbmVFVWUzV1VhQks1aUVZMGJ4Zit1OC82RFpBdjF1d2V5WHQza0JqZEF3UFZBZz09In0");
      }
    } else if (salePhase == "full") {
      if (number == 1) {
        //
        location.replace("https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncnliNTlyYnZ2djJzY3lqYTFudDRmYjgiLCJwaGFzZV9pZCI6IjAxZ3J5ZXdoYzZqcDl5dnRyZDZtbWF2ajk4IiwicHJpY2VfaWQiOiIwMWdyeWV3aGM1MGZheXo0MzE3OHdqbjFxNCIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrSytxaEJLcC9Wbm9kbUdLaTE3VFYySnZDSkFHTDh6MDZzdTBsQVhrN2FhM1FKUVBHekhVVXZvQXRHT21NbmVFVWUzV1VhQks1aUVZMGJ4Zit1OC82RFpBdjF1d2V5WHQza0JqZEF3UFZBZz09In0");
      } else {
        //
        location.replace("https://buy.tangocrypto.com?q=eyJjb2xsZWN0aW9uX2lkIjoiMDFncnliNTlyYnZ2djJzY3lqYTFudDRmYjgiLCJwaGFzZV9pZCI6IjAxZ3J5ZXdoYzZqcDl5dnRyZDZtbWF2ajk4IiwicHJpY2VfaWQiOiIwMWdyeWV3aGM1YWczNmFtMjVlNjVmY2R2NSIsInR5cGUiOiJQaGFzZVNhbGUiLCJpc19yYW5kb20iOnRydWUsInRjYyI6InFYK3BnSVJtNEJuYlVUdlJxc3hrSytxaEJLcC9Wbm9kbUdLaTE3VFYySnZDSkFHTDh6MDZzdTBsQVhrN2FhM1FKUVBHekhVVXZvQXRHT21NbmVFVWUzV1VhQks1aUVZMGJ4Zit1OC82RFpBdjF1d2V5WHQza0JqZEF3UFZBZz09In0");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="bg-black">
        <div className="max-w-screen-2xl  mx-auto my-16">
          <div className="flex flex-col items-center text-center mx-auto">
            {/* <p className="text-gray-400 font-logo uppercase mb-4 tracking-widest font-benji">SOLD OUT</p> */}
            <h1 className="font-logo text-white text-5xl font-bold uppercase font-benji">POKER FACES POKER CLUB</h1>
            <p className="max-w-2xl text-white text-2xl	my-8 font-light leading-10">PFPC is a Cardano NFT pfp collection and poker-obsessed community featuring 10,000 Poker Faces, each having a unique blend of attributes inspired by iconic reactions at the poker tables.</p>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Network</div>
                <p className="">Cardano</p>
              </div>
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Supply</div>
                <p>9999</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className="w-full mt-8 flex flex-col sm:flex-row sm:justify-center gap-2.5 font-body">
              { 
                (salePhase != "notTime") ?              
                  <button onClick = {onMint1} className="w-full rounded-lg mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-2xl md:text-xl text-center text-black	outline-none transition duration-100 px-10 py-5 uppercase w-full">
                    Mint 1 NFT
                  </button>
                :
                  <button onClick = {onMint1} className="w-full rounded-lg mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-2xl md:text-xl text-center text-black  outline-none transition duration-100 px-10 py-5 uppercase w-full bg-slate-400 hover:bg-slate-400" disabled>
                    Mint 1 NFT
                  </button>
              }
              </div>
              <div className="w-full mt-8 flex flex-col sm:flex-row sm:justify-center gap-2.5 font-body">              
              { 
                ((salePhase == "full")) ?  
                  <button onClick = {onMint5} className="w-full rounded-lg mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-2xl md:text-xl text-center text-black outline-none transition duration-100 px-10 py-5 uppercase w-full">
                    Mint 5 NFT
                  </button>
                :
                  <button onClick = {onMint5} className="w-full rounded-lg mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-2xl md:text-xl text-center text-black outline-none transition duration-100 px-10 py-5 uppercase w-full bg-slate-400 hover:bg-slate-400" disabled>
                    Mint 5 NFT
                  </button>
              }
              </div>
            </div>
            <p className="max-w-2xl text-white text-2xl my-8 font-light leading-10 text-amber-500">{saleText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;