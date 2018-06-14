package com.app.myutils;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;

public class Math {

    public static int Plus(int a, int b) {
        return a + b;
    }

    public static int Minus(int a, int b) {
        return a - b;
    }

    public static float Div(int a, int b, Context mContext) {
        Glide.with(mContext).load("")
                .thumbnail(0.5f)
                .into(new ImageView(mContext));
        return a / b;
    }
}
