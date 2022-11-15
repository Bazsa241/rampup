const TodoItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="d-flex gap-1">
        <button className="btn btn-sm btn-outline-secondary">
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
