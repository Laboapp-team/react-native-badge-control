import * as React from 'react';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { setCounterBadges } from 'react-native-badge-control';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setCounterBadges(3).then(setResult);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => setCounterBadges(10)}
      style={styles.container}
    >
      <Text>Result: {result}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
