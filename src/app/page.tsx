import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="text-3xl px-20 py-40 flex flex-col absolute height-[10000]">
        
      <h1>Hi, I am </h1>
      <h1> Elizabeth Tse</h1>
         </div> */}
      <div className="py-100 relative flex h-screen overflow-hidden bg-[#8539bf] bg-linear-to-t from-[#C95FCB]">
        <Image
          className="absolute top-0 right-0 mx-120 p-10 my-5"
          src={"/sun.svg"}
          alt="sun"
          width={400}
          height={200}
        />
        <div className="">
          <Image
            className="absolute bottom-0 pb-35"
            src={"/mgbuildings.svg"}
            alt="middleground buildings"
            width={2000}
            height={500}
          />
          <Image
            className="absolute bottom-0 pb-35"
            src={"/fgbuildings.svg"}
            alt="foreground buildings"
            width={2000}
            height={500}
          />
          <Image
            className="absolute bottom-0"
            src={"/river.svg"}
            alt="river"
            width={2000}
            height={200}
          />
        </div>

        <div className="text-7xl px-30 flex flex-col absolute">
          <h1>Hi, I am </h1>
          <h1> Elizabeth Tse</h1>
        </div>
      </div>
      <div className="h-screen">
        <div>
          Ticker
        </div>
        About me
      </div>
    </div>
  );
}
