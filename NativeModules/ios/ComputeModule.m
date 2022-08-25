//
//  ComputeModule.m
//  NativeModules
//
//  Created by Zachary Moore on 8/25/22.
//

#import <Foundation/Foundation.h>
#import "ComputeModule.h"

@implementation ComputeModule

RCT_EXPORT_METHOD(compute: (NSNumber *)toCompute) {
  return [toCompute floatValue] * 2;
}

RCT_EXPORT_MODULE(ComputeModuleiOS)

@end
