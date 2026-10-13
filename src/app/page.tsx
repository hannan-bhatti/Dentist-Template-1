import { heroData, specialtiesData, doctorsData, trustSignals, faqData } from '@/lib/mockData';
import { HomeClientWrapper } from './HomeClientWrapper';

export default function Home() {
  return (
    <HomeClientWrapper 
      heroData={heroData}
      specialtiesData={specialtiesData}
      doctorsData={doctorsData}
      trustSignals={trustSignals}
      faqData={faqData}
    />
  );
}
