import { StyleSheet, Text, View } from 'react-native';

interface HistoryScreenProps {
  navigation: any
}

export default function HistoryScreen({navigation}: HistoryScreenProps) {
  return (
    <View style={styles.container}>
      <Text>History</Text>
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