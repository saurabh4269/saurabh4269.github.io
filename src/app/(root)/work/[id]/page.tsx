import AboutWork from "@/components/work/about-work";
import { generateStaticParams as getStaticParams } from "@/shared/utils/generateStaticParams";

// Use the centralized generateStaticParams function
export { getStaticParams as generateStaticParams };


export default function AboutWorkEntry({ params }: { params: any }) {
  const { id } = params;
  return <AboutWork id={id} />;
}

