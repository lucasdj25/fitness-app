import { StyleSheet, Text, View } from 'react-native';

interface SettingsScreenProps {
  navigation: any
}

export default function SettingsScreen({navigation}: SettingsScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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