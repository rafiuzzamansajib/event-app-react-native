import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { McText } from '../components';
import { COLORS, SIZES } from '../constants';

const Tickets = ({ params }) => {
  return (
    <View style={styles.container}>
      <McText h2 style={{
        backgroundColor:COLORS.gray,
        borderRadius:SIZES.radius,
        color:COLORS.white,

      }}>
        For New Event Ticket Not Avaiable!!
      </McText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tickets;
