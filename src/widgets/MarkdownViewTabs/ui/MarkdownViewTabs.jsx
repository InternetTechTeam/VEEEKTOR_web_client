import React from 'react'
import TabOption from 'shared/ui/Tabs/TabOption'
import Tabs from 'shared/ui/Tabs/Tabs'
import { TABS_POSITION } from 'shared/ui/Tabs/config'
import { MarkdownEditing } from 'widgets/MarkdownEditing'
import { MarkdownPreview } from 'widgets/MarkdownPreview'
import { MarkdownSplit } from 'widgets/MarkdownSplit'

const MarkdownViewTabs = () => {
  return (
    <Tabs position={TABS_POSITION.LEFT}>
        <TabOption title="preview" content={<MarkdownPreview/>}/>
        <TabOption title="edit" content={<MarkdownEditing/>}/>
        <TabOption title="split" content={<MarkdownSplit/>}/>
    </Tabs>
  )
}

export default MarkdownViewTabs