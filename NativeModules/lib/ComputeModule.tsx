import {Platform} from 'react-native';
import AndroidComputeModule from './AndroidComputeModule';
import IOSComputeModule from './iOSComputeModule';
import React from 'react';

export interface ComputeProps {
  toCompute: number;
}

export default function ComputeModule(props: ComputeProps) {
  const toRet = Platform.OS === 'android' ? (
    <AndroidComputeModule toCompute={props.toCompute} />
  ) : (
    <IOSComputeModule toCompute={props.toCompute} />
  );
  return toRet;
}
