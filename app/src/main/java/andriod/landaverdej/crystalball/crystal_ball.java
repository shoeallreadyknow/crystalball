package andriod.landaverdej.crystalball;

import android.app.Activity;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.widget.TextView;


public class crystal_ball extends Activity {
        private SensorManager sensorManager;
    private float acceleration;
    private float currentacceleration;
    private float previousacceleration;

    private TextView answerText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crystal_ball);

        answerText = (TextView) findViewById(R.id.answerText);
        answerText.setText(Predictions.get().getPrediction());
    }



}
