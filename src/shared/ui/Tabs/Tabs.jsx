import React, { useState } from "react";
import classes from "./Tabs.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import TabContent from "./TabContent";
import TabList from "./TabList";

const Tabs = ({className, children}) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={classNames(classes.Tabs)}>
        <TabList tabs={children} activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabContent>
            {React.Children.toArray(children)[activeTab].props.content}
        </TabContent>
    </div>
  )
}

export default Tabs;