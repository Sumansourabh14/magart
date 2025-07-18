import axios from "axios";

export const updateDownloadCount = async (templateId: string) => {
  try {
    await axios.post(`/api/increment-download`, {
      templateId,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDownloadCount = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/template-download-count`,
      {
        next: { revalidate: 60 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
