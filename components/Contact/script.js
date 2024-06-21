import IconEmail from "@/assets/icons/contact/email.svg?inline";
import IconMobile from "@/assets/icons/contact/mobile.svg?inline";
import IconPin from "@/assets/icons/contact/pin.svg?inline";
import contactData from "../../assets/data/contact.json";
import axios from 'axios';
export default {
  name: "Contact",
  components: {
    IconEmail,
    IconMobile,
    IconPin
  },
  data() {
    return {
      title: contactData.title,
      description: contactData.description,
      email: contactData.email,
      mobile: contactData.mobile,
      address: contactData.address,
      contactName: "",
      contactEmail: "",
      contactMsg: "",
      errors: [],
      submitDisabled: false
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];
      if (!this.contactName) {
        this.errors.push('Name required.');
      }
      if (!this.contactEmail) {
        this.errors.push('Email required.');
      }
      if (!this.contactMsg) {
        this.errors.push('Message required.');
      }
      if (this.contactName && this.contactMsg && this.contactEmail) {
        this.errors = [];
        this.submitDisabled = true;
        var mailData = {
          name: this.contactName,
          email: this.contactEmail,
          message: this.contactMsg
        }
        this.sendMail(mailData);
      }
      e.preventDefault();
    },
    sendMail: function (mainContent) {

      axios({
          method: "post",
          url: "https://formsubmit.co/ajax/9e994e7a2bacb62d15c95af695aa2fe8",
          data: mainContent,
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then(function (response) {
          //handle success
          

        })
        .catch(function (response) {
          //handle error
          
        });
      this.showToast();
      this.clearForm();
    },
    clearForm: function () {
      this.contactName = "";
      this.contactEmail = "";
      this.contactMsg = "";
      this.submitDisabled = false;
    },
    showToast: function () {
      this.$toast.show({
        title: 'Success',
        message: 'Your message has been send to Bestin John.',
        timeout: 5
      });
    }
  }
};
