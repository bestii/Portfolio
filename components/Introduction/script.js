import introData from "../../assets/data/introduction.json";
export default {
  name: "Introduction",
  data() {
    return {
      introText: introData.introText,
      name: introData.name,
      caption: introData.caption,
      description: introData.description,
      bgImg: {
        smallImg: `@/assets/img/${introData.bgImg.smallImg}`,
        largeImg: `@/assets/img/${introData.bgImg.largeImg}`
      }
    }
  }
};
