import { instagramUsername, linkedinUsername, title, twitterUsername, username, youtubeUsername } from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + twitterUsername,
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + username,
  instagram: "https://instagram.com/" + instagramUsername,
  youtube: "https://youtube.com/@" + youtubeUsername,
};

export const sourceCode = linksMetadata.github + "/" + title + ".github.io";

export default linksMetadata;
