import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-24 bg-white">
        <div className="flex h-full items-center justify-between w-full">
          <div className="flex h-full w-auto justify-left p-4 gap-10">
            <svg
              className="lg:hidden"
              width="60"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animate-burgerspintop"
                d="M 10 10 H 50 V 15 H 10 L 10 15"
              />
              <path d="M 10 30 H 50 V 35 H 10 L 10 35" />
            </svg>
            <Image
              src="/logos/Facebook_Logo_Primary.png"
              alt="fb_logo"
              width={60}
              height={60}
              className="w-[60px]"
            />
            <Image
              src="/logos/Instagram_Glyph_Gradient.png"
              alt="ig_logo"
              width={60}
              height={60}
              className="w-[60px]"
            />
            <Image
              src="/logos/TikTok_Icon_Black_Circle.png"
              alt="tiktok_logo"
              width={60}
              height={60}
              className="w-[60px]"
            />
          </div>
          <div className="flex h-full w-auto justify-right p-6">
            <button className="text-4xl">Contact</button>
          </div>
        </div>
      </div>
      <div className="w-full h-40 bg-white">
        <div className="flex h-full items-center justify-center w-full">
          <Image
            src="/logos/CC_Logo_2024.png"
            alt="classic_cream_logo"
            width={280}
            height={280}
            className="w-[280px]"
          />
        </div>
      </div>
      <div className="w-full h-64 bg-white">
        <div className="flex h-full items-center justify-center w-full">
          <Image
            src="/aerosol_cans/CT_Marshmallow_Front.png"
            alt="marshmallow_can"
            width={250}
            height={250}
            className="w-[250px] h-[250px]"
          />
          <Image
            src="/aerosol_cans/CT_Salted_Caramel_Front.png"
            alt="caramel_can"
            width={275}
            height={275}
            className="w-[275px]"
          />
          <Image
            src="/aerosol_cans/CT_Vanilla_Front.png"
            alt="vanilla_can"
            width={250}
            height={250}
            className="w-[250px] h-[250px]"
          />
        </div>
        <div className="w-full h-96 bg-white">
          <div className="flex h-full items-center justify-center w-full">
            <Image
              src="/destini_still.png"
              alt="destini-screen-capture"
              width={600}
              height={600}
              className="w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
