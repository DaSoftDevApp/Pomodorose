import { useDispatch, useSelector } from "react-redux"
import { startChrono, resetChrono } from "../features/chrono"
import Button from '@mui/material/Button';

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
    <Button
      variant="contained"
      onClick={toggleChrono}
      className="!bg-rose-400 hover:!bg-rose-500 text-white font-medium px-8 py-3 rounded-full"
    >
      {chronoValues.isPlaying ? "Pause" : "Start"}
    </Button>
  )
}

// className="bg-rose hover:bg-rose-dark text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
