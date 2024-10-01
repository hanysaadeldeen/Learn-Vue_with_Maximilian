import { ref } from 'vue';

function useAlear() {
  const alertIsVisible = ref(false);
  const hello = ref('hello');
  function hideAlert() {
    alertIsVisible.value = false;
  }
  function showAlert() {
    alertIsVisible.value = true;
  }
  return [alertIsVisible, showAlert, hideAlert, hello];
}

export default useAlear;
