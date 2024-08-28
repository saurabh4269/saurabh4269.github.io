import getAppPage from "@/components/cards/app-page/data/get-object";
import Privacy from "@/components/cards/app-page/privacy";
import NotFound from "@/components/other/404";
import { generateStaticParams as getStaticParams } from "@/shared/utils/generateStaticParams";

// Use the centralized generateStaticParams function
export { getStaticParams as generateStaticParams };

export default function PrivacyEntry({ params }: { params: any }) {
  const { id } = params;
  const page = getAppPage(id);
  
  if (!page) return <NotFound />;
  
  return <Privacy page={page} />;
}
