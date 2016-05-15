
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

import com.mongodb.util.JSON;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;

/**
 * Java MongoDB : Insert a Document
 *
 */
public class InsertDocumentApp {
    public void insertQueries(String str, String str1) {


String[] keys=str.split(",");
        String[] values=str1.split(",");
        JSONObject jo = new JSONObject();

      /*  try {
            jo.put(keys[0], values[0]);
            jo.put(keys[1], values[1]);
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        JSONArray ja = new JSONArray();
        ja.put(jo);
*/FileReader fileReader=null ;
        String line = null;
        JSONObject obj = null;
        JSONArray jArray=new JSONArray();
        try {
             fileReader =
                    new FileReader("filesave/part-00000");
            BufferedReader bufferedReader =
                    new BufferedReader(fileReader);

            while((line = bufferedReader.readLine()) != null) {
                System.out.println(line);

                obj=new JSONObject(line);
                jArray.put(obj);
                //for(int i=0;i<= )

            }

            // Always close files.
            bufferedReader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        BasicDBObject user1 = new BasicDBObject();
       // user1.put("firstName", "San");
        try {
            //for()

            for(int n = 0; n < jArray.length(); n++)
            {
                JSONObject object = jArray.getJSONObject(n);
                // do some stuff....
                user1.put("screen_name"+n,object.getString("screen_name"));
                user1.put("followers_count"+n,object.getString("followers_count"));
                user1.put("favourites_count"+n,object.getString("favourites_count"));
                user1.put("friends_count"+n,object.getString("friends_count"));
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }



        MongoClientURI uri = new MongoClientURI("mongodb://user:password@ds015902.mlab.com:15902/pb");
        MongoClient client;
        try {
            client = new MongoClient(uri);
            DB db = client.getDB(uri.getDatabase());
            DBCollection users = db.getCollection("query1");
            users.drop();
           // users.
            WriteResult result = users.insert(user1);
            System.out.print("h");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }




    }

}