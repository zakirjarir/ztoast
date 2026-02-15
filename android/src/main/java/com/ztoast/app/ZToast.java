package com.ztoast.app;

import com.getcapacitor.Logger;

public class ZToast {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
