import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@/Theme/Variables'
import CardSmall from './Components/CardSmall'
import CardLarge from './Components/CardLarge'

//const { height } = Dimensions.get('window')

const BusinessInsights = () => {
  const [modal, setModal] = useState(false)
  const [hover, setHover] = useState(false)

  // const [screenHeight, setScreenHeight] = useState(0)

  // const onContentSizeChange = (width, height) => {
  //   setScreenHeight(height)
  // }
  // const scrollEnabled = screenHeight < height

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar animated={true} backgroundColor={Colors.white} />

      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margintop: '5%',
          marginHorizontal: '5%',
        }}
      >
        <View style={{ marginTop: '6%' }}>
          <Text
            style={{ color: Colors.text, fontSize: 18, fontWeight: 'bold' }}
          >
            Bussiness Inisights
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '6%',
            width: 60,
          }}
        >
          <MaterialCommunityIcons name="plus" size={24} color="grey" />
          <MaterialCommunityIcons name="magnify" size={24} color="grey" />
        </View>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.success,
        }}
      >
        <Text
          style={{ color: Colors.white, marginHorizontal: 20, fontSize: 16 }}
        >
          Location:Pho Hub House
        </Text>
        <TouchableOpacity onPress={() => setModal(true)}>
          <MaterialCommunityIcons
            name="greater-than"
            size={24}
            color={Colors.white}
            style={{ marginRight: '5%' }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5 }}>
        <ScrollView
        //   scrollEnabled={scrollEnabled}
        //   onContentSizeChange={onContentSizeChange}
        //  contentContainerStyle={{ flexGrow: 5 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: '5%',
                marginVertical: '3%',
              }}
            >
              <Text style={{ color: Colors.text, fontSize: 15 }}>
                Delivered Orders
              </Text>
              <Text>Your sales from the orders you delivered</Text>
            </View>
            <CardLarge
              color={Colors.success}
              value="$ 6,501"
              orders="42 orders"
              bg={Colors.lightGreen}
              graphColor={(opacity = 0) => `rgba(40,167, 69, ${opacity})`}
            />
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
              }}
            >
              <CardSmall
                color={Colors.blue}
                value="$6,501"
                orders="204 orders"
                bg={Colors.lightBlue}
                text="This Week : 15-21 Nov"
              />
              <CardSmall
                color={Colors.orange}
                value="$1,26,501"
                orders="860 orders"
                bg={Colors.lightOrange}
                text="This month : 01-21 Nov"
              />
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginHorizontal: '5%',
                marginVertical: '3%',
              }}
            >
              <Text style={{ color: Colors.text, fontSize: 15 }}>
                Rejected Orders
              </Text>
              <Text>loss of sales from the orders that you rejected</Text>
            </View>

            <CardLarge
              color={Colors.brown}
              value="$ 1,452"
              orders="04 orders"
              bg={Colors.lightBrown}
              graphColor={(opacity = 1) => `rgba(216,59,1, ${opacity})`}
            />
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
              }}
            >
              <CardSmall
                color={Colors.purple}
                value="$6,501"
                orders="42 orders"
                bg={Colors.lightPurple}
                text="This Week : 15-21 Nov"
              />
              <CardSmall
                color={Colors.violet}
                value="$26,501"
                orders="166 orders"
                bg={Colors.lightViolet}
                text="This month : 01-21 Nov"
              />
            </View>
          </View>
          <Modal transparent={true} visible={modal} animationType="slide">
            <View
              style={{
                flex: 1,
                backgroundColor: '#000000aa',
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  height: '50%',
                  marginTop: 'auto',
                  backgroundColor: Colors.white,
                  borderTopLeftRadius: 35,
                  borderTopRightRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <View style={{ flexDirection: 'row', marginTop: '8%' }}>
                  <Text style={{ textAlign: 'center' }}>Locations</Text>
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      position: 'relative',
                      right: -120,
                    }}
                  >
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        onPress={() => setModal(false)}
                        name="close"
                        size={18}
                        color="grey"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: Colors.text,
                  }}
                >
                  Choose from your saved
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: Colors.text,
                  }}
                >
                  locations
                </Text>
                <Text>Note:This may also include the hubs under which</Text>
                <Text>you have been added.</Text>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    //  borderWidth: 0.5,
                    // borderColor: Colors.success,
                    width: '90%',
                    padding: 8,
                    borderRadius: 7,
                  }}
                >
                  <MaterialCommunityIcons name="home" size={24} color="grey" />
                  <View style={{ marginLeft: '2%' }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: Colors.text,
                        fontSize: 16,
                      }}
                    >
                      Pho House Hub
                    </Text>
                    <Text>2972 Westheimer Rd,Santa Ana</Text>
                  </View>
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={18}
                    color={Colors.success}
                    style={{
                      position: 'relative',
                      right: -70,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    //  borderWidth: 0.5,
                    //  borderColor: Colors.success,
                    width: '90%',
                    padding: 8,
                    borderRadius: 7,
                  }}
                >
                  <MaterialCommunityIcons name="home" size={24} color="grey" />
                  <View style={{ marginLeft: '2%' }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: Colors.text,
                        fontSize: 16,
                      }}
                    >
                      Pho House Hub
                    </Text>
                    <Text>2972 Ash Dr San Jose,Silicon Valley</Text>
                  </View>
                 
                    <MaterialCommunityIcons
                      name="check-circle"
                      size={18}
                      color={Colors.success}
                      style={{
                        position: 'relative',
                        right: -70,
                        alignSelf: 'center',
                      }}
                    />
                  
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    //  borderWidth: 0.5,
                    // borderColor: Colors.success,
                    width: '90%',
                    padding: 8,
                    borderRadius: 7,
                  }}
                  onPress={() => setHover(true)}
                >
                  <MaterialCommunityIcons name="home" size={24} color="grey" />
                  <View style={{ marginLeft: '2%' }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: Colors.text,
                        fontSize: 16,
                      }}
                    >
                      Pho House Hub
                    </Text>
                    <Text>2972 Westheimer Rd,Santa Ana</Text>
                  </View>
                  {hover &&
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={18}
                    color={Colors.success}
                    style={{
                      position: 'relative',
                      right: -70,
                      alignSelf: 'center',
                    }}
                  />}
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BusinessInsights
