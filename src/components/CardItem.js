
import { connect } from 'react-redux';

import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

function CardItem(props) {
  const { Meta } = Card;

    return(
      <div>
          {props.country ? 
          <Card
          style={{ width: 300, marginTop: 16, }} 
          loading={props.loading}
          >
            <Meta
            title={props.info?.[0]?.['name']}
            />
          {/*Object.keys(props.info?.[0]).map((key) => <h3>{`${key} : ${props.info?.[0]?.[key]}`}</h3>)*/}
          {/*not the best API destructuring. also had to use multiple ?. coz React was throwing multiple errors 
          which i'm guessing is owed to having the initial state for country 
          in the redux store as '' which is done so as to not force down a default state on the user and also 
          as as side effect offers 'not showing the card when the country is not selected'*/}
            Capital : {props.info?.[0]?.['capital']} <br/>
            Population : {props.info?.[0]?.['population']} <br/>
            Timezones : {props.info?.[0]?.['timezones'][0]} <br/>
            Currency : {props.info?.[0]?.['currencies'][0]['symbol']} <br/>
            Primary Language Spoken : {props.info?.[0]?.['languages'][0]['name']} <br/>
            </Card>  
          :
          <></>
          }
        </div> 
        )
}


const MapToStateProps = store => ({
    loading: store.regionalInfo.loading,
    error: store.regionalInfo.error,
    info: store.regionalInfo.info,
    country: store.region.country
})

export default connect(MapToStateProps)(CardItem);
