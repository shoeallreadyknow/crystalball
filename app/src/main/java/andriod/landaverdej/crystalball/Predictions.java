package andriod.landaverdej.crystalball;

public class Predictions {

    private static Predictions predictions;
   private String[] answers;

    private Predictions(){
        answers = new String[]{
          "your wishes will come true",
                "YESS!!!"
        };
    }
    public static Predictions get(){
        if(predictions == null){
            predictions = new Predictions();
        }
        return predictions;
    }

        public String getPrediction(){
            return answers[1];
        }

}
