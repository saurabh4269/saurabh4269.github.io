import AppPageEntry from "../page";
import { generateStaticParams as getStaticParams } from "@/shared/utils/generateStaticParams";

// Use the centralized generateStaticParams function
// export { getStaticParams as generateStaticParams };

export async function generateStaticParams(): Promise<{ id: string; sub: string }[]> {
    // Replace these with your actual dynamic values or fetch them from an API
    const ids = ['id1', 'id2', 'id3'];
    const subs = ['sub1', 'sub2', 'sub3'];
  
    // Explicitly type the params array
    const params: { id: string; sub: string }[] = [];
  
    // Generate all possible combinations of id and sub
    ids.forEach(id => {
      subs.forEach(sub => {
        params.push({ id, sub });
      });
    });
  
    return params;
  }

export default AppPageEntry;
  