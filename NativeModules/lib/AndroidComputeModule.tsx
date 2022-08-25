import {useEffect, useState} from 'react';
import {NativeModules, Text} from 'react-native';
import {ComputeProps} from './ComputeModule';

export default function AndroidComputeModule(props: ComputeProps) {
  const [computed, setComputed] = useState(0);
  useEffect(() => {
    const module = NativeModules.ComputeModule;
    module.compute(props.toCompute, (nativeComputed: number) => {
      setComputed(nativeComputed);
    });
  });
  return <Text>{computed}</Text>;
}
