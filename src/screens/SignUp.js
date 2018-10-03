import React, { Component } from 'react';
import { View, Text, Dimensions, ViewPagerAndroid , ScrollView, Image} from 'react-native';
import styles from '../styles';

var mWidth = Dimensions.get('window').width;
var mHeight = Dimensions.get('window').height;
import logo from '../assets/images/logo-native.png';
import TextInputPlus from '../components/TextInputPlus';
import TextPlus from '../components/TextPlus';
import {DatePicker } from 'react-native-wheel-datepicker';
import ButtonPlus from '../components/ButtonPlus';
export default class SignUp extends Component {
  constructor(props){
      super(props);
      this.state = {
          pageIndex  : 0
      }
  }
  _pageSelected(event) {
      // console.log("position: " + event.nativeEvent.position)
      let {position} = event.nativeEvent;
      this.setState({
          pageIndex : position
      });
  }
  _onPageScroll(event) {
      console.log("position: " + event.nativeEvent.position)
      console.log("offset : " + event.nativeEvent.offset)
  }

  render() {
      return (
          <View style={{ flex: 1 , paddingLeft:15, paddingRight:15}}>
              
              <ViewPagerAndroid
                  style={[styles.viewPager]}
                  initialPage={0}
                  onPageSelected={this._pageSelected.bind(this)}
                  onPageScroll={this._onPageScroll.bind(this)}
                  scrollEnabled={true}

              >
			  	<View style={styles.pageStyle} key="0">

					<View style={{flex:1, 
						justifyContent:'center', 
						}}>
							<TextPlus>Like Enjoy</TextPlus>
							<ButtonPlus
							title="Join Us" />
					</View>
				</View>
                  <View style={styles.pageStyle} key="1">

				  		<View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus>Email and Phone</TextPlus>
							<TextInputPlus placeholder="Email" style={{marginBottom: 10}}/>
							<TextInputPlus placeholder="Phone" />
					  	</View>
                  </View>
                  <View style={styles.pageStyle} key="2">
				  <View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus>Birthday</TextPlus>
							<DatePicker
							date = {new Date()}
							mode="date"
							textColor="grey"
							textSize={36}
							onDateChange={() => {}}
							/>
					  	</View>
                      
                  </View>
                  <View style={styles.pageStyle} key="3">
				  		<View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  	<TextPlus>Password</TextPlus>
							<TextInputPlus 
							placeholder="Password" 
							style={{marginBottom: 10}}
							secureTextEntry={true}
							/>
							<TextInputPlus 
							placeholder="Password confirm"
							secureTextEntry={true}  />
					  	</View>

                  </View>
                  <View style={styles.pageStyle} key="4" >
				  		<View style={{flex:1, 
						  justifyContent:'center',
						  alignItems:'center' 
						  }}>
							<TextPlus>Image</TextPlus>
							<Image source={logo} style={styles.logo} />
						</View>
                  </View>
                  <View style={styles.pageStyle} key="5" >
					  <View style={{flex:1, 
						  justifyContent:'center', 
						  }}>
						  <TextPlus>Thank You !.</TextPlus>
						<ButtonPlus
						title="Done" />
                      </View>
                  </View>
              </ViewPagerAndroid>
			  <View style={{
                  width: mWidth,
                  height: 50,
                  backgroundColor:'#f4f4f4',
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
                  <Text>{ this.state.pageIndex }</Text>
              </View>
          </View>
      )
  }
}
