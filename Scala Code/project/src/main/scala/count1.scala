import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.hadoop.util
import org.apache.spark.sql.SQLContext

object count1 {
  def main(args: Array[String]) {
    System.setProperty("hadoop.home.dir","C:\\Users\\shanmuk\\Desktop\\PB\\phase 2\\Utils")
    // initialise spark context
    val conf = new SparkConf().setAppName("CountSpark").setMaster("local[2]").set("spark.executor.memory","8g")
    val sc = new SparkContext(conf)

    //val textFile = sc.textFile("C:\\Users\\shanmuk\\Desktop\\PB\\project\\phase 2\\Tweets.Json")
    val sqlContext = new SQLContext(sc)
    val tweetsfile = sqlContext.jsonFile("C:\\Users\\shanmuk\\Desktop\\PB\\phase 2\\Tweets1.Json")
    tweetsfile.registerTempTable("tweetstable")

    //val query1 = sqlContext.sql("select count(user.name) as AtoB from tweetstable where user.name like 'A%' OR user.name like 'B%' OR user.name like 'C%' OR user.name like 'D%' OR user.name like 'E%'");
    //val query1 = sqlContext.sql("select count(user.name) as FtoJ from tweetstable where user.name like 'F%' OR user.name like 'G%' OR user.name like 'H%' OR user.name like 'I%' OR user.name like 'J%'");
    //val query1 = sqlContext.sql("select count(user.name) as KtoO from tweetstable where user.name like 'K%' OR user.name like 'L%' OR user.name like 'M%' OR user.name like 'N%' OR user.name like 'O%'");
    //val query1 = sqlContext.sql("select count(user.name) as PtoT from tweetstable where user.name like 'P%' OR user.name like 'Q%' OR user.name like 'R%' OR user.name like 'S%' OR user.name like 'T%'");
    //val query1 = sqlContext.sql("select count(user.name) as UtoZ from tweetstable where user.name like 'U%' OR user.name like 'V%' OR user.name like 'W%' OR user.name like 'X%' OR user.name like 'Y%' OR user.name like 'Z%'");

    //val query2 = sqlContext.sql("select lang,avg(user.followers_count) as followers from tweetstable group by lang order by followers desc");

    //val query3 = sqlContext.sql("select user.screen_name, user.followers_count,user.favourites_count,user.friends_count from tweetstable order by  user.followers_count desc limit 3");

    //val query4 = sqlContext.sql("select count(user.name) as morecount from tweetstable where user.statuses_count>10000 and user.verified=false");
    //val query4 = sqlContext.sql("select count(user.name) as lesscount from tweetstable where user.statuses_count<10000 and user.verified=true");

    val query5 = sqlContext.sql("select count(user.name) as kohli from tweetstable where text like '%kohli%' ");
    val query51 = sqlContext.sql("select count(user.name) as dhoni from tweetstable where text like '%dhoni%' ");
    val query52 = sqlContext.sql("select count(user.name) as ashwin from tweetstable where text like '%ashwin%' ");
    query5.show();
    query51.show();
    query52.show();
    //val query6 = sqlContext.sql("select count(user.created_at) as one from tweetstable where user.created_at like '%2006%' or user.created_at like '%2007%' or user.created_at like '%2008%'");
    //val query6 = sqlContext.sql("select count(user.created_at) as two from tweetstable where user.created_at like '%2009%' or user.created_at like '%2010%' or user.created_at like '%2011%'");
    //val query6 = sqlContext.sql("select count(user.created_at) as three from tweetstable where user.created_at like '%2012%' or user.created_at like '%2013%' or user.created_at like '%2014%'");
    //val query6 = sqlContext.sql("select count(user.created_at) as four from tweetstable where user.created_at like '%2015%' or user.created_at like '%2016%'");

    //val query7 = sqlContext.sql("select count(user.verified) as verified from tweetstable where user.verified =TRUE");
    //val query7 = sqlContext.sql("select count(user.verified) as notverified from tweetstable where user.verified =FALSE");

   // val query8 = sqlContext.sql("select user.time_zone , count(user.time_zone) from tweetstable group by user.time_zone ");
   // query8.show();


    //      val counts = textFile.flatMap(line => line.split(" "))
    //      .map(word => (word, 1))
    //    .reduceByKey(_ + _)
    //counts.saveAsTextFile("C:\\Users\\shanmuk\\Desktop\\PB\\project\\phase 2\\TweetsWordCount2")


  }
}
