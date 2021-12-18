import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {dummyData, FONTS, SIZES, COLORS, icons} from '../constants'
import {McText, McIcon, McAvatar} from '../components'
import moment from 'moment'
import {LinearGradient} from 'expo-linear-gradient'

const EventDetail = ({ navigation, route }) => {
  const [selectedEvent,setSelectedEvent] = useState(null)

  useEffect(()=>{
    let {selectedEvent} = route.params;
    setSelectedEvent(selectedEvent);
  },[])
  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{
        backgroundColor:COLORS.black
      }}
      style={{backgroundColor:COLORS.black}}
      >
        <ImageBackground
        resizeMode='cover'
        source={selectedEvent?.image}
        style={{
          width:'100%',
          height:SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
        }}
        >
          <View>
            <SectionImageHeader>
              <TouchableOpacity 
              onPress={()=>{
                navigation.goBack();
              }}
              style={{
                width:56,
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 10
              }}>
                <McIcon source={icons.back_arrow} size={24}/>
              </TouchableOpacity>
              <View>
              <TouchableOpacity>
                <McIcon source={icons.like} size={24} style={{
                  marginLeft: 16,
                  tinycolor: COLORS.white
                }}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <McIcon source={icons.share} size={24} style={{
                  marginLeft: 16,
                  tinycolor: COLORS.white
                }}/>
              </TouchableOpacity>
              </View>
            </SectionImageHeader>
            <SectionImageFooter>
              <LinearGradient
              colors = {['transparent','#000']}
              start={{x:0,y:0}}
              end={{x:0,y:1}}
              style={{
                width:"100%",
                height:400,
                justifyContent:'flex-end'
              }}
              >
                <FooterComtentView>
                  <View>
                    <McText body4 style={{opacity:0.5, letterSpacing:2}}>{selectedEvent?.type}</McText>
                    <McText h1>{selectedEvent?.title}</McText>
                    <McText body4 style={{opacity:0.5, letterSpacing:2}}>STARTING {moment(selectedEvent?.startingTime).format('hh:mm A')}</McText>
                  </View>
                  <LinearGradient
                  colors={COLORS.linear}
                  start={{x:0,y:0}}
                  end={{x:1,y:1}}
                  style={{
                    width:60,
                    height:60,
                    borderRadius:15,
                    justifyContent: 'center',
                    alignItems:'center'
                  }}
                  >
                    <McText body4>{moment(selectedEvent?.startingTime).format('MMM').toUpperCase()}</McText>
                    <McText h2>{moment(selectedEvent?.startingTime).format('DD')}</McText>
                  </LinearGradient>
                </FooterComtentView>
              </LinearGradient>
            </SectionImageFooter>
          </View>
        </ImageBackground>
        <ButtonSection>
          <TouchableOpacity
          style={{
            width:76,
            height:32,
            borderRadius:10,
            margin:16,
            justifyContent:'center',
            backgroundColor:COLORS.white,
            alignItems:'center'
          }}
          >
            <McText h6 style={{color:COLORS.black}}>ABOUT</McText>
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            width:124,
            height:32,
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:COLORS.input,
            alignItems:'center'
          }}
          >
            <McText h6 style={{opacity:0.5}}>PARTICIPENTS</McText>
          </TouchableOpacity>
        </ButtonSection>
        <DescriptionSection>
          <McText body3>{selectedEvent?.description}</McText>
        </DescriptionSection>

      </ScrollView>
    </View>
  );
};


const SectionImageHeader = styled.View`
flex-direction:row;
justify-content: space-between;
margin-top:240px;
margin-left: 30px;
margin-right: 30px;
`
const SectionImageFooter = styled.View`
flex:1;
justufy-content: flex-end;
position: relative;
z-index: -1;
`
const FooterComtentView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0px 30px;
`
const ButtonSection = styled.View`
margin:15px 30px;
flex-direction: row;
`
const DescriptionSection = styled.View`
margin: 0px 30px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventDetail;
