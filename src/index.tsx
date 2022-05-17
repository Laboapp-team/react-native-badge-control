import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-badge-control' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const BadgeControl = NativeModules.BadgeControl
  ? NativeModules.BadgeControl
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setCounterBadges(a: number): Promise<number> {
  return BadgeControl.setCounterBadges(a);
}

export function removeCounterBadge(): Promise<number> {
  return BadgeControl.removeCounterBadge();
}
