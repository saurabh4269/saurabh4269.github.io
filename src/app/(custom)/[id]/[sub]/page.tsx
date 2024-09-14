import AppPageEntry from "../page";
import getAppPage from "@/components/cards/app-page/data/get-object";

export async function generateStaticParams() {
  const appPages = [
    { id: 'gymtracker', sub: 'privacy' },
    { id: 'gymtracker', sub: 'terms' },
    { id: 'radio', sub: 'privacy' },
    { id: 'radio', sub: 'terms' },
    { id: 'arabic-stories', sub: 'privacy' },
    { id: 'arabic-stories', sub: 'terms' },
  ];

  return appPages.map(({ id, sub }) => ({
    id,
    sub,
  }));
}

export default AppPageEntry;