package com.avn.controller;

import java.net.http.HttpHeaders;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("api/v1/dummy")

public class HomeContoller {
	@GetMapping("/first")
	public void displayInfo(@RequestParam("clgName") String name) {
		System.out.println("Request param given is "+name);
	}
	@GetMapping("/second12/{source}/{destination}")
	public String displayInformation(
			@PathVariable(name = "source")
			String name,
			@PathVariable(name="destination")
			String name1) {
		return "Request param give is"+name+"and"+name1;
	}
	@GetMapping({"/second123/{source}/{destination}"})
	public String displayInformation1(@PathVariable Map<String,String> m ) {
		return "Path variable given" + "is"+m.get("source")+"and"+m.get("destination");
	}
	@GetMapping({"/second123"})
	public String DisplayHeaders(
	        @RequestHeader(value = "User-Agent", defaultValue = "") String userAgent,
	        @RequestHeader(value = "Accept", defaultValue = "") String accept) {
	    
	    return "headers given :" + userAgent + " " + accept;
	}
	@GetMapping("/")
	public String home() {
	    return "Stickers Backend is Live!";
	}

}
