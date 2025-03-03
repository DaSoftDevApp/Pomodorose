import play from "../assets/play-button.svg"
import reset from "../assets/reset.svg"
import { useDispatch, useSelector } from "react-redux"
import { startChrono, resetChrono } from "../features/chrono"

export default function ToggleButton() {
  const dispatch = useDispatch()
  const chronoValues = useSelector(state => state.chrono)
  function toggleChrono() {
    if (!chronoValues.isPlaying) {
      dispatch(startChrono())
    }
    else {
      dispatch(resetChrono())
    }
  }
  return (
    <button
      onClick={toggleChrono}
      className="bg-rose hover:bg-rose-dark text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
    >
      {chronoValues.isPlaying ? "Pause" : "Start"}
    </button>
  )
}
