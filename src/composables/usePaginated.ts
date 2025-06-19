import { ref } from 'vue'

export function usePaginated() {
  const page = ref(1)
  const pageSize = ref(10)
  const total = ref(0)
  const setTotal = (t: number) => (total.value = t)
  const onChange = (p: number) => (page.value = p)
  return { page, pageSize, total, setTotal, onChange }
}
