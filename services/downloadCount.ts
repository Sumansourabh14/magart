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

export const getDownloadCount = async (templateId: string) => {
  try {
    const res = await fetch(`/api/template-download-count?id=${templateId}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
