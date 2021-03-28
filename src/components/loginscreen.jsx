import { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Category() {
  let history = useHistory();

  function handleClick() {
    history.push({
      pathname: "/quizscreen",
      state: {
        data: category
      }
    });
  }
  
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <div id="header">Quiz App</div>
      <div className="container">
        <div className="card border-dark col-sm-12 col-lg-4">
          <div className="card-header">
            <h4>Game Login</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              <form id="player-login" autoComplete="off">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={name}
                        onChange={handleName}
                        aria-describedby="username"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div className="input-group">
                        <Select value={category} onChange={handleCategory}>
                          <MenuItem value={"General Knowledge"}>
                            General Knowledge
                          </MenuItem>
                          <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                          <MenuItem value={"Sports"}>Sports</MenuItem>
                          <MenuItem value={"Geography"}>Geography</MenuItem>
                          <MenuItem value={"History"}>History</MenuItem>
                          <MenuItem value={"Vehicles"}>Vehicles</MenuItem>
                          <MenuItem value={"Comics"}>Comics</MenuItem>
                          <MenuItem value={"Anime"}>Anime</MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <button
                        id="startbtn"
                        type="submit"
                        className="btn btn-block"
                        onClick={handleClick}
                      >
                        Start Game
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
