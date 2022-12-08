const CollapseButton = ({ title, body }) => {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#showBody"
        >
          {title}
        </button>
      </p>
      <div class="collapse" id="showBody">
        <div class="card card-body">{body}</div>
      </div>
    </div>
  );
};

export default CollapseButton;
