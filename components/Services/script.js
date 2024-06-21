import servicesData from "../../assets/data/services.json";
export default {
  name: "Services",
  data() {
    return {
      title: servicesData.title,
      description: servicesData.description,
      services: servicesData.services
    }
  }
};
