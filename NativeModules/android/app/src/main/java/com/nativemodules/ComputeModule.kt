package com.nativemodules
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class ComputeModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {
    @ReactMethod fun computeTimes2(count: Int, callback: Callback) = callback.invoke(count * 2)
    override fun getName() = "ComputeModule"
}
