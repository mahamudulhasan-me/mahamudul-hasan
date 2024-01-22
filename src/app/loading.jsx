const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="terminal-loader ">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </div>
  );
};

export default loading;
