import React from 'react';
import {connect} from 'react-redux';

import { Select, Button } from 'antd';
import 'antd/dist/antd.css';

import { newCountry, fetchRegionalInfo } from '../redux/actions';




function InputForm(props) { 

    const { Option } = Select;

    const [country, setCountry] = React.useState('india')
    
    function onChange(value) {
      setCountry(value)  
    }

    function handleSubmit(){
      props.dispatch(newCountry(country))
      props.dispatch(fetchRegionalInfo(country))
    }


return(
  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a Country"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="india">India</Option>
    <Option value="usa">United States</Option>
    <Option value="uk">United Kingdom</Option>
    </Select>
    <Button onClick={handleSubmit} type="primary">Load</Button>
  </div>
);
}


export default connect()(InputForm);
