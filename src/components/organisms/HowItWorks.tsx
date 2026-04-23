import SectionCard from "../molecules/SectionCard";
import {SectionCardData} from '../../utils/data'
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations('sectionCard')

  
  return (
    <div className=" text-white !p-2 container !mx-auto !my-5 grid grid-cols-1 md:grid-cols-3  gap-11 ">
       {SectionCardData.map((card) => {
         return (
           <SectionCard 
             key={card.id}
             title={t(card['title']) }
             text={t(card['text'])}
           />
         );
       })}
    </div>
  );
}
