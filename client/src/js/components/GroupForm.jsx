import React, {Component} from 'react';
import { SliderPicker } from 'react-color';


class GroupForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: '#fff'
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const groupName = this.refs.groupname.value;
    const groupColor = this.state.color;

    const newGroup = {
      name: groupName,
      color: groupColor
    };

    // this.props.submitFunc(newGroup);
    console.log(groupName, groupColor);
  }

  handleChangeComplete(color) {
    this.setState({ color: color.hex });
    console.log(this.state);
  };

  render() {
    const colorOnChange = (_, str) =>{
      console.log('colorOnChange', str);
      this.setState({'color': str});
    }

    return (
      <form name="CreateGroupForm" className="create-group-form">

        <input placeholder="Group name" ref="groupname" type="text" className="form-input" />

        <br />

        <SliderPicker
          color={ this.state.color }
          onChangeComplete={ this.handleChangeComplete }
        />

        <input type="submit" value="Submit" className="form-submit" onClick={this.handleSubmit.bind(this)}/>
      </form>

    );
  }
}

export default GroupForm;
