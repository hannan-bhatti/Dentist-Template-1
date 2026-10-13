import { specialtiesData } from '@/lib/mockData';
import { ServicesClientWrapper } from './ServicesClientWrapper';

export default function ServicesPage() {
  return <ServicesClientWrapper specialtiesData={specialtiesData} />;
}
