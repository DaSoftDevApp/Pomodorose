import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton from "./components/ToggleButton"
import { useSelector } from "react-redux"
import getFormattedValue from "./utils/getFormattedValue"

function App() {
  const chronoValues = useSelector(state => state.chrono)

  return (
    <div className=" bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 p-10 rounded ">
        <h1 className="text-3xl text-center mb-8">
          Pomodoro App
        </h1>
        <div className="flex justify-center mb-8">
          {/* Session block */}
          <div className="mr-10">
            <p className="mb-1 text-center">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>

          {/* Pauses block */}
          <div>
            <p className="mb-1 text-center">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>
        <p className="text-xl font-semibold text-center mb-2">
          {chronoValues.displayedValue.heading}
        </p>
        <p className="mb-1 flex justify-center">
          <span className="text-4xl bg-slate-300 p-4 rounded text-slate-900">
            {getFormattedValue(chronoValues.displayedValue.value)}
          </span>
        </p>
        <p className="mb-10 text-center">Passed cycle(s): {chronoValues.cycles}</p>
        <ToggleButton />
      </div>
    </div>
  )
}

export default App
