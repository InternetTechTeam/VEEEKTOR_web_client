import { selectInfos, selectLabs, selectTests } from 'app/store/slices/nestedPages/selectors';
import React from 'react'
import { useSelector } from 'react-redux';
import TabOption from 'shared/ui/Tabs/TabOption';
import Tabs from 'shared/ui/Tabs/Tabs';
import { TABS_POSITION } from 'shared/ui/Tabs/config';
import NestedEditingTab from 'widgets/NestedEditingTab/ui/NestedEditingTab';
import { NestedList } from 'widgets/NestedList';

const NestedPageTypeTabs = () => {
  const labs = useSelector(selectLabs);
  const tests = useSelector(selectTests);
  const infos = useSelector(selectInfos);

  return (
    <Tabs position={TABS_POSITION.TOP}>
        <TabOption title="Лабораторные работы" content={
        <NestedEditingTab list={
          <NestedList items={labs} type={"lab"}/>
        }/>}/>
        <TabOption title="Тесты"  content={
        <NestedEditingTab list={
          <NestedList items={tests} type={"test"}/>
        }/>}/>
        <TabOption title="Информационные страницы"  content={
        <NestedEditingTab list={
          <NestedList items={infos} type={"info"}/>
        }/>}/>
    </Tabs>
  )
}

export default NestedPageTypeTabs;