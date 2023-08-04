import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabLayout = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.title}</Tab>
        ))}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabLayout;
