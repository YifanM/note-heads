package com.noteheads;

import android.app.Service;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.os.IBinder;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import at.markushi.ui.CircleButton;

public class NoteheadService extends Service {

    private WindowManager mWindowManager;
    private View mChatHeadView;
    private View mNoteView;
    private String noteName;
    private String noteContent;

    public NoteheadService() {
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent == null) {
            return START_STICKY;
        }

        noteName = intent.getStringExtra("name");
        noteContent = intent.getStringExtra("content");

        // Inflate the chat head layout we created
        mChatHeadView = LayoutInflater.from(this).inflate(R.layout.layout_chat_head, null);
        TextView mNoteHeadTv = (TextView) mChatHeadView.findViewById(R.id.chat_head_title_tv);
        String noteTitle = "";
        if (noteName.length() > 5) {
            noteTitle = noteName.substring(0, 5) + "-";
        } else {
            noteTitle = noteName;
        }
        mNoteHeadTv.setText(noteTitle);

        mNoteView = LayoutInflater.from(this).inflate(R.layout.layout_note, null);
        TextView mNoteTv = (TextView) mNoteView.findViewById(R.id.note_tv);
        mNoteTv.setText(noteContent);

        // Add the view to the window.
        final WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                WindowManager.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.TYPE_PHONE,
                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                PixelFormat.TRANSLUCENT);

        final WindowManager.LayoutParams noteParams = new WindowManager.LayoutParams(
                WindowManager.LayoutParams.MATCH_PARENT,
                WindowManager.LayoutParams.MATCH_PARENT,
                WindowManager.LayoutParams.TYPE_PHONE,
                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                PixelFormat.TRANSLUCENT);

        //Specify the chat head position
        params.gravity = Gravity.TOP | Gravity.LEFT;        //Initially view will be added to top-left corner
        params.x = 0;
        params.y = 50;
        noteParams.gravity = Gravity.TOP | Gravity.RIGHT;        //Initially view will be added to top-left corner
        noteParams.x = 0;
        noteParams.y = 50;

        //Add the view to the window
        mWindowManager = (WindowManager) getSystemService(WINDOW_SERVICE);
        mWindowManager.addView(mChatHeadView, params);

        //Set the close button.
        CircleButton closeButton = (CircleButton) mChatHeadView.findViewById(R.id.close_btn);
        CircleButton noteCloseButton = (CircleButton) mNoteView.findViewById(R.id.note_close_btn);
        CircleButton noteMinButton = (CircleButton) mNoteView.findViewById(R.id.note_min_btn);

        View.OnClickListener closeClickListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //close the service and remove the chat head from the window
                stopSelf();
            }
        };

        View.OnClickListener minClickListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mWindowManager.removeView(mNoteView);
                mWindowManager.addView(mChatHeadView, params);
            }
        };

        closeButton.setOnClickListener(closeClickListener);
        noteCloseButton.setOnClickListener(closeClickListener);
        noteMinButton.setOnClickListener(minClickListener);

        View.OnTouchListener touchListener = new View.OnTouchListener() {
            private int lastAction;
            private int initialX;
            private int initialY;
            private float initialTouchX;
            private float initialTouchY;

            @Override
            public boolean onTouch(View v, MotionEvent event) {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:

                        //remember the initial position.
                        initialX = params.x;
                        initialY = params.y;

                        //get the touch location
                        initialTouchX = event.getRawX();
                        initialTouchY = event.getRawY();

                        lastAction = event.getAction();
                        return true;
                    case MotionEvent.ACTION_UP:
                        float dx = initialTouchX - event.getRawX();
                        float dy = initialTouchY - event.getRawY();
                        float distanceInPx = (float) Math.sqrt(dx * dx + dy * dy);
                        if (distanceInPx < 25) {
                            mWindowManager.removeView(mChatHeadView);
                            mWindowManager.addView(mNoteView, noteParams);
                        }
                        lastAction = event.getAction();
                        return true;
                    case MotionEvent.ACTION_MOVE:
                        //Calculate the X and Y coordinates of the view.
                        params.x = initialX + (int) (event.getRawX() - initialTouchX);
                        params.y = initialY + (int) (event.getRawY() - initialTouchY);

                        //Update the layout with new X & Y coordinate
                        mWindowManager.updateViewLayout(mChatHeadView, params);
                        lastAction = event.getAction();
                        return true;
                }
                return false;
            }
        };

        mNoteHeadTv.setOnTouchListener(touchListener);
        return START_STICKY;
    }

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mChatHeadView != null) {
            try {
                mWindowManager.removeView(mChatHeadView);
            } catch (IllegalArgumentException e) {
                // chathead not attached
            }
        }
        if (mNoteView != null) {
            try {
                mWindowManager.removeView(mNoteView);
            } catch (IllegalArgumentException e) {
                // note view not attached
            }
        }
    }
}