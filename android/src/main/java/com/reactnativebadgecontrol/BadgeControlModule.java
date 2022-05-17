package com.reactnativebadgecontrol;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import me.leolin.shortcutbadger.ShortcutBadger;

@ReactModule(name = BadgeControlModule.NAME)
public class BadgeControlModule extends ReactContextBaseJavaModule {
    public static final String NAME = "BadgeControl";

    public BadgeControlModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    public void setCounterBadges(int count, Promise promise) {
      ShortcutBadger.applyCount(getReactApplicationContext(), count);
      promise.resolve(count);
    }

    @ReactMethod
    public void removeCounterBadge(Promise promise) {
      ShortcutBadger.removeCount(getReactApplicationContext());
      promise.resolve(0);
    }

}
