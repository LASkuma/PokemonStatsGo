import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-shift-h'
    changePositionKey='ctrl-b'>
    <LogMonitor />
  </DockMonitor>
)
