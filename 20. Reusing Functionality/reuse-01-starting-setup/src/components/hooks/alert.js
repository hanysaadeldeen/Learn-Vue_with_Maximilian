import { ref } from 'vue';

function useAlear(value) {
  const alertIsVisible = ref(false);
  const hello = ref(value);
  function hideAlert() {
    alertIsVisible.value = false;
  }
  function showAlert() {
    alertIsVisible.value = true;
  }
  return [alertIsVisible, showAlert, hideAlert, hello];
}

export default useAlear;
