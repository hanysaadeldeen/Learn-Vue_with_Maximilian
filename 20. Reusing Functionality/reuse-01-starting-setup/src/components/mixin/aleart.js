export default {
  data() {
    return {
      alertIsVisible: false,
      name: 'ahmed mixin',
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
