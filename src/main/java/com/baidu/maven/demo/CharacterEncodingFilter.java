package com.baidu.maven.demo;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class CharacterEncodingFilter implements javax.servlet.Filter {  
  
  
    @Override  
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException,  
                    ServletException {  
        request.setCharacterEncoding("gbk");  
        System.out.println("set encoding gbk");
        
        filterChain.doFilter(request, response);  
    }

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void init(FilterConfig arg0) throws ServletException {
		
	}  
  
}  
 