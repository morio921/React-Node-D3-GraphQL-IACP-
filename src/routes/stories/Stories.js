/**  -*- mode: react; -*-
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {
  PropTypes,
} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Stories.css';
import { connect } from 'react-redux';
import Gallery from '../../components/Gallery';
import SubmitNewContent from '../../components/SubmitNewContent';
import data from '../../public/stories-gallery/links.json';
import { showModal, hideModal } from '../../actions/modal';

class Content extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    showModal: PropTypes.func.isRequired,
    isShownModal: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      content: 'false',
    };
    console.log(this);
  }

  newContent = (event) => {
    //this.setState({ content: 'true' });
    //console.log(this.props);
    this.props.showModal();
  }

  render() {
    console.log(this.state);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <button onClick={this.newContent}>Submit</button>
          {
              this.props.isShownModal && <SubmitNewContent showmodal={{ true }} />
          }
          <Gallery elements={data} thumbnailField='imageFile' thumbnailBase='/stories-gallery/' />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isShownModal: state.modal.showModal,
});
export default connect(mapStateToProps, { showModal, hideModal })(withStyles(s)(Content));
