import { StyleSheet, Text, View } from 'react-native';

interface WorkoutScreenProps {
  navigation: any
}

export default function WorkoutScreen({navigation}: WorkoutScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Workout</Text>
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