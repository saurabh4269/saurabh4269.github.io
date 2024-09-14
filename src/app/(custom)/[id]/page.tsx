import AppPage from "@/components/cards/app-page/app-page";
import getAppPage from "@/components/cards/app-page/data/get-object";
import NotFound from "@/components/other/404";

export async function generateStaticParams() {
  return ['gymtracker', 'radio', 'arabic-stories'].map(id => ({ id }));
}

export default function AppPageEntry({ params }: { params: { id: string } }) {
  const { id } = params;
  const page = getAppPage(id);

  if (!page) return <NotFound />;
  return <AppPage page={page} />;
}