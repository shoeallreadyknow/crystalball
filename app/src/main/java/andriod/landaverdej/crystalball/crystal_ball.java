package andriod.landaverdej.crystalball;

import android.app.Activity;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.util.FloatMath;
import android.widget.TextView;


public class crystal_ball extends Activity {
        private SensorManager sensorManager;
    private float acceleration;
    private Sensor accelerometer;
    private float currentacceleration;
    private float previousacceleration;
    private final SensorEventListener sensorlistener = new SensorEventListener() {
        @Override
        public void onSensorChanged(SensorEvent event) {
                float x= event.values[0];
                float y= event.values[1];
                float z= event.values[2];
        previousacceleration = currentacceleration;
            currentacceleration= FloatMath.sqrt(x * x + y * y + z * z);
            


        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    };

    private TextView answerText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crystal_ball);

        sensorManager = (SensorManager)getSystemService(Context.SENSOR_SERVICE);
        accelerometer = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);

        acceleration= 0.0f;
        currentacceleration=SensorManager.GRAVITY_EARTH;
        previousacceleration= SensorManager.GRAVITY_EARTH;

        answerText = (TextView) findViewById(R.id.answerText);
        answerText.setText(Predictions.get().getPrediction());
    }

    @Override
    protected void onResume() {
        super.onResume();
        sensorManager.registerListener(sensorlistener, accelerometer, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onPause() {
        super.onPause();
        sensorManager.unregisterListener(sensorlistener);

    }
}
