import React from 'react'
import { useDispatch } from 'react-redux'
import { updateChronoValues } from '../features/chrono'

export default function UpdateTimeButton({ sign, type }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(updateChronoValues({ type, value: sign === "+" ? 60 : - 60 }))
  }

  return (
    <button
      onClick={handleUpdate}
      className="w-8 h-8 rounded-full flex items-center justify-center bg-rose text-white hover:bg-rose-dark transition-colors"
    >
      {sign}
    </button>
  )
}
