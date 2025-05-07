import React from 'react'
import { useDispatch } from 'react-redux'
import { updateChronoValues } from '../features/chrono'
import IconButton from '@mui/material/IconButton'
import PlusIcon from '@mui/icons-material/AddCircle';
import MinusIcon from '@mui/icons-material/RemoveCircle'

export default function UpdateTimeButton({ sign, type }) {
  const dispatch = useDispatch();

  function handleUpdate() {
    dispatch(updateChronoValues({ type, value: sign === "+" ? 60 : - 60 }))
  }

  return (
    <IconButton onClick={handleUpdate} className='w-8 h-8 flex items-center justify-center'>
      {sign === "-" ? <MinusIcon className=' bg-rose text-white hover:bg-rose-dark transition-colors rounded-full' /> : <PlusIcon className=' bg-rose text-white hover:bg-rose-dark transition-colors rounded-full' />}
    </IconButton>
  )
}
