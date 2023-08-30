 import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  // two ways 1:
  // const { count, inc } = useStore()
  // way 2 :and this one is better
  const count = useStore((state) => state.count)
  const inc = useStore((state) => state.inc)

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
export default Counter;