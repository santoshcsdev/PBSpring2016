name := "project"

version := "1.0"

scalaVersion := "2.11.8"
libraryDependencies ++= Seq(
  "org.apache.spark" %% "spark-core" % "1.4.1" ,
  "org.apache.spark" %% "spark-streaming" % "1.4.1",
  "org.apache.spark" %% "spark-streaming-twitter" % "1.4.1",
  "org.apache.hadoop" % "hadoop-common" % "2.7.0" exclude ("org.apache.hadoop","hadoop-yarn-server-web-proxy"),
  "org.apache.spark" %% "spark-streaming-twitter" % "1.4.1",
  "org.apache.spark" %% "spark-mllib" % "1.4.1",
  "org.mongodb" % "mongo-java-driver" % "3.2.2",
  "net.liftweb" %% "lift-json" % "3.0-M1",
  "org.apache.commons" %% "commons-io" % "1.3.2"


)
resolvers ++= Seq(
  "Twitter4J Repository" at "http://twitter4j.org/maven2/",
   "Twitter Maven Repo" at "http://maven.twttr.com/",
  Resolver.sonatypeRepo("public")
)


scalacOptions += "-deprecation"