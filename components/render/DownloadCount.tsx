import dbConnect from "@/lib/dbConnect";
import Stats from "@/models/Stats";

const DownloadCount = async () => {
  await dbConnect();

  const data = await Stats.findOne();
  const totalCount = data?.totalDownloads;

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
