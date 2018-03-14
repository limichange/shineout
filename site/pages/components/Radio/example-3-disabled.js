/**
 * cn - 禁用
 * en - Disabled
 */
import React from 'react'
import { Radio } from 'shineout'

const data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']

export default function () {
  return (
    <div>
      <Radio.Group
        disabled
        data={data}
        value="blue"
        renderItem={d => d}
      />
    </div>
  )
}