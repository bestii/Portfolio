export default {
  components: {},
  methods: {
    scrollToSection(contentId){
      document.getElementById(contentId).scrollIntoView({ block:'center', behavior: 'smooth'});
    }
  },
};
