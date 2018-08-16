package com.awesomeproject3;

import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject3";
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("MyTAG", "onResume: xx");
    }
}
