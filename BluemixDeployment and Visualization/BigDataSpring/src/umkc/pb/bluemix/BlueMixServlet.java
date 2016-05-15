package umkc.pb.bluemix;

import java.io.IOException;
import java.net.Socket;
import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BlueMixServlet
 */
@WebServlet("/BlueMixServlet")
public class BlueMixServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BlueMixServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		try{
			
			Socket sock=new Socket("192.168.1.210",9999);
			OutputStream osstream=sock.getOutputStream();
			PrintWriter ServerOut=new PrintWriter(osstream,true);
			
			ServerOut.println("pushData");
			ServerOut.flush();
			
			
			
			
			
		}
		catch(Exception e){
			System.out.println("Exception is "+ e);
		}
	}

}
