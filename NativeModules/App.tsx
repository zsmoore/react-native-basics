/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, View} from 'react-native';

import ComputeModule from './lib/ComputeModule';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Press Me" onPress={() => setCount(count + 1)} />
      <ComputeModule toCompute={count} />
    </View>
  );
};

export default App;
