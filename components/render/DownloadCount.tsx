export const revalidate = 60;

import { getDownloadCount } from "@/services/downloadCount";

const DownloadCount = async () => {
  const res = await getDownloadCount();
  const { totalCount } = res;

  return (
    <section className="py-20">
      <section className="text-center">
        <p className="text-7xl font-extrabold">{totalCount}</p>
        <p className="text-sm text-muted-foreground">
          total template downloads
        </p>
      </section>
    </section>
  );
};

export default DownloadCount;
