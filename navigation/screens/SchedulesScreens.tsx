import { StyleSheet, Text, View } from 'react-native';

interface SchedulesScreenProps {
  navigation: any
}

export default function SchedulesScreen({navigation}: SchedulesScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Schedules</Text>
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