import aboutData from "../../assets/data/about.json";
export default {
  name: "AboutMe",
  data() {
    return {
      title: aboutData.title,
      description: aboutData.description,
      mainDescription1: aboutData.mainDescription1,
      mainDescription2: aboutData.mainDescription2,
      skillList1: aboutData.skillList1,
      skillList2: aboutData.skillList2,
      skillBar: aboutData.skillBar
    }
  }
};
