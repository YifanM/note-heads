package com.noteheads;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.noteheads.NoteheadService;

import android.content.Intent;
import android.content.Context;
import android.util.Log;

import java.util.Map;
import java.util.HashMap;

public class NoteheadModule extends ReactContextBaseJavaModule {

  public NoteheadModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
  	return "NoteheadModule";
  }

  @ReactMethod
  public void openNotehead(String name, String content) {
  	Context context = getReactApplicationContext();
  	Intent intent = new Intent(context, NoteheadService.class);
  	intent.putExtra("name", name);
  	intent.putExtra("content", content);
  	context.startService(intent);
  }
}