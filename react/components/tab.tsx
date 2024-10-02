import React, { useState } from "react";

interface TabContentItem {
  id: number;
  label: string;
  content: React.ReactNode; // since content can be a string or JSX
}

interface TabProps {
  tabContent: TabContentItem[];
  onChange: (index: number) => void;
}

function Tab({ tabContent, onChange }: TabProps) {
  const [CurrentTabIndex, setCurrentTabIndex] = useState(0);

  const handleCurrentIndex = (index: number) => {
    onChange(index);
    setCurrentTabIndex(index);
  };

  return (
    <div className="tab__wrapper">
      <div className="tab__heading">
        {tabContent.map((values, index) => (
          <div
            key={values.label}
            className="tab__button"
            onClick={() => handleCurrentIndex(index)} // Use array index as the tab index
          >
            <span className="label">{values.label}</span>
          </div>
        ))}
      </div>

      <div className="tab_content">
        {tabContent[CurrentTabIndex] && tabContent[CurrentTabIndex].content}
      </div>
    </div>
  );
}

const RandomComponent = () => {
  return (
    <>
      <h1>Random Component</h1>
    </>
  );
};

const TabMain = () => {
  const TabContent = [
    {
      id: 1,
      label: "Home",
      content: "Home Content",
    },
    {
      id: 2,
      label: "About",
      content: <div>About</div>,
    },
    {
      id: 3,
      label: "Random",
      content: <RandomComponent />,
    },
  ];

  const handleCurrectTab = (index: number) => {
    console.log("Current tab index:", index);
  };

  return <Tab tabContent={TabContent} onChange={handleCurrectTab} />;
};

export default TabMain;
