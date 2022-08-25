package com.nativemodules
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ComputeModule(
  reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {
  @ReactMethod fun computeTimes2(count: int) = return count * 2
  override fun getName() = "ComputeModule" 
}
