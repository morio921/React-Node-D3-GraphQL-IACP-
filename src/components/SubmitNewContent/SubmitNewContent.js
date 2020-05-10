import React, {
  PropTypes,
} from 'react';
import {
  Form,
  Well,
  FormGroup,
  FormControl,
  Button,
  Alert,
  Modal,
  ControlLabel
} from 'react-bootstrap';
import { connect } from 'react-redux';
import validator from 'validator';
import Spinner from 'react-spin';
import { hideModal } from '../../actions/modal';

class SubmitNewContent extends React.Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    isShownModal: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      person: '',
      title: '',
      description: '',
      link: '',
    };

  }

  close = () => {
    this.setState({ showModal: false });
    this.props.hideModal();
  }

  open = () => {
    this.setState({ showModal: true });
  }

  getPersonValidationState() {
    const length = this.state.person.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  getTitleValidationState() {
    const length = this.state.title.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  getDescriptionValidationState() {
    const length = this.state.description.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  getLinkValidationState() {
    const length = this.state.link.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  submitByUser = (event) => {

  }

  render() {
  console.log('ok');
    return (
      <div>
        <Modal show={this.props.isShownModal} onHide={this.close}>
          <Modal.Header>
            <h3>
              Submit New Content
            </h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getPersonValidationState()}
              >
                <ControlLabel>Person</ControlLabel>
                <FormControl
                  type="text"
                  name="person"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="formBasicText"
                validationState={this.getTitleValidationState()}
              >
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  name="title"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="formBasicText"
                validationState={this.getDescriptionValidationState()}
              >
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  name="description"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
              controlId="formBasicText"
              validationState={this.getLinkValidationState()}
              >
                <ControlLabel>Link</ControlLabel>
                <FormControl
                  type="text"
                  name="link"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button
              type="submit"
              bsStyle="success"
              onClick={this.submitByUser}
              disabled={!(this.getPersonValidationState() === 'success') || !(this.getTitleValidationState() === 'success') || !(this.getDescriptionValidationState() === 'success') || !(this.getLinkValidationState() === 'success')}
            >
            Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isShownModal: state.modal.showModal,
});
export default connect(mapStateToProps, { hideModal })(SubmitNewContent);
