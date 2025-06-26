import { ref } from 'vue'

export function usePaginated<T>() {
  const data = ref<T[]>([])
  const page = ref(1)
  const pageSize = ref(10)
  const total = ref(0)
  const loading = ref(false)

  function setResult(result: { items: T[]; total: number }) {
    data.value = result.items
    total.value = result.total
  }

  return { data, page, pageSize, total, loading, setResult }
}
