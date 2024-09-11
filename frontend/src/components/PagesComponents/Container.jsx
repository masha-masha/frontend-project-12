const Container = ({ children }) => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
