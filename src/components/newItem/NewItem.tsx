const NewItem = () => {
  return (
    <div className="container my-5">
      <div className="input-group">
        <input type="password" className="form-control" id="todoDescription" placeholder="TODO..." />
        <button type="submit" className="btn btn-primary">
          + Add
        </button>
      </div>
    </div>
  );
};

export default NewItem;
