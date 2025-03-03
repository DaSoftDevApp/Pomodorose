import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton from "./components/ToggleButton"
import VideoPlayer from "./components/VideoPlayer"
import { useSelector } from "react-redux"
import getFormattedValue from "./utils/getFormattedValue"

function App() {
  const chronoValues = useSelector(state => state.chrono)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-light via-cream to-rose-light p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl text-center font-serif italic text-rose-dark mb-2">
          Pomodorose
        </h1>
        <p className="text-center text-rose mb-12 font-light">
          Bloom with every focused moment
        </p>

        {/* Main Timer Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose/10">

          {/* Timer Controls */}
          <div className="flex justify-center gap-16 mb-12">
            {/* Session block */}
            <div className="text-center">
              <p className="mb-3 text-rose-dark font-medium">Work Session</p>
              <div className="flex items-center bg-rose-light/50 rounded-lg p-2">
                <UpdateTimeButton sign={"-"} type={"session"} />
                <p className="mx-4 text-2xl text-rose-dark font-semibold min-w-[40px]">
                  {chronoValues.session.value / 60}
                </p>
                <UpdateTimeButton sign={"+"} type={"session"} />
              </div>
            </div>

            {/* Pauses block */}
            <div className="text-center">
              <p className="mb-3 text-rose-dark font-medium">Break Time</p>
              <div className="flex items-center bg-rose-light/50 rounded-lg p-2">
                <UpdateTimeButton sign={"-"} type={"pause"} />
                <p className="mx-4 text-2xl text-rose-dark font-semibold min-w-[40px]">
                  {chronoValues.pause.value / 60}
                </p>
                <UpdateTimeButton sign={"+"} type={"pause"} />
              </div>
            </div>
          </div>

          {/* Timer Display */}
          <div className="text-center mb-8">
            <p className="text-xl text-rose-dark mb-4">
              {chronoValues.displayedValue.heading}
            </p>
            <div className="inline-block bg-white rounded-2xl p-6 shadow-inner-rose">
              <span className="text-5xl font-mono text-rose-dark">
                {getFormattedValue(chronoValues.displayedValue.value)}
              </span>
            </div>
            <p className="mt-4 text-rose">
              Completed cycles: <span className="font-medium">{chronoValues.cycles}</span>
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-center mb-8">
            <ToggleButton />
          </div>

          {/* Video Player */}
          <VideoPlayer />
        </div>
      </div>
    </div>
  )
}

export default App