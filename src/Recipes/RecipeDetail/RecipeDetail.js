const RecipeDetail = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12">
          <img src="" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h1>Recipe Name</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle">
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">To Shopping list-group-item</a>
              </li>
              <li>
                <a href="#">Edit Recipe</a>
              </li>
              <li>
                <a href="#">Delete Recipe</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">Description</div>
      </div>
      <div class="row">
        <div class="col-xs-12">Ingredients</div>
      </div>
    </>
  );
};

export default RecipeDetail;
