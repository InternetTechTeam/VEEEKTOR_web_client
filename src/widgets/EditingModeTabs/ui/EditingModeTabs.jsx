import React from 'react'
import TabOption from 'shared/ui/Tabs/TabOption'
import Tabs from 'shared/ui/Tabs/Tabs'
import { TABS_POSITION } from 'shared/ui/Tabs/config'
import { CoursePropertiesEditingMode } from 'widgets/CoursePropertiesEditingMode'
import { MainPageEditingMode } from 'widgets/MainPageEditingMode'
import { MarkdownViewTabs } from 'widgets/MarkdownViewTabs'
import NestedPagesEditingMode from 'widgets/NestedPagesEditingMode/ui/NestedPagesEditingMode'

const EditingModeTabs = () => {
  return (
    <Tabs position={TABS_POSITION.TOP} onFullPage={false}>
        <TabOption
        title={"Свойства курса"}
        content={<CoursePropertiesEditingMode/>}
        />
        <TabOption
        title={"Главная страница"}
        content={<MainPageEditingMode/>}
        />
        <TabOption
        title={"Вложенные страницы"}
        content={<NestedPagesEditingMode/>}
        />
    </Tabs>
  )
}

export default EditingModeTabs