import React from 'react';
import { Text, View, StyleSheet, SafeAreaView ,TextInput ,FlatList, ImageBackground,TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {dummyData, FONTS, SIZES, COLORS, icons, images} from '../constants'
import {McText, McIcon, McAvatar} from '../components'
import moment from 'moment'
import {LinearGradient} from 'expo-linear-gradient'


const Featured = ({ navigation }) => {
  const _renderItem = ({item,index}) =>{
    return(
      <TouchableWithoutFeedback
      onPress={()=>{
        navigation.navigate('EventDetail',{selectedEvent:item})
      }}
      >
      <View style={{
        marginLeft: index === 0?30:20,
        marginRight: index === dummyData.Events.length - 1?30:0
      }}>
        <ImageBackground
        resizeMode='cover'
        source={item.image}
        style={{
          width: SIZES.width / 2+70,
          height: SIZES.width / 2+70,
          justifyContent:'space-between',
          borderRadius:20

        }}
        >
          <View style={{
            alignItems:'flex-end',
            marginHorizontal:15,
            marginVertical:15
          }}>
          <DateBox>
            <McText body5  style={{
              opacity:.5,
              letterSpacing:2
            }}>{moment(item.startingTime).format('MMM').toUpperCase()}</McText>
            <McText h2 >{moment(item.startingTime).format('DD')}</McText>
          </DateBox>
          </View>
          <View style={{
            marginLeft:20,
            marginBottom:25
          }}>
            <McText body5 style={{opacity:.5}}>{item.type}</McText>
            <McText h2>{item.title}</McText>
          </View>
        </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <SectionHeader>
        <View>
          <McText body5 style={{opacity: .5}}> DECEMBER 21, 9:10</McText>
          <McText h1>Find More Event</McText>
        </View>
          <McAvatar source={images.avatar}/>
      </SectionHeader>
      <SectionSearch>
        <SearchView>
          <McIcon source={icons.search} size={24}/>
          <TextInput
          h4
          placeholder='Search'
       
          style={{
            width: 250
          }}
          ></TextInput>
          <McIcon source={icons.filter} size={24}/>
        </SearchView>
      </SectionSearch>
      <SectionTitle>
        <McText h5>FEATURES</McText>
      </SectionTitle>
      <View>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => 'event_' + item.id}
        data={dummyData.Events}
        renderItem={_renderItem}
        >

        </FlatList>
      </View>
      <SectionTitle>
        <McText h5>More For You</McText>
      </SectionTitle>
      <LinearGradient
      start={{x:0,y:0}}
      end={{x:1,y:1}}
      style={{
        height:120,
        marginHorizontal:30,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <View style={{
          flexDirection:'row',
          marginHorizontal:30,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <GiftBox>
            <McText source={icons.gift} size={24}/>
          </GiftBox>
          <View style={{marginLeft:22}}>
            <McText h3> Get 1 Free Ticket</McText>
            <McText body5 style={{width:180}}> Share This event to with your friend to get 1 free ticket</McText>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
padding: 16px ${SIZES.padding};
justify-content: space-between;
align-items: center;
flex-direction: row-reverse;
`;
const SectionSearch = styled.View`
margin: 4px ${SIZES.padding};
height: 50px;

border-radius: 15px;
justify-content: center;
`
const SearchView = styled.View`
flex:1
justify-content: space-between;
align-items: center;
margin-left: 9px;
margin-right: 15px;
`
const SectionTitle = styled.View`
margin: 20px ${SIZES.padding}
`
const DateBox = styled.View`
width: 60px;
height: 60px;
border-radius: 15;

justify-content:center;
align-items:center;
`
const GiftBox = styled.View`
width: 50px;
height: 50px;
border-radius: 15;

justify-content:center;
align-items:center;
`


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
});

export default Featured;
