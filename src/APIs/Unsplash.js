import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "7wSyQgMpJYiWfW9u8wHNdOSFNRuOn-Uh4Mwje4v5Kuk",
});

export async function searchUnsplashPhotos(keyword, page, perPage) {
  try {
    const res = await unsplash.search.getPhotos({
      query: keyword,
      page: page,
      perPage: perPage,
    });
    if (res.type === "success") {
      return res.response;
    } else {
      console.log("Error:", res.errors);
    }
  } catch (err) {
    console.log("Error:", err);
  }
}