import Card from "@/components/custom/Card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Swiper1 from "@/components/custom/Swiper";
import Testimonial from "@/components/custom/Testimonial";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-screen w-full max-md:flex flex-col max-md:bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle1.png')" }}>
        <div className="flex items-start justify-start h-full">
          <div className="w-1/2 ml-12 mt-10">
            <Image src="/Vector.png" alt="dasd" width={20} height={40} />
            <Image src="/Vector.png" alt="dasd" width={40} height={60} className="right-10 absolute" />
            <h1 className="p-1 text-7xl max-md:text-4xl font-extrabold text-nowrap">FIND CLOTUS <br /> THAT MATCH <br /> YOUR STYLE   </h1>
            <p className="font-light p-1 max-md:text-sm ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button className="rounded-xl m-2">
              Shop Now
            </Button>
            <div className=" flex items-center p-2 gap-1">
              <div className="flex items-start flex-col border-r p-2 border-black ">
                <h2 className="text-2xl font-bold">200+</h2>
                <p>International Brands</p>
              </div>
              <div className="flex items-start flex-col border-r p-2 border-black ">
                <h2 className="text-2xl font-bold">20000+</h2>
                <p>High Quality Product</p>
              </div>
              <div className="flex items-start flex-col  p-2 border-black ">
                <h2 className="text-2xl font-bold">30000+</h2>
                <p>Happy Customs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this branner */}
      <div className="flex items-center justify-around gap-2 w-full bg-black p-4
