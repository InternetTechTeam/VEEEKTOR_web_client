import React from 'react'
import TabOption from 'shared/ui/Tabs/TabOption'
import Tabs from 'shared/ui/Tabs/Tabs'

const EditingModeTabs = () => {
  return (
    <Tabs>
        <TabOption
        title={"Ифнормация"}
        content={<div>Привет</div>}
        />
        <TabOption
        title={"Главная страница"}
        content={<div>Иди</div>}
        />
        <TabOption
        title={"Вложенные страницы"}
        content={<div>Нахуй</div>}
        />
    </Tabs>
  )
}

export default EditingModeTabs