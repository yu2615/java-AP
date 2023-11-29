import java.util.Random;

public class KujibikiApp {
    public static void main(String[] args) {
        
        String[] fortunes = {"luck","good","nice","no luck"};
        int randomIndex = new Random().nextInt(fortunes.length);
        String fortune = fortunes[randomIndex];

        System.out.println("To day " + fortune);
    }
}