">

        <Image src="/Group1.png" alt="dasd" width={200} height={500} />
        <Image src="/gucci-logo-1.png" alt="dasd" width={200} height={500} />
        <Image src="/prada-logo-1.png" alt="dasd" width={200} height={500} />
        <Image src="/zaralogo.png" alt="dasd" width={150} height={400} />
      </div>
      <div className="p-4">
        <h1 className="text-4xl max-md:text-3xl font-extrabold items-center flex justify-center">NEW ARRIVALS</h1>


        <div className="">
          <div className="grid grid-cols-4 max-md:grid-cols-2 mt-10">

            <Card imageUrl="/Frame 38.png" name={"T-Shirt best"} price="130" />
            <Card imageUrl={"/Frame 33.png"} name={"T-Shirt best"} price="130" />
            <Card imageUrl={"/Frame 33 (1).png"} name={"T-Shirt best"} price="130" />
            <Card imageUrl={"/Frame 34 (1).png"} name={"T-Shirt best"} price="130" />
          </div>
          <div className="flex items-center justify-center pt-5 pb-2 w-full">
            <Button className=" rounded-2xl p-2 ">
              View All
            </Button>
          </div>
        </div>

        <div className="p-4 border-t border-black">
          <h1 className="text-4xl font-extrabold items-center flex justify-center">TOP SALES</h1>

          <div className="grid grid-cols-4 mt-10 max-md:grid-cols-2">

            <Card imageUrl="/Frame 32.png" name={"T-Shirt best"} price="130" />
            <Card imageUrl={"/Frame 38.png"} name={"T-Shirt best"} price="130" />
            <Card className="max-md:hidden" imageUrl={"/Frame 38 (1).png"} name={"T-Shirt best"} price="130" />
            <Card className="max-md:hidden" imageUrl={"/Frame 32 (1).png"} name={"T-Shirt best"} price="130" />
          </div>
          <Button>
            View All
          </Button>
        </div>
        {/* Banner  */}
        <div className="w-full h-full flex items-center justify-center ">
          <div className="bg-zinc-200 rounded-2xl w-5/6 max-md:w-full  relative pb-10 flex items-center justify-center flex-col gap-2 ">
            <h1 className="pt-5 pb-5 text-3xl max-md:text-2xl p-2 font-extrabold">BROWSE BY DRESS STYLE</h1>
            <div className="flex max-md:flex-col relative items-center justify-center gap-2 w-full ">
              <div className="relative w-3/12 max-md:w-11/12  h-44 overflow-hidden rounded-lg">
                <Image
                  src={"/image 11.png"}
                  alt={"alt"}
                  width={200}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-start p-2 justify-start ">
                  <p className="text-text text-1xl font-semibold">Casual</p>
                </div>
              </div>
              <div className="relative w-1/2 max-md:w-11/12  overflow-hidden rounded-lg h-44">
                <Image
                  src={"/image 13.png"}
                  alt={"alt"}
                  width={1000}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-start p-2 justify-start ">
                  <p className="text-text text-1xl font-semibold">Formal</p>
                </div>
              </div>
            </div>
            <div className="flex max-md:flex-col relative items-center justify-center gap-2 w-full ">
              <div className="relative w-3/12 max-md:w-11/12 h-44 overflow-hidden rounded-lg">
                <Image
                  src={"/image 12.png"}
                  alt={"alt"}
                  width={200}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-start p-2 justify-start ">
                  <p className="text-text text-1xl font-semibold">Party</p>
                </div>
              </div>
              <div className="relative w-1/2 max-md:w-11/12  overflow-hidden rounded-lg h-44">
                <Image
                  src={"/image 14.png"}
                  alt={"alt"}
                  width={1000}
                  height={200}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-start p-2 justify-start ">
                  <p className="text-text text-1xl font-semibold">Sport</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/*  */}

        <div className=" flex flex-col mt-10 items-center justify-center">
          <h1 className="text-2xl font-extrabold pt-4 pb-4 ">OUR HAPPY CUSTOMERS</h1>
          <div className="flex items-center justify-between gap-2 w-full">
            {/* tentmonials */}

            <Testimonial />




          </div>
        </div>
        {/* Contant */}

      </div>
      <div className="mt-10 flex  items-center justify-center">
        <div className="w-full flex  items-center justify-center flex-col">
          <div className="w-4/5 max-md:w-11/12 bg-black  text-white p-4 rounded-3xl flex ">
            <div className="flex items-center max-md:flex-col gap-2 w-full justify-between p-5">
              <h1 className="text-3xl font-extrabold">STAY UPTO DATE ABOUT  <br /> OUR LATEST OFFERS</h1>
              <div className="flex flex-col w-72 gap-2">
                <Input className="rounded-3xl text-black bg-white " placeholder="Serach .." />
                <Button className="rounded-3xl text-black bg-white">Subscribe For Newletter</Button>
              </div>
            </div>
          </div>
          <footer className="w-full bg-slate-200">
            <div className=" h-96 max-md:h-auto grid max-md:grid-cols-2  w-full grid-cols-5 items-center justify-around gap-2 border-b ">
              <div className="p-2">
                <Link href="/" className="text-2xl font-bold text-gray-800 pl-2">
                  <Image src="/SHOP.CO.png" alt="Shop Logo" width={150} height={400} />
                </Link>
                <p className="font-light text-sm p-2">We have clothes that suits your <br /> style and which you’re proud to wear. From women to men.</p>
                <div className="flex gap-2 p-2">
                  <FaGithub className="w-8 h-10" />
                  <FaFacebook className="w-8 h-10" />
                  <FaInstagram className="w-8 h-10" />
                  <FaTwitter className="w-8 h-10" />
                </div>
              </div>
              <div className=" flex flex-col gap-2 ml-2  ">
                <h2 className="font-bold text-2xl">COMPANY</h2>
                <Link className="font-extralight text-sm" href='/'>About</Link>
                <Link className="font-extralight text-sm" href='/'>Feature</Link>
                <Link className="font-extralight text-sm" href='/'>Work</Link>
                <Link className="font-extralight text-sm" href='/'>Carrer</Link>
              </div>
              <div className=" flex flex-col gap-2 ml-2  ">
                <h2 className="font-bold text-2xl">HELP</h2>
                <Link className="font-extralight text-sm" href='/'>Customer Support</Link>
                <Link className="font-extralight text-sm" href='/'>Delivery Details</Link>
                <Link className="font-extralight text-sm" href='/'>Terms & condition</Link>
                <Link className="font-extralight text-sm" href='/'>Privery policy</Link>
              </div>
              <div className=" flex flex-col gap-2 ml-2  ">
                <h2 className="font-bold text-2xl">FAQ</h2>
                <Link className="font-extralight text-sm" href='/'>Account</Link>
                <Link className="font-extralight text-sm" href='/'>Manage Deliveries</Link>
                <Link className="font-extralight text-sm" href='/'>Orders</Link>
                <Link className="font-extralight text-sm" href='/'>Payments</Link>
              </div>
              <div className=" flex flex-col gap-2 ml-2  ">
                <h2 className="font-bold text-2xl">RESOURCES</h2>
                <Link className="font-extralight text-sm" href='/'>Free eBook</Link>
                <Link className="font-extralight text-sm" href='/'>Development tutorial</Link>
                <Link className="font-extralight text-sm" href='/'>How to - Blog</Link>
                <Link className="font-extralight text-sm" href='/'>Youtube Playlist</Link>
              </div>
            </div>
            <div className="flex items-center justify-between pl-2 pr-2 mb-5 mt-5">
              <p className="font-extralight text-sm">Shop.co @2024-2202 . All RIght Reserved</p>
              <div className="flex gap-4 items-center justify-around pr-10">
                {/* Payment */}
                <Image src="/pay.png" alt="dasd" width={40} height={40} />
                <Image src="/paypal.png" alt="dasd" width={40} height={40} />
                <Image src="/Mastercard.png" alt="dasd" width={40} height={40} />
                <Image src="/Visa.png" alt="dasd" width={40} height={40} />
              </div>
            </div>

          </footer>
        </div>

      </div>
    </>
  );
}