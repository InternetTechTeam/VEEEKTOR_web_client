import React from 'react'
import TabOption from 'shared/ui/Tabs/TabOption';
import Tabs from 'shared/ui/Tabs/Tabs';
import { TABS_POSITION } from 'shared/ui/Tabs/config';

const NestedPageTypeTabs = () => {
  return (
    <Tabs position={TABS_POSITION.TOP}>
        <TabOption title="Лабораторные работы"/>
        <TabOption title="Тесты"/>
        <TabOption title="Информационные страницы"/>
    </Tabs>
  )
}

export default NestedPageTypeTabs;