import {Platform} from 'react-native';
import AndroidComputeModule from './AndroidComputeModule';
import IOSComputeModule from './iOSComputeModule';

export interface ComputeProps {
  toCompute: number;
}

export default function ComputeModule(props: ComputeProps) {
  return Platform.OS === 'android' ? (
    <AndroidComputeModule toCompute={props.toCompute} />
  ) : (
    <IOSComputeModule toCompute={props.toCompute} />
  );
}
