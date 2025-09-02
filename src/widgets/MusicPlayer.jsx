import React, { useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play(); setPlaying(true) } else { a.pause(); setPlaying(false) }
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <audio ref={audioRef} src="/assets/music.mp3" loop preload="none" />
      <button className="button button-ghost" onClick={toggle}>
        {playing ? '⏸️ Pause Music' : '▶️ Play Music'}
      </button>
      <small style={{ opacity: .7 }}>(optional – put your song at <code>public/assets/music.mp3</code>)</small>
    </div>
  )
}
