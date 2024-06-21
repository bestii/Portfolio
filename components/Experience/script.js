import Timeline from "../Timeline";
import timelineData from "../../assets/data/experience.json";
export default {
  name: "Experience",
  components: {
    Timeline
  },
  data() {
    return {
      title: timelineData.title,
      description: timelineData.description,
      education: timelineData.education,
      profession: timelineData.profession
    };
  }
};
