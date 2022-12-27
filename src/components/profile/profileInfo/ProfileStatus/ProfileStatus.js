import { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              type='text'
              value={this.props.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
