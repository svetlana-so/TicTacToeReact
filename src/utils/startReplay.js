export const startReplay = (history, setReplayMode, handlePlay) => {
  let moveIndex = 1

  const replayInterval = setInterval(() => {
    if (moveIndex < history.length) {
      setReplayMode(true)
      handlePlay(history[moveIndex])
      moveIndex++
    } else {
      clearInterval(replayInterval)
    }
  }, 1000)
}
