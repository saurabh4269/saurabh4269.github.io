// src/utils/generateStaticParams.ts

// Replace with your actual logic to fetch or define dynamic IDs
export async function generateIds(): Promise<string[]> {
    return ['id1', 'id2', 'id3']; // Example static IDs
  }
  
  export async function generateStaticParams(): Promise<{ id: string }[]> {
    const ids = await generateIds();
    return ids.map(id => ({ id }));
  }
  
  export async function generateSubParams(): Promise<{ id: string; sub: string }[]> {
    const ids = await generateIds();
    const subs = ['sub1', 'sub2', 'sub3']; // Example static sub IDs
    const params: { id: string; sub: string }[] = [];
  
    ids.forEach(id => {
      subs.forEach(sub => {
        params.push({ id, sub });
      });
    });
  
    return params;
  }
  