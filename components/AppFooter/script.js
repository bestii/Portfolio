import SocialLinks from '../SocialLinks';
import BackToTop from '../BackToTop';
export default {
  name: "AppFooter",
  components: {
    SocialLinks,
    BackToTop
  },
  data() {
    return {};
  },
  methods: {
    copyrightYear: function () {
      return new Date().getFullYear();
    }
  }
};
