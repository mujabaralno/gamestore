import Card from "@/components/shared/Card";
import NewsCollection from "@/components/shared/NewsCollection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/constants";

export default function Home() {
  return (
    <div className="w-full relative wrapper">
      <div className="flex flex-row gap-3 items-center border-b p-3">
        <Image src="/assets/svg/news.svg" width={50} height={50} alt="star" />
        <h1 className="h1-semibold text-[#f5f5f5]">News</h1>
      </div>
      <div className="mt-11 wrapper p-7 bg-[#1f1e1e] grid grid-cols-1 md:grid-cols-2 gap-5 rounded-xl">
        <Image
          width={500}
          height={1000}
          alt="news"
          src="/assets/images/honkaistarrail.jpeg"
          className="object-cover rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
          <p className="p-14-medium text-[#f5f5f5]">Honkai: Star Rail</p>
          <h3 className="h3-bold text-[#f5f5f5]">Robin</h3>
          </div>
          <p className="p-12-light text-[#f5f5f5]">
            Robin adalah karakter dalam game "Honkai: Star Rail" buatan
            HoYoverse, yang dikenal karena latar belakang cerita yang kaya dan
            mendalam. Ia memiliki kemampuan tempur yang unik dan keterampilan
            khusus, menjadikannya aset berharga dalam tim pemain.
          </p>
          <Link href="/news">
            <Button className="button">
              <p>Read More</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-11 w-full p-2 ">
        {newsItems.map((item, i) => {
            return (
                <NewsCollection 
                key={i}
                imgUrl={item.imgUrl}
                title={item.title}
                desc={item.desc}
                route={item.route}
                />
            )
        })}
      </div>
    </div>
  );
}
