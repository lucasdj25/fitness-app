import { StyleSheet, Text, View } from 'react-native';

interface RoutinesScreenProps {
  navigation: any
}

export default function RoutinesScreen({navigation}: RoutinesScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Routines</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});