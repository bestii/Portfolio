import IconSystem from "@/assets/icons/system.svg?inline";
import IconLight from "@/assets/icons/light.svg?inline";
import IconDark from "@/assets/icons/dark.svg?inline";
import IconSepia from "@/assets/icons/sepia.svg?inline";
import IconSetting from "@/assets/icons/setting.svg?inline";
export default {
  name: "ChangeColorMode",
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia,
    IconSetting
  },
  data() {
    return {
      colors: ["system", "light", "dark", "sepia"],
      isOpen: false
    };
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    },
    toggleSetting() {
      this.isOpen = !this.isOpen;
    }
  },
};
