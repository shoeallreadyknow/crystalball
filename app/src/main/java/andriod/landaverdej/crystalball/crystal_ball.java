package andriod.landaverdej.crystalball;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;


public class crystal_ball extends Activity {

    private TextView answerText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_crystal_ball);

        answerText = (TextView) findViewById(R.id.answerText);
        answerText.setText("reply is hazy, try again tomorrow");
    }



}
