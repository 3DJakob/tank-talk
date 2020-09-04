import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const settings = { language: 'sv-SE', continuous: true }

const VoiceRecognition = () => {
  const [message, setMessage] = useState('')
  // const { transcript, resetTranscript } = useSpeechRecognition()

  const commands = [
    {
      command: 'höger *',
      callback: (foo) => console.log('höger')
    }
  ]

  const { transcript, resetTranscript } = useSpeechRecognition({ commands })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <p>Your browser does not support speech recognition.</p>
    )
  }

  return (
    <div>
      <p>Test</p>
      <button onClick={() => SpeechRecognition.startListening(settings)}>Start</button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default VoiceRecognition
