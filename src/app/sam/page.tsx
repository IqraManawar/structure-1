import Image from "next/image";

export default function SampleProject(){
    return(
        <div>
            <h1 className="absolute w-[387Hug] h-[64Hug] left-[135px] top-[165px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Sample <br/> <span className="font-bold text-[black]">Project 1</span></h1>

            <Image src="/p1.png" alt="project1 Image1" width={1170} height={435} className="absolute w-[1170px] h-[435px] left-[135px] top-[353px]" />
            <Image src="/p2.png" alt="project1 Image1" width={419} height={428} className="absolute w-[419px] h-[428px] left-[135px] top-[818px]"/>
            <p className="absolute w-[721px] h-[428px] left-[584px] top-[818px] font-['Roboto'] font-light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae voluptas mollitia obcaecati reiciendis eaque odio nisi. Architecto porro unde magnam quas beatae facere laudantium consequatur rem neque expedita maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat illo iste tempora nisi voluptas tenetur neque ad id sapiente rerum cupiditate eum facere dignissimos dolor architecto nam dolore. Consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro quo ab rem laborum minima iste sunt pariatur perspiciatis Libero officiis porro repudiandae excepturi necessitatibus Earum quam maxime neque hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae ratione quod sit. Ullam minus impedit labore quisquam numquam perspiciatis inventore molestias libero officiis voluptates Delectus a veritatis sapiente unde
            </p>
            <Image src="/p3.png" alt="project1 Image1" width={1170} height={435} className="absolute w-[1170px] h-[435px] left-[135px] top-[1276px]"/>
            
        </div>
    )
}