import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {View as RNView, TextField, Text as RNText, Button} from 'react-native-ui-lib';
import { styles } from '../styles/home';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <RNView style={styles.container}>
      <RNView style={styles.card}>
       <Text style={styles.cardtext}>You are not currently sharing location</Text> 
      <Button color={'#0d0d0d'} style={styles.buttonB} paddingH-50 borderRadius={2} label={'Share Location'}/>
      </RNView>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <RNView flex bottom>
      <Button style={styles.button} paddingH-50 borderRadius={8} label={'Next'}/>
      </RNView>
    
    </RNView>
  );
}


