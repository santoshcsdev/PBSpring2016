import java.io.PrintStream
import java.net.{ServerSocket, InetAddress}
import scala.io.BufferedSource

object ServerSocket {
  def main(args: Array[String]) {
    println(InetAddress.getLocalHost.getHostAddress)
    val server = new ServerSocket(9999)
    while (true) {
      val s = server.accept()
      val in = new BufferedSource(s.getInputStream()).getLines()
      val out = new PrintStream(s.getOutputStream())
      Queries.runQuery()
      println("Query Runned")
      out.println()
      out.flush()
      s.close()
    }
  }
}
