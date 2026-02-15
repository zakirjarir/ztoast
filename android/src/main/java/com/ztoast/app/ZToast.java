package com.ztoast.app;

import com.getcapacitor.Logger;


import android.widget.Toast;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

public class ZToast extends Plugin {
    @PluginMethod
    public void show(PluginCall call) {
        String message = call.getString("message", "Hello!");
        int duration = call.getInt("duration", Toast.LENGTH_SHORT);

        // Default Android Toast
        Toast.makeText(getContext(), message, duration).show();

        call.resolve();
    }
}
