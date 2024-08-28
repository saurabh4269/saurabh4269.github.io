import AppPage from "@/components/cards/app-page/app-page";
import getAppPage from "@/components/cards/app-page/data/get-object";
import NotFound from "@/components/other/404";
import { generateStaticParams as getStaticParams } from "@/shared/utils/generateStaticParams";

// Use the centralized generateStaticParams function
export { getStaticParams as generateStaticParams };

export default function AppPageEntry({ params }: { params: { id: string } }) {
  const { id } = params;
  const page = getAppPage(id);

  if (!page) return <NotFound />;
  return <AppPage page={page} />;
}
