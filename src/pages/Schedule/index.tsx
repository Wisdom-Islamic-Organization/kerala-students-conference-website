import React from "react";

const SchedulePage: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 80px)", paddingTop: 24, boxSizing: 'border-box' }}>
      <iframe
        src="/schedule.pdf"
        title="Program Schedule"
        width="100%"
        height="100%"
        style={{ border: "none", minHeight: 600 }}
      />
    </div>
  );
};

export default SchedulePage; 