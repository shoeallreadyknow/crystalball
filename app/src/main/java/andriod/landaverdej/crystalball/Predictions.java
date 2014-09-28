package andriod.landaverdej.crystalball;

public class Predictions {

    public static Predictions predictions;
   public String[] answers;

    public Predictions(){
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
