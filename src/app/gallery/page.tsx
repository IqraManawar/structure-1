import Image from "next/image";



export default function Gallery(){
    return(
        <div>
            <div>
                <h1 className="absolute w-[277.76Hug] h-[64Hug] left-[135px] top-[165px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Photo <br/><span className="font-bold text-[black]">Gallery</span></h1>

                <Image src="/g1.png" alt="galleryImage1" width={210} height={260} className="absolute w-[210px] h-[260px] left-[135px] top-[354px]" />
                <Image src="/g2.png" alt="galleryImage2" width={210} height={260} className="absolute w-[210px] h-[260px] left-[375px] top-[354px]" />
                <Image src="/g3.png" alt="galleryImage3" width={210} height={260} className="absolute w-[210px] h-[260px] left-[615px] top-[354px]" />
                <Image src="/g4.png" alt="galleryImage4" width={210} height={260} className="absolute w-[210px] h-[260px] left-[855px] top-[354px]"/>
                <Image src="/g5.png" alt="galleryImage5" width={210} height={260} className="absolute w-[210px] h-[260px] left-[1095px] top-[354px]" />
                <Image src="/g6.png" alt="galleryImage6" width={210} height={260} className="absolute w-[210px] h-[260px] left-[135px] top-[644px]" />
                <Image src="/g7.png" alt="galleryImage7" width={210} height={260} className="absolute w-[210px] h-[260px] left-[375px] top-[644px]"/>
                <Image src="/g8.png" alt="galleryImage8" width={210} height={260} className="absolute w-[210px] h-[260px] left-[615px] top-[644px]" />
                <Image src="/g9.png" alt="galleryImage9" width={210} height={260} className="absolute w-[210px] h-[260px] left-[855px] top-[644px]" />
                <Image src="/g10.png" alt="galleryImage10" width={210} height={260} className="absolute w-[210px] h-[260px] left-[1095px] top-[644px]" />
            </div>
            
        </div>
    )
}