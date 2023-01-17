import { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actions } from "../../redux/dialogs-reducer";
import { AppStateType } from "../../redux/store";
import Dialogs from "./Dialogs";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, { ...actions }),
  withAuthRedirect
)(Dialogs);
