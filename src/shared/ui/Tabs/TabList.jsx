import React from 'react'
import classes from "./Tabs.module.scss"
import Tab from './Tab';

const TabList = ({tabs, activeTab, setActiveTab}) => {
  return (
      <div className={classes.TabList}>
            {React.Children.map(tabs, (tab, index) => (
                <Tab
                    key={index}
                    title={tab.props.title}
                    onClick={() => setActiveTab(index)}
                    isActive={index === activeTab}
                />
            ))}
        </div>
  )
}

export default TabList;