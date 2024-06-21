import IconTop from "@/assets/icons/top.svg?inline";

export default {
  name: "BackToTop",
  components: {
    IconTop
  },
  data() {
    return {
      visible: false,
      visibleoffset: 600,
      visibleoffsetbottom: 0
    };
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0 ?
        pastTopOffset && !pastBottomOffset :
        pastTopOffset;
    },
    backToTop() {
      window.smoothscroll();
    },
  },
};
